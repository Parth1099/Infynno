import React from 'react'
import Login from './LoginPage/Login'
import Signup from './LoginPage/Signup'
// import Practice from "./practice"
import './LoginPage/style.css'
// import Moa

export default function App() {
  const [status , setStatus] = React.useState(false);
  return (
    <>
    {
      status?<Signup setval = {setStatus}/>:<Login setData = {setStatus}/>
    }
      {/* <Modal /> */}
       {/* <Practice/> */}
       
    </>
    )
}
