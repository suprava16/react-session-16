import React from "react"

export default class Greet extends React.Component {
  render() {
    return (
      // <div>
      //   <h1>Hello...Good evening!!!!!!!</h1>
      //   <p>Nextstack</p>
      // </div>
      // <>
      //   <h1>Hello...Good evening!!!!!!!</h1>
      //   <p>Nextstack</p>
      // </>

      <React.Fragment>
      <h1>Hello...Good evening!!!!!!!</h1>
        <p>Nextstack</p>
      </React.Fragment>
    )
  }
}