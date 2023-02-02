import React from 'react'

export default function Event() {
    // small function which is called during onclick event
    const shoot=(e)=>{
        alert("Great Shot")
        console.log(e)
    }
    // function that takes parameter while its been called in onclick function
    const shoot2=(e)=>{
        alert(e)
    }
    function Msg(z){
        alert("HEY WATSUPPPP!" + z)
    }
  return (
    <>
    <h1 style={{color:"peachpuff"}}>----------------event start-----------------------</h1>
    <div>Event</div>
    <button style={{color:"brown"}} onClick={shoot}>Take a shot</button>
    {/* in order to send parameter during function call you have o write it in arrow function */}
    <button style={{color:"brown"}}  onClick={()=>shoot2("nice kick")}>Take a shot</button><br/>
    <button onMouseOver={()=>Msg("ZAM")}>click</button><br/>
    <input type="text" onChange={shoot}></input>
    <h1 style={{color:"peachpuff"}}>----------------event end-----------------------</h1>
    </>
  )
}
