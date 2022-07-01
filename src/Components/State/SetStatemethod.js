import React from "react"

export default class SetStateMethod extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "suprava",
      email: "suprava@gmail.com",
      address: "",
      password: ""
    }

  }
  handleClick = () => {
    this.setState({
      name: "Rinky",
      email: "rinky@gmail.com"
    })
  }

  handleChange = (event) => {
    this.setState({
      address: event.target.value
    })
  }
  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  render() {
    const { name, email } = this.state
    return (
      <div>
        <h1>State varibale Component</h1>
        <h1>my name is {this.state.name} and my email id is {this.state.email}</h1>
        <button onClick={this.handleClick}>UPDATE</button><br/>

        <input type="text" placeholder="enter address" onChange={this.handleChange} />
        <input type="password" placeholder="enter password" onChange={this.handlePassword} />

        <h1>address: {this.state.address} and password: {this.state.password}</h1>
      </div>
    )
  }
}