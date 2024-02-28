import React from 'react'
import signUpImg from '../assets/signup.png'
import Template from '../Component/Template'

const SignUp = ({setIsLoggedIn}) => {
  return (
    <div>
       <Template
      title='join the millions learning to code with studyNotion for free'
      desc1="Build Skill for today,tomorrow and beyond."
      desc2="Education to future-proof your carreer."
      image={signUpImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
       />
    </div>
  )
}

export default SignUp
