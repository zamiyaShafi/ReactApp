import React from 'react'

export default function Ternaryoperator() {
    let a="false"
    let value1="right"
    let value2="left"
    const click=(value)=>{
        {value=="right"?alert("you have clicked the right button"):alert("you have clickd the left button")}
    }

  return (
    <>
    
    <h1>-------------Ternary operartor start-----------</h1>
    <div>Ternaryoperator</div>
    {a=="true"?<h1 style={{color:"blue"}}>True</h1>:<h1 style={{color:"red"}}>False</h1>}
    <button onClick={()=>click(value1)}>button 1</button>
    <button onClick={()=>click(value2)}>button 2</button>
    
    <h1>-------------Ternary operartor end-----------</h1>
    </>
  )
}
