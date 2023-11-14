import React, { useState } from 'react'


export default function TextChange(props) {

    const [text, setText] = useState ("")
    const handleUpCase = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase Done", "success");
    }

    const handlelowCase = ()=> {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Lowercase Done", "success");
  }
  
    const onChangeHandler = (event)=> {
        setText(event.target.value)
    }

  return (

    <>
    
  <div className={`mb-3 container my-3 text-${props.mode === "dark"?"light":"dark"}`}>
  <h1>{props.heading}</h1>
  <textarea className={`form-control bg-${props.mode } text-${props.mode === "dark"?"light":"dark"}`} onChange={onChangeHandler} id="exampleFormControlTextarea1" placeholder="enter text here" rows="3" value={text}></textarea>
  <button className="btn btn-primary my-3 mx-1" onClick={handleUpCase} >Convert To Uppercase</button>
  <button className="btn btn-primary my-3 mx-1" onClick={handlelowCase} >Convert To Lowercase</button>
</div>
<div className={`mb-3 container my-3 text-${props.mode === "dark"?"light":"dark"}`}>
  <h3>Your text summary</h3>
  <p>{text.split(" ").length} words and {text.length} Characters</p>
 
</div>
 
</>
  )
}
