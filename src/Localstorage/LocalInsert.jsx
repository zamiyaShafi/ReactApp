import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';//for navigating to next page

export default function LocalInsert() {
  let nav=useNavigate()//create any variable
  //if there  is no value 
  let initialvalue;
  if(localStorage.getItem("Employee")===null){
    initialvalue=[]
  }
  else{
    initialvalue=JSON.parse(localStorage.getItem("Employee"))
  }
  //step 1 creating state for storing values
  const [name,setName]=useState("")
  const [phone_no,setPhone_no]=useState("")
  const [email,setEmail]=useState("")



  const [value,Setvalue]=useState(initialvalue)


//  if you are using form tag then only u can use e
// step 2 when you click submit it should be stored in local storage
  const Submit=async(e)=>{ //async to wait for await
    e.preventDefault() //to avoid loadding



    let emp_id=101;
    if(value.length === 0){
      emp_id=101
    }
    else{
      emp_id=value[value.length -1].emp_id+1
    }




    const details={
      emp_id:emp_id,
      Name:name,
      Email:email,
      Phone_no:phone_no
    }

    Setvalue([...value,details])


    console.log("name="+name)
    localStorage.setItem("Employee_name",name)
    console.log("phone="+phone_no)
    localStorage.setItem("Employee_phone_no",phone_no)
    console.log("email="+email)
    localStorage.setItem("Employee_email",email)


    await localStorage.setItem("Employee",JSON.stringify(value))//cz it is not executed inside useeffect



    nav("/LocalView")//use nav variable here 
    





    
   

  }
  useEffect(()=>{
    localStorage.setItem("Employee",JSON.stringify(value))

  },[value])


  console.log(value)

  return (
    <div>
        <form>
  <div className="mb-3">
    <h1 style={{color:"red"}}><center><u>FORM</u></center></h1>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">NAME</label>
    <input type="text"  onChange={(e)=>{setName(e.target.value)}}/>
  </div>
    <label htmlFor="exampleInputEmail1" className="form-label">EMAIL</label>
    <input type="email"  onChange={(e)=>{setEmail(e.target.value)}}/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">PHONE NO</label>
    <input type="tel" onChange={(e)=>{setPhone_no(e.target.value)}}/>
  </div>
  
  
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  
  
  <button type="submit" className="btn btn-primary" onClick={Submit}>Submit</button>
</form>
    </div>
  )
}
