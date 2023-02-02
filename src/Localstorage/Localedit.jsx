import React from 'react'

export default function Localedit() {
  return (
    <div>
        <form>
  <div className="mb-3">
    <h1 style={{color:"black"}}><center><u>EDIT</u></center></h1>
    <label for="exampleInputEmail1" className="form-label">NAME</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">PHONE NO</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">EMAIL</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
