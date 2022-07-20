import React from 'react'

function Count(props) {
  return (
    <div>
      {props.text}={props.count}
    </div>
  )
}

export default Count