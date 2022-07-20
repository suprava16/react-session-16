import React from 'react'
import PropsPassing from '../PropsPassing'

function Button(props) {
  return (
    <div>
      <button onClick={props.handleClick}>{props.children}</button>
    </div>
  )
}

export default Button