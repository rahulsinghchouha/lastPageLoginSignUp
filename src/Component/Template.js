import React from 'react'
import SignUpForm from './SignUpForm'
import frameImage from'../assets/frame.png'
import LoginForm from './LoginForm'
import {FcGoogle} from'react-icons/fc'

const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] mx-auto py-12 gap-x-12 gap-y-0'>
        <div className='w-11/12 max-w-[450px]'>
            <h1 className=' text-cyan-50
            font-semibold text-[1.875rem] leading-[2.375rem]' >
                {title}
            </h1>

            <p className='text-[1.12rem] leading[1.625rem] mt-4 '>
                <span className='text-cyan-100'>{desc1}
                </span>
                <br/>
                <span className=' text-blue-100 italic'>{desc2}</span>

            </p>
            {
                formtype==="signup"?(<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):
                (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            }
            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-white'></div>
                <div className='text-cyan-700 leading-[1.375rem]'
                >
                    OR
                </div>
                <div className=' w-full h-[1px] bg-white'></div>

            </div>
            
            <button className='w-full flex justify-center items-center 
            rounded-[8px] font-medium text-cyan-100 border border-cyan-700 px-[12px]
             py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                <p>Sign in with Google</p>
            </button>

        </div>

        {/* second div for image */}

        <div className='relative w-11/12 max-w-[450px] '>
            <img src={frameImage}
            alt='pattern'
            width={558}
            height={504}
            loading='lazy'/>


          <img src={image}
            alt='students'
            width={558}
            height={490}
            loading='lazy'
            className='absolute -top-4 right-4 rounded-sm'/>
        </div>
      
    </div>
  )
}

export default Template
