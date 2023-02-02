import React from 'react'

export default function Arrowfunction() {
  function Arrow(){
    return <h1>hello</h1>
  }
  const Abc=()=>{
    return "hello have a good day"
  }
  const Hello=()=>"hello Whats Up"
  
  return (
    <div>
        
        <h1>-------------ARROW FUNCTION START---------</h1>
<Arrow/>
<Abc/><br/>
<Hello/>

        <h1>-------------ARROW FUNCTION END---------</h1>


    </div>
  )
}
