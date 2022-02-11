import React,{useState} from 'react'
// @ts-ignore
import PropTypes from 'prop-types'



/**
 * @param {{ heading: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal; }} props
 */
export default function TextForm(props) {
    const handleUpClick=()=>{
     let newText= text.toUpperCase();
      setText(newText)
      // @ts-ignore
      props.showAlert("converted to uppercase", "success")
    }
    const handleCopy=()=>{
      var text=document.getElementById("myBox")
      // @ts-ignore
      text.select();
      // @ts-ignore
      navigator.clipboard.writeText(text.value);
      // @ts-ignore
      props.showAlert("text copied to clipboard", "success")
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      // @ts-ignore
      props.showAlert("extra spaces removed", "success")
    }
     const handlelowClick=()=>{
      let newText= text.toLowerCase();
       setText(newText)
       // @ts-ignore
       props.showAlert("converted to lowercase", "success")
       
     }


    const clear=()=>{
      let newText= ""
       setText(newText)
       // @ts-ignore
       props.showAlert("text field cleared", "success")
     }
    const handleOnChange=(event)=>{
      setText(event.target.value)
    }
    const [ text , setText]= useState('')
    
    return (
      <>
    <div className="container">
   <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows={8}></textarea>
</div>
<button className="btn btn-primary my-1 mx-1" onClick={handleUpClick} >convert to uppercase</button>
<button className="btn btn-primary my-1 mx-1" onClick={handlelowClick} >convert to lowercase</button>
<button className="btn btn-primary my-1 mx-1" onClick={clear} >Clear</button>
<button className="btn btn-primary my-1 mx-1" onClick={handleCopy} >Copy</button>
<button className="btn btn-primary my-1 mx-1" onClick={handleExtraSpaces} >remove spaces</button>
   </div>
    <div className="container my-2">
      <h2>Your text summary</h2>
      <p>{text.split(' ').length} words, {text.length} characters</p>
      <p>{0.008*text.split(' ').length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"enter something to preview"}</p>
    </div>
    </>
  )
}
TextForm.propTypes={heading: "set title here",
aboutText: "About text here"}


