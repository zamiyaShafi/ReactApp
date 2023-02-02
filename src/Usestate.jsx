import React,{useState,useEffect} from 'react'

export default function Usestate() {
    // using string
    const [value,setValue]=useState("zamiya")
    const Change=()=>{
        setValue("Raseena")
    }
   
    const [color,setColor]=useState("white")
     // using array
    const [fruits,setFruits]=useState(["apple","banana","mango"])
    // using object
    const [car,setCar]=useState({
        brand:"Mercedece benze",
        model:"GLC",
        year:"2000",
        color:"white"
    })
    const Changecolor=()=>{
      // here c can be any variable used along with spraed operator to print rest of the value
      setCar((c)=>{
        return {...c,color:"green"}
      })
    }
    const ob={
      name:"shaam",
      age:"29",
      address:"bombay"
    }
    // spread operator are used to copy the elements from an object or arrray
    const ob1={
      ...ob,address:"Delhi"
    }
    // this is an ex from youtube
    const [counter,setCounter]=useState(0)
    useEffect(()=>{
      setCounter(100)
    },[])
    // hw 
    const [count,setCount]=useState(0)

    


  return (
    
    <div>
      {/* string */}
        {value}
        
        <button onClick={Change}>Change</button><br/>
        {color}<br/>
        <button onClick={()=>setColor("Green")}>Green</button>
        <button onClick={()=>{setColor("yellow")}}>Yellow</button>
        <button onClick={()=>{setColor("White")}}>white</button>
        <br/>
        {/* array */}
        {fruits.map((value)=>{return <h1>{value}</h1>})}<br/>
        
        <button onClick={()=>{setFruits(["grapes","banana","mango"])}}>Change fruit</button><br/>
        {/* object */}
        {car.brand}<br/>
        {console.log(car)}
        <h3 >{car.color}</h3>
        {/* <button onClick={()=>{setCar({color:"black"})}}>change car</button> */}
        <button onClick={Changecolor} >Change color</button>
        {console.log(car)}<br/>
        {ob.address}<br/>
        {ob1.address}<br/>
        {console.log(ob1)}
        {console.log(ob)}
        {/* creating two button  */}
        {/* here when you click plus button it will increase the counter and viseversa */}
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(counter-1)}>-</button><br/>
        {/* hw */}
        <h1>{count}</h1>
        <button onClick={()=>setCount(()=>count+1)}>click here</button>

        

    </div>
    
  )
}
