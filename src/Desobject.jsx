import React from 'react'

export default function Desobject() {
    // using object
    const vehi={
        brand:"ford",
        model:"mustang",
        type:"car",
        year:2021,
        color:"red"
    }
    let message
    let z
    // new method
    MyVehicle(vehi)
    function MyVehicle({type,color,brand,model}){
     message='my '+ type+' is a '+color+' '+brand+ ' '+model
    }
    // old method
    Mavehicle(vehi)
    function Mavehicle(v){
        z='my '+v.type+' is a '+v.color+' '+v.brand+' '+v.model

    }
  return (
    <div>Desobject
         <h1>{message}</h1>
       <h1>{z}</h1>
    </div>
  )
}
