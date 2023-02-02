import React from 'react'

export default function Pracapp() {
    
    function Add(){
        var a=10
        var b=20
        return <h1>{a + b}</h1>
    }
    
    class Abc{
        constructor(n){
            this.name="zamiya"
            this.age=n
        }
        display(){
            return <h1>my name is {this.name} and i am {this.age}</h1>
        }
    }
    const A=new Abc(21)
    let v={
        name:"zam",
        age:20,
        place:"bajal"
    }
    var n
    var c
   const arrow=({name,place})=>{
    n=name
    c=place
    return <h1>{n}{c}</h1>
   }
   arrow(v)
   let  z=[1,2,3,4,5]
   const [f,g,h]=z
   let m
   const zee=(v)=>{
    m=v.name+v.place+v.age
    return {m}
   }
   zee(v)
   let u={
    name:"zam",
    age:20,
    place:{
        city:"mangalore",
        area:"bajal"
    }

   }
   let r
   function ou({name,age,place:{city,area}}){
    r=name+age+city+area
    return r
   }
   ou(u)

  return (
    <div>
        <Add/>
        <h1>{A.display()}</h1>
        {console.log(v)}
        
        {n}
        {c}<br/>
        {f}<br/>{g}<br/>{h}<br/>
        {m}
        {r}
     

    </div>
  )
}
