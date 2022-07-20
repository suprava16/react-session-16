import React from 'react'
import ComC from './ComC'
import { contextData } from './ParentCom'
function ComB() {
  const item=React.useContext(contextData)
  return (
    <div>
      <ComC/>
      <h1>name={item}</h1>
    </div>
  )
}

export default ComB