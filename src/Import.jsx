import React from 'react'

import Ccc,{name,age,Xyz,address,phone} from './Export'


export default function Import() {
  return (
    <>
    <h1>--------------module start-------------</h1>
    <div>Import</div>
    {name},{age}
    <br/>
    <Xyz/>
    <br></br>
    {address}<br/>
    {phone}
    <br/>
    <Ccc/>
    <h1>--------------module end-------------</h1>
    </>
  )
}
