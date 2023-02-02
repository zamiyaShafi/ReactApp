import React from 'react'

export default function Spobject() {
    const myVehicle={
        brand:"ford",
        model:"Mustang",
        color:"red"
        }
        const updateMyVehicle={
            type:"car",
            year:"2021",
            color:"yellow"
        }
        const objectcombined={...myVehicle,...updateMyVehicle}
  return (
    <div>Spobject
        
        <h1>{console.log(objectcombined)}</h1>
    </div>
  )
}
