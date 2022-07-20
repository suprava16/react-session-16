import React from 'react'
import {contextData,userContext} from "./ParentCom"
function ComC() {
  const data=React.useContext(contextData)
  const userData=React.useContext(userContext)
  return (
    <div>name={data}
    <h2>my name is {userData.name} and email id is {userData.email}</h2>
    </div>
  )
}

export default ComC