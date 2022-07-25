import React from 'react'
import {useParams} from "react-router-dom"
function Contact() {
  var data=useParams();
  console.log(data)
  return (
    <div>Contact
    
    </div>
  )
}

export default Contact