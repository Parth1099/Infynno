import React, { useState } from 'react'

export default function Practice() {
 const [data,setData] = useState("Parth");
    function apple() 
    {
        setData("Parth Patel");
      
    }
    console.warn()
  return (
    <>
        <h1>{data}</h1>
        <button onClick={apple}>Click me</button>
    </>

  )
}
