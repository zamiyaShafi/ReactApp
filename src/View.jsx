import React from 'react'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'
import img from './img/i1.png'

export default function View({StudentDetails}) {
    const params=useParams()
    // here params is a variable it can be anything
    const [value,setValue]=useState([])
    console.log(params)
    console.log(params.id)
    console.log(StudentDetails)
    useEffect(()=>{
        setValue(StudentDetails.filter((e)=>e.id==params.id))

    },[])

    console.log(value);
    
   
  return (
    <div>
      {value.map((v)=>{
        return(
          <>
      <div classNameName="card" style={{width: "18rem;"}}>
  <img src={img} classNameName="card-img-top" alt="..." />
  <div classNameName="card-body">
    <h5 className="card-title">{v.name}</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{v.age}</li>
    <li className="list-group-item">{v.place}</li>
    {/* <li className="list-group-item">A third item</li> */}
  </ul>
  <div className="card-body">
    <a href={`/Edit/${v.id}`} className="card-link">Edit</a><br/>
    <a href="/Table" className="card-link">Back</a>
  </div>
</div>
      
      
          
          
          </>
        )

      })}
        
    </div>
  )
}
