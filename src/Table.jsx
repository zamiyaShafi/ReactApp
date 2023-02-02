import React from 'react'
import { Link } from 'react-router-dom'



export default function 
({StudentDetails}) {
    // const A=[
    //     {
    //         id:1,
    //         name:"zamiya",
    //         age:21,
    //         place:"bajal",
    //         src:"img/i1.png"
    //     },
    //     {
    //         id:2,
    //         name:"raseena",
    //         age:21,
    //         place:"bajal",
    //         src:"img/i2.png"
    //     },
    //      {
    //         id:3,
    //         name:"ishrath",
    //         age:20,
    //         place:"kc road",
    //         src:"img/i3.png"
    //     },
    //     {
    //         id:4,
    //         name:"zakiya",
    //         age:20,
    //         place:"mangalore",
    //         src:"img/i3.png"
    //     }
    // ]
    console.log(StudentDetails)
  return (
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">S NO</th>
      <th scope="col">NAME</th>
      <th scope="col">AGE</th>
      <th scope="col">PLACE</th>
      <th scope="col">View</th>
      <th scope="col">EDIT</th>
      <th scope="col">DELETE</th>

    </tr>
  </thead>
  <tbody>
    {StudentDetails.map((v,index)=>{
        return (
            <>
            <tr>
      <th scope="row">{index+1}</th>
      <td>{v.name}</td>
      <td>{v.age}</td>
      <td>{v.place}</td>
      <td><Link to={`/View/${v.id}`}>View</Link></td>
      <td><Link to={`/Edit/${v.id}`}>Edit</Link><br/></td>
      
      
      <td><button>delete</button></td>

    </tr>
            </>
        )
    })}
    
   
  </tbody>
</table>

    </div>
  )
}

