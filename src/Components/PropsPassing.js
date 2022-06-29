import React from "react"
import ComponentA from "./ComponentA"
export default class PropsPassing extends React.Component{
  render(){
    // console.log(this)
    const{name,email,age}=this.props
    return(
      <div>
        <h1>Passing Props Component</h1>
        {/* <h1>name:{this.props.name}</h1>
        <h1>Email:{this.props.email}</h1>
        <h1>Age:{this.props.age}</h1> */}

        {/* After destructuring */}
        <h1>name:{name}</h1>
        <h1>Email:{email}</h1>
        <h1>Age:{age}</h1>
        {/* <ComponentA username={name} useremail={email} age={age}/> */}

        <ComponentA {...this.props}/>
      </div>
    )
  }

}