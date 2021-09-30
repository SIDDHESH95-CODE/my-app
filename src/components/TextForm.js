import React, { useState } from 'react'

export default function TextForm(props) {
    
    const [text, setText] = useState("");
    // text = "New Text";      // Wrong way to enter the state text
    // setText("New Text");    // Correct way to enter the state text

    const clickedToUp = ()=> {
        // console.log("Clicked on button");
        // console.log("Clicked on button" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "Success")
    }
    const clickedToLo = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "Success")
    }
   
    const clickedToClear = ()=> {
        let newText = ("");
        setText(newText);
        props.showAlert("Text cleared!", "Success");
    }
    
    const changedUp = (event)=>{
        // console.log("Value has changed")
        setText(event.target.value);    // To able to type in your textarea.
    }
    
    const clickedToCopy = ()=> {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clickboard!", "Success")
    }

    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "Success")
    }
    return (
        <>
        <div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={changedUp} id="myBox" rows="8" placeholder="Type your text here"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={clickedToUp}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={clickedToLo}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={clickedToClear}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={clickedToCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container my-3" style={{color: props.mode === 'light'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h3><u>Preview</u></h3>
            <p><small><em>{text.length>0 ? text : 'Enter somthing in the textbox above to preview it here..'}</em></small></p>
        </div>
        </>
    )
}
