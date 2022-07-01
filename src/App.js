import React from "react"
//import Greet from "./Components/Greet"
import PropsPassing from "./Components/PropsPassing"
import Statevariable from "./Components/State/Statevariable"
import SetStateMethod from "./Components/State/SetStatemethod"
import Greet from "./Components/functionalComponent/Greet"
import Functionalstatevariable from "./Components/functionalComponent/Functionalstatevariable"
export class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Greet/> */}
        {/* <PropsPassing name="suprava" email="suprava@gmail.com" age={30} /> */}
        {/* <StateVariable/> */}
        {/* <SetStateMethod/> */}
        {/* <Greet/> */}
        <Functionalstatevariable/>
      </div>
    )
  }
} 