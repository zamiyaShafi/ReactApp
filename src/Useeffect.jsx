import React,{useEffect,useState} from 'react'

export default function Useeffect() {
    function Timer(){
        const [count,setCount]=useState(0);
        useEffect(()=>{
            // settime out is js buildin function 
            setTimeout(()=>{
                setCount((count)=>count+1);
            },1000);
    });
    // if you use [] after the useeffect function closes...u will see o/p 0 and 2 ..its bcz it is a redendency
    return <h1>I have rendered {count} times!</h1>
}
const [num1,setNum1]=useState(0)

    useEffect(()=>{
        alert("zamiya")

    },[num1])

    

    const [time,setTime]=useState(0)
    setTimeout(()=>{
        setTime(time+1)
    },3000)
    // for every 3 second this set time will execute

    const [count,setCount]=useState(0)
    const [sum,setSum]=useState(0)

    useEffect(()=>{
        setSum(count*10)
    },[count])
    // in dependency you can pass many state by using coma 




    setTimeout(()=>{
        setTime(time+1)

    },5000)


    useEffect(()=>{
        alert("hello")
    },[])
    // if you dont write any dependency ....then if you change anything on the document....you will get alert msg....in order to stop that use []
    
  return (
    <div>
        <Timer/>
        <button onClick={(()=>{setNum1(num1+1)})}>{num1}</button><br/>
        {time}
        <br/><br/>
        Sum={sum}<br/>
        <button onClick={(()=>setCount(()=>count+1))}>count -{count}</button>
    </div>
  )
  }
