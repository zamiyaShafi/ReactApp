import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'

export default function LocView() {
  // creating param variable
  const params=useParams()
  console.log(params.id)
  console.log(params)
  // here id is from router where you have specified

// created array to store values
  const [single,setSingle]=useState([]);


  // to get value from local storage use useeffect
  // filter can take only array of objevt
useEffect(()=>{
  setSingle((JSON.parse(localStorage.getItem("Employee"))).filter((item)=>{
    return item.emp_id==params.id
})
  )

},[])

console.log(single)






  return (
    <div >
        <h1 style={{marginLeft:"400px"}}>Single view</h1>
        <div className="card" style={{width: "18rem;",display:"flex",marginRight:"400px",marginLeft:"400px",backgroundColor:"palevioletred"}} >
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title">Emp_id : {single[0]?.emp_id}</h5>
    <h5 className="card-title">Name: {single[0]?.Name}</h5>
    <h5 className="card-title">Phone_no: {single[0]?.Phone_no}</h5>
    <h5 className="card-title">Email: {single[0]?.Email}</h5>
   
    <a href="/LocalView" className="btn btn-primary">BACK</a>
  </div>
</div>
    </div>
  )
}
