import React,{useEffect} from 'react'
import axios from "axios"
function UseEffectMethod() {

  useEffect(()=>{
    axios.get("https://reqres.in/api/users?page=2")
    .then((result)=>{
      console.log(result)
    })
  },[])
  return (
    <div>
<h1>fetching data in functional Component</h1>
    </div>
  )
}

export default UseEffectMethod