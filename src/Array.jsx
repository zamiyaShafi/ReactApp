import React from 'react'

export default function Array() {
    let a=[1,2,3,4,5]
    let b=["apple","banana","mango"]
    const Function=(val)=>{
        return <h1>{val}</h1>
    }

  return (
    <>
    <h1>----------------Array start----------------------</h1>

    <div>{b.map((val)=> <h3>{val}</h3>)}</div>
    <h1>{a}</h1>
    <h1>{b}</h1>
    <h3>{b.map((val)=>{return Function(val)})}</h3>
    <h1>----------------Array end------------------------</h1>
    </>
  )
}
