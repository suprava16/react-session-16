import React, { Component } from 'react'

export default class ComponentA extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Username:{this.props.name}</h1>
        <h1>Email:{this.props.email}</h1>
        <h1>Age:{this.props.age}</h1>
      </div>
    )
  }
}
