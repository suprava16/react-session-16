import React from 'react'
import { useLocation } from 'react-router-dom'
function About() {
  var parameter=useLocation();
  console.log(parameter)
  return (
    <div>About Component {parameter.state.name}</div>
  )
}

export default About