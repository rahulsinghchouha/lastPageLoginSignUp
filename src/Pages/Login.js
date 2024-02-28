import React from 'react'
import Template from '../Component/Template'
import loginImg from '../assets/login.png'
const Login = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
      title='Welcome Back'
      desc1="Build Skill for today,tomorrow and beyond."
      desc2="Education to future-proof your carreer."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login
