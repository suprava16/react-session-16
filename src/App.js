import React from "react"
import Greet from "./Components/Greet"
import PropsPassing from "./Components/PropsPassing"
export class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Greet/> */}
        <PropsPassing name="suprava" email="suprava@gmail.com" age={30} />
      </div>
    )
  }
} 