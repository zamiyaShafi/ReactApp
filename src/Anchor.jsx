import React from 'react'
import {Link} from 'react-router-dom'

export default function Anchor() {
  return (
    <>
    <div>Anchor</div>
    <a href='classes.jsx'>click here</a>
    <Link to="classes">classes</Link>
    </>
  )
}
