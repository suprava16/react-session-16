import React from 'react'
import Button from "@mui/material/Button"
import SendIcon from '@mui/icons-material/Send';
function Design() {
  return (
    <div>
      <Button variant='contained' color='secondary' endIcon={<SendIcon/>}>Register</Button>
    </div>
  )
}

export default Design