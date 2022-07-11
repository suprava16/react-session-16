import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
  constructor(){
    super()
    this.state={
      data:false,
      num:""
    }
  }
  handleChange=(event)=>{
this.setState({
  num:event.target.value
})
  }
  render() {
    
    return (
      <div>
       {/* {this.state.data===true?<h1>Hello everyone..</h1>:<h1>Bye .....</h1>} */}

       {/* {this.state.data===false &&
       <h1>Alternative of simple if statement</h1>}  */}

       <input type="text" onChange={this.handleChange}/>
       <button disabled={this.state.num===""?true:false}>ADD</button>

      </div>
    )
  }
}
// a=10
// b="10"
// a===b//false
