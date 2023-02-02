import React from 'react'

export default function Inheritence() {
    class College{
        constructor(name){
        this.brand=name
        }
        present(){
          return "I am studying in " + this.brand
        }
      }
      
      class Model extends College{
        constructor(name,mod){
          super(name)
          this.model=mod
        }
        show(){
          return this.present() + ', it is at ' + this.model
        }
      }
      const MyCollege=new Model("Aloy","light house hill")
  return (
    <>
    <div>Inheritence</div>
    <h4>{MyCollege.show()}</h4>
    </>
  )
}
