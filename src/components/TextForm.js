import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState("");

    const handleUpClick = ()=> {
        // console.log("Uppercase Invoked");
        const newText = text.toUpperCase();
        // setText("You have clicked on the button");
        setText(newText);
        props.showAlert("Converted to uppercase!", "success")
    }
    const handleLoClick = ()=> {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success")
    }
    const handleClearClick = ()=> {
        const newText = "";
        setText(newText);
        props.showAlert("Text cleared!", "success")
    }
    const handleOnChange = (event)=> {
        // console.log("onChange Invoked")
        setText(event.target.value);
    }
    const handleCopy = ()=> {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success")
    }
    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")
    }

    return (
        <>
        <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"
                style={{color: props.mode === 'dark'? 'white': 'black',
                backgroundColor: props.mode === 'dark'? 'black': 'white'}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
            <h3>Your text summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}  Minutes to read</p>
            <h3>Preview</h3>
            <p><em>{text.length>0?text:"Nothing to preview.."}</em></p>
        </div>
        </>
    )
}
