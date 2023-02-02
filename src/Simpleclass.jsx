import React from 'react'

export default function Simpleclass() {
    class Bike{
        constructor(name){
          this.brand=name
        }
        new(){
          return "my bike : " +  this.brand
        }
      }
        class Car{
          constructor(name){
            this.brand=name;
          }
          display(){
            return "My car is :  "  +  this.brand
          }
        }
        const MyCar=new Car("Bmw")
        const MyBike=new Bike("r15")
    
  return (
    <>
    <div>Simplefunction</div>
    <h3>{MyCar.display()}</h3>
    <h4>{MyBike.new()}</h4>
    <h1>{ MyCar.brand}</h1>
    <h2>{MyBike.brand}</h2>

    </>
  )
}
