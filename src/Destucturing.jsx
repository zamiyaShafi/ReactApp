import React from 'react'
import { Link } from 'react-router-dom'


export default function Destucturing() {
    // // using array
    // let vehicles=["car","bike","bus"]
    // // old method
    // const car=vehicles[0]
    // const truck=vehicles[1]          
    // const suv=vehicles[2]
    // // new method
    // const [c1,c2,c3,c4]=vehicles
    
    // const k=[12+2,14+3]
    // const p=["12"+"2","14"+"3"]
    // const [m,n]=p
    // const [c,d]=k
    // // using object
    // const vehi={
    //     brand:"ford",
    //     model:"mustang",
    //     type:"car",
    //     year:2021,
    //     color:"red"
    // }
    // let message
    // let z
    // // new method
    // MyVehicle(vehi)
    // function MyVehicle({type,color,brand,model}){
    //  message='my '+ type+' is a '+color+' '+brand+ ' '+model
    // }
    // // old method
    // Mavehicle(vehi)
    // function Mavehicle(v){
    //     z='my '+v.type+' is a '+v.color+' '+v.brand+' '+v.model

    // }
    // // nested object
    // const vehic={
    //     brand:"ford",
    //     model:"mustang",
    //     type:"car",
    //     year:2021,
    //     color:"red",
    //     registration:{
    //         city:"Houstan",
    //         state:"texas",
    //         country:"USA"
    //     }
    // }
    // // destructuring of nested object
    // Destructuring(vehic)
    // var msg;
    // function Destructuring({brand,registration:{city}}){
    //     msg = "MY "+brand+" is registered in "+city;
    // }
  return (
    <div>
        <h1>----------destructuring start------------</h1>
        <Link to="/Desarray">Destucturing of array</Link><br/>
        <Link to="/Desobject">Destucturing of object</Link><br/>
        <Link to="/Desnestedobject">Destucturing of nested object</Link>
       {/* <h1>{car}</h1>
       <Link to="/Arrowfunction">Arrowfunction</Link>
       <h1>{truck}</h1>
       <h1>{suv}</h1>
       <h1>{c1}</h1>
       <h1>{c2}</h1>
       <h1>{c3}</h1> */}
       {/* <h1>{c4}</h1> */}
       {/* <h1>{c}</h1>
       <h1>{d}</h1>
       <h1>{m}</h1>
       <h1>{n}</h1> */}
       {/* <h1>{message}</h1>
       <h1>{z}</h1> */}
       {/* <h2>{msg}</h2> */}
       <h1>----------destructuring end------------</h1>





    </div>
  )
}
