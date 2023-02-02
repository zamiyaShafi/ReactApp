import React from 'react'
import Arrowfunction from './Arrowfunction';
import {Link} from 'react-router-dom'

export default function classes() {
  // class Bike{
  //   constructor(name){
  //     this.brand=name
  //   }
  //   new(){
  //     return "my bike : " +  this.brand
  //   }
  // }
  
  // class Car{
  //   constructor(name){
  //     this.brand=name;
  //   }
  //   display(){
  //     return "My car is :  "  +  this.brand
  //   }
  // }
  // const MyCar=new Car("Bmw")
  // const MyBike=new Bike("r15")
// parent class
    class College{
      constructor(name){
        this.brand=name
      }
      present(){
        return "I am studying in " + this.brand
      }
    }
    
    class Model extends College{
      constructor(name,mod){
        super(name)
        this.model=mod
      }
      show(){
        return this.present() + ', it is at ' + this.model
      }
    }
    const MyCollege=new Model("Aloy","light house hill")
  return (
    <>
    <div>classes hello</div>
    <h1>-----------------------Classes Start-------------------- </h1>
    {/* <h1>{ MyCar.brand}</h1>
    <h2>{MyBike.brand}</h2> */}
    {/* <h3>{MyCar.display()}</h3>
    <h4>{MyBike.new()}</h4> */}
    <h4>{MyCollege.show()}</h4>
    <Link to="/Destructuring">Destructuring</Link>
    {/* calling another component inside one component */}
    <Arrowfunction/>
    <h1>-----------------------Classes End-------------------- </h1>
    </>
  )
}


