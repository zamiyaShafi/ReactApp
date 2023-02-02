import React,{useState} from 'react'

export default function Propsdrill() {
    function Function1(){
        const [user,setUser]=useState("Hina")
        return(
            <>
            <h1>Function1</h1>
            <Function2 user={user}/>
            </>
        )
    }
    // here instead of props we are directly sending the value by using {}
    function Function2({user}){
        return(
            <>
            <h1>function2</h1>
            <Function3 user={user}/>
            </>
        )

    }
    function Function3({user}){
        return(
            <>
            <h1>function3</h1>
            <Function4 user={user}/>
            </>
        )

    }
    function Function4({user}){
        return(
            <>
            <h1>function4</h1>
            <Function5 user={user}/>
            </>
        )

    }
    function Function5({user}){
        return(
            <>
            <h1>function5</h1>
            <h1>{'Hello this is ' + user}</h1>
            </>
        )

    }
  return (
    <div>
       <Function1/> 
    </div>
  )
}
