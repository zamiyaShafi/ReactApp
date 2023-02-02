import React from 'react'

export default function Desnestedobject() {
    // nested object
    const vehic={
        brand:"ford",
        model:"mustang",
        type:"car",
        year:2021,
        color:"red",
        registration:{
            city:"Houstan",
            state:"texas",
            country:"USA"
        }
    }
    // destructuring of nested object
    Destructuring(vehic)
    var msg;
    function Destructuring({brand,registration:{city}}){
        msg = "MY "+brand+" is registered in "+city;
    }
  return (
    <div>Desnestedobject
        <h2>{msg}</h2>
    </div>
  )
}
