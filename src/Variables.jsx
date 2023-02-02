import React from 'react'

export default function Variables() {
  const a="hey"
  let b=123
  var c="strt"
  // we can write jsx code by assigning it to the variable
  const myelement=<h1 style={{color:"brown"}}>hey jsx</h1>
  return (
    <>
    <h1>-----------------------------variables start--------------</h1>
    <div style={{backgroundColor:"red"}}>Variables </div>
    <h1>{a}</h1>
    <h1>{b}</h1>
    <h1>{c}</h1>
    {myelement}
    <input type="email" name="name" ></input>
    <h1>----------------------------variables end------------------</h1>
    </>
  )
}
