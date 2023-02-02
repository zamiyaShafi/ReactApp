import React from 'react'

export default function functions() {
  let c;
  function Abc(){
    c="str"
    return c
  }
    function XYZ(){
        return <h1>hey this the fuction</h1>
    }
  return (
    <>
    <h1>-------------function start--------------</h1>
    <div>functions123</div>
    <XYZ/>
    <Abc/>
    <h1>{c}</h1>
    <h1>--------------function end-----------------</h1>
    </>
  )
}
