import React from "react"

export default function DataPassing(props){
  return(
    <div>
      <h1>Passing props in functional Component</h1>
      <h1>Email:{props.email}</h1>
    </div>
  )
}