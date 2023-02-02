import React from 'react'

export default function List() {
    function Car(props){
        return <li>I am a {props.brand}    {props.i+1}</li>
    }
    function Garage(){
        const cars=["audi","bmw","benz"]
        return(
            <>
            <h1>who lives in my garage</h1>
            <ul>
                {/* here we are decalring the function plus sending map value as a props value */}
                {cars.map((car,index)=><Car brand={car} i={index}/>)}
            </ul>
            </>
        )
    }
    function Print(props){
        return <h1>{props.value}      {props.i}</h1>
    }
    let a=[1,2,3,4,5]
  return (
    <>
    <h1>-----------------list start--------------</h1>
    <div>List</div>
    <Garage/>
    {a.map((b,index)=>{return <Print value={b} i={index}/>})}
    <h1>-----------------list end--------------</h1>
    </>
  )
}
