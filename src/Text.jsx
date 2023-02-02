
import React,{useState} from 'react'
import { useEffect } from 'react'


export default function Text() {
    const Alert=(val)=>{
        alert("you clicked the button "+val)
    }
    class Myself{
        constructor(name){
            this.mname=name
           
        }
        display(){
            return "My Name is " +this.mname
        }

    }
    class React extends Myself{
        constructor(name,div){
            super(name)
            this.mdev=div
        }
        print(){
            return this.display() + ",and I am a "+this.mdev
        }

    }
    const R=new React("Zamiya","React Developer")
    class student{
        constructor(name,age){
            this.sname=name
            this.sage=age
        }
        display(){
            return "student name : " + this.sname + " student age : " + this.sage
        }
    }
    const std=new student("sham","24")
    let s=["sugar","salt","pepper"]
    const Printarray=(val)=>{
        return <h4>{val}</h4>
    }
    function Hero(props){
return <h3>Hey whats up {props.name}</h3>
    }
    function Demo(props){
        return(
            <>
            <h1>Hey hello morning {props.demo}</h1>
            <h3>hey {props.na}</h3>
            <Hero name={props.demo}/>
            </>
        )

    }
    function Array(props){
        
        return (
        <>
        <h2>{props.array}</h2>
        </>
        )
    }
    function Map(){
       const a=["zam","rasee","ish"]
       const c=a.length
       const b=a.map((val)=>{return <h1>{val}</h1>})
       return (
        <>
        <h2>the number of element in the array are:{c}</h2>
        <Array array={b}/>
        </>
       )
    
    }
    function Abc(props){
        return <h1>Name={props.name}</h1>
    }
    function Week(props){
        const day=props.day
        if(day==1){
            return <h3>Its Monday</h3>
        }else
        if(day==2){
            return <h3>Its tuesday</h3>
        }else
        if(day==3){
            return <h3>Its Wednesday</h3>
        }else
        if(day==4){
            return <h3>Its Thursday</h3>
        }else
        return <h3>Value does not match</h3>
    }
    // if else statement that calls function when its true or false
    function Six(){
        return <h1>six</h1> 
    }
    function Wide(){
        return <h1>wide</h1>
    }
    function Status(props){
        const score=props.score
        if(score){
            return <Six/>
        }else
        return <Wide/>
    }
    const [name,setName]=useState("zamiya")
    
    const [color,setColor]=useState("red")



    const [count,setCount]=useState(0)
    const [sqr,setSqr]=useState(0)

    useEffect(()=>{
        setSqr(()=>count*count)

    },[count])

    
    

  return (
    <>
    <h1>---------------Class test start-------------</h1>
    <h1>{s.map((val)=><h2>{val}</h2>)}</h1>
    <h2>{s.map((item)=>{return Printarray(item)})}</h2>
    
<h2>{std.display()}</h2>
<h1>{R.print()}</h1>
<button onClick={()=>Alert("once")}> Alert</button>
    <h1>----------------Class test end--------------</h1>
    <h1>----------------props test start----------</h1>
    <Demo demo="zamiya" na="Raseena"/>
    <h1>-------------------</h1>
    <Map/>
    <Abc name="Mariyam"/>

    <h1>----------------props test end----------</h1>
    <h1>-----------conditional rendring test start--------------</h1>
    <Week day="2" />
    <Status score={0}/>
    <h1>-----------conditional rendring test end--------------</h1>
    <h1>-----------use state----------</h1>
    {name}
    <button onClick={()=>setName("maryam")}>Click to change name</button><br/>
    {color}
    <br/>
    <button onClick={()=>setColor("yellow")}>yellow</button><br/>
    <button onClick={()=>setColor("blue")}>blue</button><br/>
    <button onClick={()=>setColor("black")}>black</button><br/>
    <button onClick={()=>setColor("brown")}>brown</button><br/>
    <h1>--------------use effect test start---------------</h1>
    sqr={sqr}<br/>
    <button onClick={()=>setCount(()=>count+1)}>count={count}</button>

    <h1>--------------use effect test end---------------</h1>
    </>
  )
}
