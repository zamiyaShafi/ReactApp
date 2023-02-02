import React from 'react'

export default function Props(props) {

    // 1.simple function that takes props as an arguments
    function Name(props){
        return <h2>hello {props.title}</h2>
    }
    //2. function that takes props
    function Car(props){
        return <h3>{props.name}</h3>
    }
    // passing props value by creating variable and passing those value to the function and then assigning it to the variable
    const value="BMW"
    const myelement=<Car name={value}/>
    //3. simple function which takes props as an argument..meanwhile the props value is assigned in another function which is defined below
    function Hero(props){
        return <h3>I am a {props.brand}!</h3>
    }
    // this function assigns a value to the brand by creating props again
    function Demo(props){
        return(
            <>
            <h1>Who is in my team?</h1>
            {/* here we calling the above function */}
            <Hero brand={props.id}/>
            </>
        )
    }
    // 4.create a function which takes props as an argument
    function Vehicle(props){
        return <h2>{props.brand}!</h2>
    }
    // assigning value to the variable then,it is passed as props values inside the function.
    // note:Vehicle function is called inside the showroom function
    function Showroom(){
        const carName="BMW"
        return(
            <>
            <h1>Who lives in my garage?</h1>
            <Vehicle brand={carName}/>
            </>
        )
    }
    // 5.simple function that takes props object as an argument 
    function College(props){
        return (
        <>
        <h3>I am a { props.brand.name}</h3>
        <h3>I study in {props.brand.school}</h3>
        </>
        )
    }
    // function in which object is defined and passed as value for props
    function Student(){
        const Detail={
            name:"jack",
            school:"Alloy"
        }
        return (
        <>
        <h3>Who is admitted?</h3>
        <College brand={Detail}/>
        </>
        )
    }
  return (
    <>
    <h1>---------------props start-------------</h1>
    <h3>{props.title}</h3>
    <div>Props</div>
    <Name title="world"/>
    {myelement}
    <Demo id="Rahul"/>
    <Showroom/>
    <Student/>
    <h1>---------------props end-------------</h1>
    </>
  )
}
