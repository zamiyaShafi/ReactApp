import React from 'react'

export default function Form() {
    function Myform(){
        return(
            <form action='classes.jsx'>
                <label>enter your name:
                    <input type="text"/>
                </label>
                <input type="submit" value="submit" ></input>
            </form>

            
        )
    }
  return (
    <>
    <h1>---------------Form start-----------------</h1>
    <div>Form</div>
    <Myform/>
    <h1>---------------Form end-----------------</h1>
    </>
  )
}
