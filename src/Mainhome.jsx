import React from 'react'
import {Link} from 'react-router-dom'
import {Arrowfunction} from 'react-router-dom'
import div from './main.css'
import Button from '@mui/material/Button';




const myStyle={

  backgroundImage:"url('https://images.pexels.com/photos/11034413/pexels-photo-11034413.jpeg?auto=compress&cs=tinysrgb&w=600')",
  height:"1200px",
  weight:"800px"
}
const table={
  fontFamily:"cooperBlack",
  fontSize:"30px",
  color:"black",
  borderColor:"black"
  
  
}

const backg={
  
  backgroundColor:"#F5A9E1",
  marginTop:"-1px",
  height:"70px",
  fontFamily:"algerian"

}
const a={
  color:"black",
  fontFamily:"cooperBlack"
}
const main={
  fontFamily:"broadway",
  fontSize:"50px"
  
}
  




export default function Mainhome() {
  return (
    <>
    <div style={myStyle}>
      <div >
        <h1 style={backg}>Home &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;               <a href="Import" style={a}>import</a>&nbsp;&nbsp;<a href="Props" style={a}>props</a>&nbsp;&nbsp;<a href='Export' style={a}>export</a></h1>
        

      </div>
      <h1 style={main}><center>Main Home</center></h1>
      <table border={6} cellSpacing={4} cellPadding={7} style={table} >
        <tr>
          <td>Click here to know about the clases <Link to="Classstart"> classes</Link></td>
          <td>Click here to know about the destructuring <Link to="Destructuring">destructuring</Link></td>
          <td>Click here to know about the Spraed Operator <Link to="Spredoperator">spread operator</Link></td>
        </tr>
      </table>
      <h1 >
      <button><Link to="Hello">Hello</Link></button><br/>
      <Button variant="contained" color="secondary"><Link to="Usestate">Use state</Link></Button><br/>
      <Button variant="contained" color="secondary"><Link to="Useeffect">Use effect</Link></Button><br/>
      <Button variant="contained" color="secondary"><Link to="Propsdrill">Props Drill</Link></Button><br/>
      <Button variant="contained" color="secondary"><Link to="Usecontext">Use context</Link></Button><br/>
      <Button variant="contained" color="secondary"><Link to="Registration">Registration</Link></Button><br/>
      <Button variant="contained" color="secondary"><Link to="Card">Card</Link></Button><br/>
      <Button variant="contained" color="secondary"><Link to="Combobox">Autocomplete-combobox</Link></Button><br/>
      <Button  variant="contained" color="secondary"><Link to="Countryselect">Autocomplete-countryselect</Link></Button>&nbsp;&nbsp;
      <Button variant="contained" color="secondary"><Link to="Table">Table</Link></Button>&nbsp;&nbsp;
      <Button variant="contained" color="secondary"><Link to="Edit">Edit</Link></Button>&nbsp;&nbsp;
      <Button variant="contained" color="secondary"><Link to="Grouped">Grouped</Link></Button>&nbsp;&nbsp;
      <Button variant="contained" color="secondary"><Link to="LocalView">Local View</Link></Button>&nbsp;&nbsp;
      <Button variant="contained" color="secondary"><Link to="LocalInsert">Local Insert</Link></Button>&nbsp;&nbsp;
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <Link to="Autocomplete">Autocomplete</Link><br/> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Link to="Localedit">Local Edit</Link><br/>
      <Link to="BasicButton">Basic Button</Link><br/>
      <Link to="ButtonSize"> Button Sizes</Link><br/>
      <Link to="UploadButton"> Upload Button</Link><br/>
      <Link to="ComplexButton"> Complex Button</Link><br/>
      <Link to="BasicbuttonGroup"> Basic Group Button</Link><br/>
      <Link to="VerticalGroup"> Vertical Group Button</Link><br/>
      <Link to="BasicCheckBox"> Check Box</Link><br/>
      <Link to="ControlledCheck">Controlled Check Box</Link><br/>
      <Link to="IntermediateCheck">Intermediate Check Box</Link><br/>
      <Link to="LocView">Loc View</Link><br/>
        
      
    
    
    
    

    
  
      
   
   
   
    
    <Link to="classes">classes</Link><br/>
    <Link to="Arrowfunction">Arrowfunction</Link><br/>
    <Link to="Text">Text</Link><br/>
    <Link to="Array">Array</Link><br/>
    <Link to="Destructuring">Destructuring</Link><br/>
    <Link to="Spreadoperator">Spreadoperator</Link><br/>
    <Link to="Ternaryoperator">Ternaryoperator</Link><br/>
    <Link to="Import">Import</Link><br/>
    <Link to="Rfc">Rfc</Link><br/>
    <Link to="Rcc">Rcc</Link><br/>
    <Link to="Props">Props</Link><br/>
    <Link to="Event">Event</Link><br/>
    <Link to="Conditional">Conditional</Link><br/>
    <Link to="List">List</Link><br/>
    <Link to="Form">Form</Link><br/>
    <Link to="Classstart">Classstart</Link><br/>
    <Link to="Pracapp">Pracapp</Link><br/>
    
    </h1>
    
    











    </div>
    </>
  )
}
