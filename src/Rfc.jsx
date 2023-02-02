import React from 'react'

export default function Rfc() {
  let fname="zam",lname="iya",age=21
  var x = 10;

var y = 5;
let n=5
let fact=1
while(n>=1){
fact=fact*n
n--

}
console.log(fact)
const pi=3.14
let r=5
let area=2*pi*r
let perimeter=pi*r*r
console.log(area)
console.log(perimeter)
const ob={
  name:"john",
  age:50
  }
  alert(ob.name+" is "+ob.age)
  
let b=5,h=2;
console.log(0.5*b*h);
  return (
    <>
    <h1 style={{color:"brown"}}>------------------Rfc start----------------</h1>
    <div>Rfc</div>
    {fname}
    {lname}
    {age}
    {x+=y}
    <h1 style={{color:"brown"}}>------------------Rfc end----------------</h1>
    </>
  )
}
