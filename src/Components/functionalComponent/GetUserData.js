import React, { useState } from "react"

export default function GetUserData() {
  const [user, setUser] = useState({ name: "", email: "" })

  const handleChange = (event) => {
    setUser({
       ...user,
      name: event.target.value
    })
  } //name="suprava",email=""
  const handleEmail = (event) => {
    setUser({
      ...user,
      email: event.target.value
    })
  }//name="suprava",email="suprava@gmail.com"
  return (
    <div>
      <input type="text" placeholder="enter name" onChange={handleChange} />
      <input type="email" placeholder="enter email" onChange={handleEmail} />

      <h1>Name:{user.name}</h1>
      <h1>Email:{user.email}</h1>


    </div>
  )
}