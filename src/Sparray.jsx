import React from 'react'

export default function Sparray() {
    // spread operartor for array
    const numberone=[1,2,3,,4,5,6]
    const numbertwo=[7,8,9]
    const numberscombined=[...numberone, ...numbertwo]
  return (
    <div>Sparray
        <h1>{numberone}</h1>
    <h1>{numbertwo}</h1>
    <h1>{numberscombined}</h1>
    </div>
  )
}
