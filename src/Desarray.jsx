import React from 'react'

export default function Desarray() {
    // using array
    let vehicles=["car","bike","bus"]
    // old method
    const car=vehicles[0]
    const truck=vehicles[1]          
    const suv=vehicles[2]
    // new method
    const [c1,c2,c3,c4]=vehicles
    
    const k=[12+2,14+3]
    const p=["12"+"2","14"+"3"]
    const [m,n]=p
    const [c,d]=k
  return (
    <div>Desarray
        <h1>{car}</h1>
       {/* <Link to="/Arrowfunction">Arrowfunction</Link> */}
       <h1>{truck}</h1>
       <h1>{suv}</h1>
       <h1>{c1}</h1>
       <h1>{c2}</h1>
       <h1>{c3}</h1>
       <h1>{c4}</h1>
       <h1>{c}</h1>
       <h1>{d}</h1>
       <h1>{m}</h1>
       <h1>{n}</h1>
    </div>
  )
}
