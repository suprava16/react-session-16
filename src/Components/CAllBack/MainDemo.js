import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'

function MainDemo() {
  const[age,setAge]=useState(10)
  const[salary,setSalary]=useState(50000)

  const incrementAge=useCallback(()=>{
    setAge(age+1)
  },[age])

  const incrementSalary=useCallback(()=>{
    setSalary(salary+1000)
  },[salary])
  return (
    <div>
      <Count text="age" count={age}></Count>
      <Button handleClick={incrementAge}>increment Age</Button>
      <Count text="salary" count={salary}/>
      <Button handleClick={incrementSalary}>increment Salary</Button>
    </div>
  )
}

export default MainDemo