import React from 'react'

export default function Conditional() {
  function Missedgoal(){
    return <h1>Missed!</h1>
  }
  function Madegoal(){
    return <h1>Goal</h1>
  }
  function Goal(props){
    const isGoal=props.isGoal;
    if(isGoal){
      return <Madegoal/>
    }
    return <Missedgoal/>
  }
  return (
    <>
    <h1>------------------Conditional rendering start----------------</h1>
    <Goal isGoal={false}/>
    
    <h1>------------------Conditional rendering end----------------</h1>
    </>
  )
}
