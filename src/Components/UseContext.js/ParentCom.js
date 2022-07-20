import React from 'react'
import ComA from './ComA'
// create context
// provide value
// use your context

export const contextData = React.createContext() //create context variable
export const userContext = React.createContext()
function ParentCom() {
  const [user, setUser] = React.useState({ name: "suprava", email: "suprava@gmail.com" })
  return (
    <div>
      <contextData.Provider value="sony">
        <userContext.Provider value={user}>
          <ComA />
        </userContext.Provider>
      </contextData.Provider>

    </div>
  )
}

export default ParentCom