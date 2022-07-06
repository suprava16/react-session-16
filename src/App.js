import React from "react"
//import Greet from "./Components/Greet"
import PropsPassing from "./Components/PropsPassing"
import Statevariable from "./Components/State/Statevariable"
import SetStateMethod from "./Components/State/SetStatemethod"
import Greet from "./Components/functionalComponent/Greet"
import Functionalstatevariable from "./Components/functionalComponent/Functionalstatevariable"
import DataPassing from "./Components/functionalComponent/DataPassing"
import GetUserData from "./Components/functionalComponent/GetUserData"
import ArrayCode from "./Components/Array/ArrayCode"
import ArrayOfObject from "./Components/Array/ArrayOfObject"
export class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Greet/> */}
        {/* <PropsPassing name="suprava" email="suprava@gmail.com" age={30} /> */}
        {/* <StateVariable/> */}
        {/* <SetStateMethod/> */}
        {/* <Greet/> */}
        {/* <Functionalstatevariable/> */}
        {/* <DataPassing email="suprava@gmail.com"/> */}
        {/* <GetUserData/> */}
        {/* <ArrayCode/> */}
        <ArrayOfObject/>
      </div>
    )
  }
} 