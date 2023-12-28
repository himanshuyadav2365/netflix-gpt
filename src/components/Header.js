import { useDispatch, useSelector } from "react-redux"
import React from 'react'
import { removeUser } from "../utils/userSlice"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {  useNavigate } from "react-router-dom";
const Header = () => {

  const user=useSelector(store=>store.userSlice)
  const navigate=useNavigate()

  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
        navigate("/error")
    });
  }


  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center">
      <img 
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className='w-44' 
      />
      {user && <div className="flex px-2 items-center" >
        <img className="w-12 " alt="profile pic" src={user.photoURL}/>
        <p className="text-white px-2">{user.displayName}</p>
        <button className="text-white" onClick={handleSignout}>Signout</button>
      </div>
      }
    </div>
  )
}

export default Header