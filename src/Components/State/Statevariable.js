import React from "react"

export default class Statevariable extends React.Component{
constructor(){
  super()
  this.state={
    name:"suprava",
    email:"suprava@gmail.com"
  }

}


  render(){
    return(
      <div>
        <h1>State varibale Component</h1>
        <h1>my name is {this.state.name} and my email id is {this.state.email}</h1>
      </div>
    )
  }
}