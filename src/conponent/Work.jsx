import React, { useState } from 'react'

export default function Work() {
    const [text,setText]=useState("");
    const changeValue= (e) => {
        setText(e.target.value)
    }
   
    const changeUplowercase = () =>{
        setText(text.toUpperCase())
    } 
    const chagelowercase = () => {
        setText(text.toLowerCase())
    }

  return (
    <>
        <div className='work'>
            <h2>Work Couter</h2>
            <div className='handle'>
                <div className='handletext'>
                    <h3>Work</h3>
                    <p>{text ? text.trim().split(/\s+/).length : 0}</p>
                </div>
                <div className='handletext'>
                <i class="fa-light fa-paintbrush"></i>
                    <h3>Letter</h3>
                    <p>{text.length}</p>
                </div>
                <div className='handletext'>
                    <h3>Paragraph</h3>
                    <p>{
                        text.trim().split(/\n+/).filter((e) => e !== "").length
                        }
                    </p>
                </div>
            </div>
            <textarea onChange={changeValue} value={text} placeholder='Enter/Paste Your Text  Here'></textarea>
            <div className='button'>
                <button onClick={changeUplowercase}>Click to Uppercase</button>
                <button onClick={chagelowercase}>Click to Lowercase</button>
            </div>
        </div>

    </>
  )
}
