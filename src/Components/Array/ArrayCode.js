import React from "react"

export default class ArrayCode extends React.Component{
  constructor(){
    super()
    this.state={
      data:["Riya","laxman","Gita"]
    }
  }
  render(){
    return(
      <div>
        <h1>Array list</h1>
        {this.state.data.map((item,i)=>{
          return(
            <div>
              <h1>name:{item}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}