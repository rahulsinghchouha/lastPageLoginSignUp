import React, { useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm=({setIsLoggedIn})=>{

    const navigate=useNavigate();

    const[formData,setFormData]=useState({email:"",password:''})
    const[showPassword,setShowPassword]=useState(false);

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
        //jb sign in ho jayega to hm ise true r denge
        setIsLoggedIn(true);
        toast.success("Logged In Succesfully");
        //hm ise dashboard pr bhej denge
        navigate("/dashboard");

        const signupdata={
            ...formData
           
        }
        console.log(signupdata);
    }
   return(
     <form onSubmit={submitHandler}
     className="flex flex-col w-full gap-y-4 mt-6">
        <label className="w-full ">
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


        <label className="w-full relative">
            <p className="text-[0.875rem] text-cyan-50 mb-1 leading-[1.375rem] ">
                Password <sup className="text-pink-200">*</sup>
            </p>
            <input
            // required means khali nhi chhod sakte hai
            required
            // password ka type hmara depend krega showPassword pr
            type={showPassword ? ("text"):("password")}
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"
            name="password"
            className="bg-cyan-800 rounded-[0.5rem] text-cyan-50 w-full p-[12px] border-b-[1px] " />
            {/* for eye image */}
            {/* show password ki value ko hm change kr rahen hai jb bhi hmare us eye vale button pr click hoga */}
            <span onClick={()=>setShowPassword((prev)=>!prev)}
            className="absolute right-3 top-[38px] cursor-pointer">
                {
                    showPassword ? (<AiOutlineEyeInvisible 
                    fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
                }

            </span>

                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto"> Forgot Password</p>
                   
                </Link>
        </label>

        <button className="bg-yellow-500 rounded-[8px] font-medium text-cyan-900 py-[8px] px-[12px] mt-4"
        >Sign in</button>
    </form>
   )
}
export default LoginForm