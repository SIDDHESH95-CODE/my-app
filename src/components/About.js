// import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // }) 
        let myStyle = {
            color: props.mode === 'dark'? 'white': 'black',
            backgroundColor: props.mode === 'dark'? 'black': 'white'
        }

    // const [btnText, setBtnText] = useState("Enable dark mode")

    // const toggleStyle = ()=> {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable light mode");
    //     } 
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable dark mode");
    //     }
    // }
    return (
        <div className="container my-3">
            <h2 style={{color: props.mode === 'dark'? 'white': 'black'}}>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Text-Utilities gives you a way to analyzeyour text quickly and efficiently. Be it word count, character count or text preview.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Text-Utilities is a free character counter tool that provides instant charcter count and word count statistics for a given text. Text-Utilities reports the number of words & characters. Thus it is suitable for wrtiting text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong> 
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                           This word counter software works in any web browsers such as Chrome, Firefox, Microsoft Edge, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button className="btn btn-primary my-2" onClick={toggleStyle}>{btnText}</button> */}
        </div>
    )
}
