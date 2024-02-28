import React from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from'react-icons/ai';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const SignUpForm = ({setIsLoggedIn}) => {

    const navigate=useNavigate();

    const[formData,setFormData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''

    });

    const[showPassword,setShowPassword]=useState(false);
    const[showConfirmPassword,setShowConfirmPassword]=useState(false);
    const[accountType,setAccountType]=useState("student");

    function changeHandler(event)
    {
        setFormData( (prevData) => (
          { 
            ...prevData,
            [event.target.name] : event.target.value
          }
        )
        )
        
    }

    function submitHandler(event)
    {
        event.preventDefault();
        if(formData.password !== formData.confirmPassword)
        {
            toast.error("Password not Match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created Succesful");
        const accountData={
            ...formData
        }
        const finalData={
            ...accountData,
            accountType
        }
        console.log("Account final Data are")
        console.log(finalData);
        navigate("/dashboard");
    }

  return (
    <div>
        {/* student Instructor tab */}
        <div
        className='flex bg-cyan-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button
            className={`${accountType==="student"
            ? "bg-cyan-900 text-cyan-50"
            :" bg-transparent text-richblack-200"

             } py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=>{setAccountType("student")}}>
                Student
            </button>
            <button
             className={`${accountType==="instructor"
             ? "bg-cyan-900 text-cyan-50"
             :" bg-transparent text-richblack-200"
 
              } py-2 px-5 rounded-full transition-all duration-200`}
             onClick={()=>{setAccountType("instructor")}}>
                Instructor
            </button>
        </div>

    <form onSubmit={submitHandler}>
        {/* first Name and Last Name */}
        <div className='flex justify-between '>
            <label>
                <p className="text-[0.875rem] text-cyan-50 mb-1 leading-[1.375rem] ">First Name<sup className="text-pink-200">*</sup></p>
                <input
                required
                type='text'
                name='firstName'
                onChange={changeHandler}
                placeholder='First Name'
                value={formData.firstName}
                className="bg-cyan-800 rounded-[0.5rem] text-cyan-50 w-full p-[12px] border-b-[1px] "
                
                />
            </label>

            <label>
                <p className="text-[0.875rem] text-cyan-50 mb-1 leading-[1.375rem] ">Last Name<sup className="text-pink-200">*</sup></p>
                <input
         
                type='text'
                name='lastName'
                onChange={changeHandler}
                placeholder='Last Name'
                value={formData.lastName}
                className="bg-cyan-800 rounded-[0.5rem] text-cyan-50 w-full p-[12px] border-b-[1px]"
                />
            </label>
         </div>

        {/* email address */}
         <label >
            <p className="text-[0.875rem] text-cyan-50 mb-1 leading-[1.375rem] ">
                Email Address <sup className="text-pink-200">*</sup>
            </p>
            <input
            // required means khali nhi chhod sakte hai
            required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Emain id"
            name="email"
            className="bg-cyan-800 rounded-[0.5rem] text-cyan-50 w-full p-[12px] border-b-[1px] "
            />
            </label>

            {/* createpassword and confirm password */}
            <div className='flex justify-between mt-4'>
            <label className='relative'>
                <p className="text-[0.875rem] text-cyan-50 mb-1 leading-[1.375rem] ">Create Password<sup className="text-pink-200">*</sup></p>
                <input
                required
                type={showPassword?("text"):("password")}
                name='password'
                onChange={changeHandler}
                placeholder='Password'
                value={formData.password}
                className="bg-cyan-800 rounded-[0.5rem] text-cyan-50 w-full p-[12px] border-b-[1px]"
                
                />

                 <span onClick={()=>setShowPassword((prev)=>!prev)}
                 className="absolute right-3 top-[38px] cursor-pointer">
                {
                    showPassword ? (<AiOutlineEyeInvisible   fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye   fontSize={24} fill="#AFB2BF"/>)
                }

            </span>
            </label>


            <label className='relative'>
                <p className="text-[0.875rem] text-cyan-50 mb-1 leading-[1.375rem] ">Confirm Password<sup className="text-pink-200">*</sup></p>
                <input
                required
                type={showConfirmPassword?("text"):("password")}
                name='confirmPassword'
                onChange={changeHandler}
                placeholder='Confirm Password'
                value={formData.confirmPassword}
                className="bg-cyan-800 rounded-[0.5rem] text-cyan-50 w-full p-[12px] border-b-[1px] "
                
                />

                 <span onClick={()=>setShowConfirmPassword((prev)=>!prev)}
                 className="absolute right-3 top-[38px] cursor-pointer">
                {
                    showConfirmPassword ? (<AiOutlineEyeInvisible   fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye   fontSize={24} fill="#AFB2BF"/>)
                }

            </span>
            </label>



            </div>

        <button className="bg-yellow-500 rounded-[8px] w-full font-medium text-cyan-900 py-[8px] px-[12px] mt-4"
 >
            Create Account
        </button>

    </form>

      
    </div>
  )
}

export default SignUpForm
