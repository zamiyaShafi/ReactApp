import React,{useState} from 'react'

export default function Registration() {
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const [address,setAddress]=useState("")



    const Registration=()=>{
        console.log("NAME: " + name)
        console.log("PHONE : " + phone)
        console.log("EMAIL : " + email)
        console.log("ADDRESS : " + address)
       
        
        
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a classname="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        
        <label>Name: </label>
        <input type="text" name="name" placeholder='name' onChange={(e)=>setName(e.target.value)}></input><br/>
        <label>phone: </label>
        <input type="number"name="phone" placeholder='phone' onChange={(e)=>setPhone(e.target.value)}></input><br/>
        <label>email: </label>
        <input type="email" name="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}></input><br/>
        <label>Address: </label>
        <input type="text" name="address" placeholder='address' onChange={(e)=>setAddress(e.target.value)}></input><br/>
        <button onClick={Registration}>Submit</button>
        
        <table className="table">
  <thead className='table-primary'>
    <tr >
      <th scope="col">S.N</th>
      <th scope="col">NAME</th>
      <th scope="col">PHONE</th>
      <th scope="col">EMAIL</th>
      <th scope="col">ADDRESS</th>
    </tr>
  </thead>
  <tbody className="table-info">
    <tr>
      <th scope="row">1</th>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{address}</td>
    </tr>
    
  </tbody>
</table>
        
        

    </div>
  )
}
