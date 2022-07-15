import React, { Component } from 'react'

export default class PostMethod extends Component {
  constructor(){
    super();
    this.state={
      email:"",
      password:""
    }
  }
  handleEmail=(event)=>{
    this.setState({
      email:event.target.value
    })
  }
  handlePassword=(event)=>{
    this.setState({
      password:event.target.value
    })
  }

  handleRegister=()=>{
    fetch("https://reqres.in/api/register",{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        email:this.state.email,
        password:this.state.password
      })
    })
    .then((response)=>(response.json()))
    .then((result)=>{
      console.log(result)
    })
    .catch((error)=>{console.log(error)})
  }
  render() {
    return (
      <div>
        <input type="text" placeholder='enter email' onChange={this.handleEmail}/>
        <input type="password" placeholder='enter password' onChange={this.handlePassword}/>
        <button onClick={this.handleRegister}>Register</button>
      </div>
    )
  }
}
