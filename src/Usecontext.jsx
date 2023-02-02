import React from 'react'
// 1 step: import use_context and create_context
import { useContext,createContext } from 'react';


export default function Usecontext() {

// 2 step: using create_context create one variable
    const UserContext=createContext();
    // creating context variable
    // const abc=createContext()


    function Component1(){
        // 3 step: create 2 variable inside a function
        let name="john"
        let age=30
        function Add(a,b){
            console.log(a+b)
            return(a + b)
            
        }
        return(
            // provider is  a function,usercontext is  avariable
            // 4 step:using context variable ie., usercontext and call the function ie., provider and send the value. inside that call the function to which you want to send the data ie., <component/>
            <UserContext.Provider value={{name,age,Add}}>
                <h1>Hello {name} I am {age}</h1>
                <Component2/>
            </UserContext.Provider>

        )

    }
    function Component2(){
        return(
            <>
            <h1>Component2</h1>
            {/* here you can eithr use the context variable.note: if you want to send the context variable to other function then call that function here ex: <component3/> */}
            <Component3/>
            </>
        )
    }
    function Component3(){
        return(
            <>
            <h1>Component2</h1>
            <Component4/>
            </>
        )
    }
    function Component4(){
        return(
            <>
            <h1>Component2</h1>
            <Component5/>
            </>
        )
    }
    function Component5(){
        // 5 step: in order to use the context variable, first you have to create variable using usecontext.here UserContext is the context variable
        const user=useContext(UserContext);
        // you can also write in this form directly this is called a sdestructuring
        // const {name,Add}=useContext(UserContext);
        return(
            <>
            <h1>Component5</h1>
            <h2>Hello {user.name}  again! great you are {user.age}<br/>{user.Add(70,80)}</h2>
            {/* then you have to use like this
            <h2>Hello {name}  again! <br/>{Add(70,80)}</h2> */}
            </>
        )
    }
  return (
    <div>
        usecontext<Component1/>

    </div>
  )
}
