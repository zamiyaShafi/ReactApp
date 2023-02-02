import React from 'react'

export default function Sparrayobj() {
    // array destructuring and combining using spread operator
    const numbers=[1,2,3,4,5,6]
    const [a,b,c,...rest]=numbers
  return (
    <div>Sparrayobj
         <h1>{a}</h1>
    <h1>{b}</h1>
    <h1>{c}</h1>
    <h1>{rest}</h1>
    </div>
  )
}
