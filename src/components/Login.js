import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidation } from '../utils/validation'

const Login = () => {

    const [isSignIn,setSignIn]=useState(true)
    const [errorMessage,setErrorMessage]=useState(null)
    
    const name=useRef("")
    const email=useRef("")
    const password=useRef("")

    const toggleSignIn=()=>{
        setSignIn(!isSignIn)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const message=checkValidation(name.current?.value,email.current.value,password.current.value,isSignIn)
       setErrorMessage(message)
    }

  return (
    <div>
        <Header/>
        <div className='absolute h-full w-full'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt="background"
                className=' h-full w-full'
            />    
        </div>
        <form className='w-3/12  bg-black absolute text-white rounded-lg p-12 my-36 mx-auto right-0 left-0'>
            <h1 className='font-bold text-3xl py-4'>
                {isSignIn? "Sign In" : "Sign Up"}
            </h1>
            { !isSignIn && <input ref={name} type="text" placeholder='Enter Name' className='p-4 my-4 w-full bg-gray-700' 
            />}
            <input ref={email} type="text" placeholder='Enter Email Id' className='p-4 my-4 w-full bg-gray-700' 
            />
            <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700' 
            />
            <p className='text-red-700'>{errorMessage}</p>
            <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleSubmit}>
                {isSignIn? "Sign In" : "Sign Up"}
            </button>
            <p className='cursor-pointer' onClick={toggleSignIn}>
                {isSignIn? "Don't have Account.Click here to Sign Up ":" Already have account.Click here to Sign In "}
            </p>

        </form>
    </div>
  )
}

export default Login