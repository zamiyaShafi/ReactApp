import React from 'react'
import { Link } from 'react-router-dom'

export default function Spredoperator() {
    // // spread operartor for array
    // const numberone=[1,2,3,,4,5,6]
    // const numbertwo=[7,8,9]
    // const numberscombined=[...numberone, ...numbertwo]
    // 2 object using spread operator
    // const myVehicle={
    // brand:"ford",
    // model:"Mustang",
    // color:"red"
    // }
    // const updateMyVehicle={
    //     type:"car",
    //     year:"2021",
    //     color:"yellow"
    // }
    // const objectcombined={...myVehicle,...updateMyVehicle}
    // // array destructuring and combining using spread operator
    // const numbers=[1,2,3,4,5,6]
    // const [a,b,c,...rest]=numbers
    
  return (
    <>
    <h1>--------------spread operator start-----------</h1>
    <div>Spredoperator</div>
    <Link to="/Sparray">Spread operator in array</Link><br/>
    <Link to="/Spobject">Spread operator in object</Link><br/>
    <Link to="/Sparrayobj">array destructuring and combining using spread operartor</Link><br/>
    {/* <h1>{numberone}</h1>
    <h1>{numbertwo}</h1>
    <h1>{numberscombined}</h1> */}
    {/* <h1>{console.log(objectcombined)}</h1> */}
    {/* <h1>{a}</h1>
    <h1>{b}</h1>
    <h1>{c}</h1>
    <h1>{rest}</h1> */}
    
    
    <h1>--------------spread operator end-----------</h1>
    </>
  )
}
