import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function LocalView() {
  const [display,setDisplay]=useState([])
  const [del,setDel]=useState([]);
  console.log(del)
  const onDelete=(del)=>{
    const newDisplay=display.filter((e)=>{
      console.log(e)
      return e!== del
    })
    setDisplay(newDisplay)
    localStorage.setItem("Employee",JSON.stringify(newDisplay))

  }



  useEffect(()=>{
setDisplay(JSON.parse(localStorage.getItem("Employee")))
  },[])
  console.log(display)
  
 
  
  
  return (
    <div>
        <table className="table table-dark table-striped">
        
  <thead>
    <tr>
      <th scope="col">SI NO</th>
      <th scope="col">EMP ID</th>
      <th scope="col">EMP NAME</th>
      <th scope="col">PHONE NO</th>
      <th scope="col">EMAIL</th>
      <th scope="col">VIEW</th>
      <th scope="col">EDIT</th>
      <th scope="col">DELETE</th>
    </tr>
  </thead>
  <tbody>
  {display.map((v,index)=>{
        return(
    <tr>
      
          
          <td>{index+1}</td>
          <td>{v.emp_id}</td>
          <td>{v.Name}</td>
          <td>{v.Email}</td>
          <td>{v.Phone_no}</td>
          <td><Link to={`/LocView/${v.emp_id}`}>View</Link></td>
          <td><Link to={`/Localedit/${v.emp_id}`}>Edit</Link></td>
          <td><Link  data-bs-toggle="modal" data-bs-target="#exampleModal"
          onClick={()=>setDel(v)}>Delete</Link></td>
          
        
        </tr>
        )

      })}
    
  
   
        

   
   
  </tbody>

</table>
{/* you have to paste here modal code */}




<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Delete</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      Are you sure want to delete this?
      </div>
      <div className="modal-footer">

        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
        {/* write dat miss attribute to close that modal */}
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=> onDelete(del)}>Yes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
