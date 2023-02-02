import React from 'react'
import {Card,Col,Row} from 'react-bootstrap'

export default function() {
    const A=[
        {
            name:"zamiya",
            age:21,
            place:"bajal",
            src:"img/i1.png"
        },
        {
            name:"raseena",
            age:21,
            place:"bajal",
            src:"img/i2.png"
        },
         {
            name:"ishrath",
            age:20,
            place:"kc road",
            src:"img/i3.png"
        },
        {
            name:"zakiya",
            age:20,
            place:"mangalore",
            src:"img/i3.png"
        }
    ]
  return (
    <>
    <Row lg="3">
        {A.map((v)=>{
            return (
                <div style={{ margin:"auto",marginBottom:"30px"}} >
                <div className="card" style={{width: "250px",height:"350px"}}>
  <img src={v.src} className={"card-img-top  , rounded float-start"} alt="user"  style={{width:"200px" ,height:"200px"  }}/>
  <div className="card-body" >
    <h5 className="card-title">{v.name}</h5>
    <p className="card-text">
        {v.age}<br/>
        {v.place}<br/>
    </p>
    <a href="/Registration" className="btn btn-primary">Register now</a>
  </div>
</div>
                </div>
            )
        })}
    </Row>
    <table>
        
    </table>
    </>
  )
}
