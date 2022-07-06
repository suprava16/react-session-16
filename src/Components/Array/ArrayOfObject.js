import React from "react"

export default class ArrayOfObject extends React.Component{
  constructor(){
    super()
    this.state={
      user:[
        {
          name:"Rinky",
          email:"rinky@gmail.com"
        },
        {
          name:"Rahul",
          email:"rahul@gmail.com"
        },
        {
          name:"lSita",
          email:"ishita@gmail.com"
        },
        {
          name:"Gita",
          email:"gita@gmail.com"
        },
        {
          name:"Tony",
          email:"tony@gmail.com"
        }
      ]
    }
  }

  handleClick=()=>{
    var temp=this.state.user
    temp.push({
      name:"Sony",
      email:"sony@gmail.com"
    })
    this.setState({
      user:temp
    })
  }

  handlePop=()=>{
    var temp=this.state.user
    temp.pop()
    this.setState({
      user:temp
    })
  }
render(){
  return(
    <div>
      <h1>Array Of objects</h1>
      {this.state.user.map((item,i)=>{
        return(
          <div key={i}>
            <h1>my name is {item.name} and email id is {item.email}</h1>
          </div>
        )
      })}
      <button onClick={this.handleClick}>PUSH</button>
      <button onClick={this.handlePop}>POP</button>
    </div>
  )
}
}