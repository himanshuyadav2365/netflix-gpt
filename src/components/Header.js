import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from 'react'
import { addUser,removeUser } from "../utils/userSlice"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {  useNavigate } from "react-router-dom";
import { Logo } from "../utils/constants";
const Header = () => {

  const user=useSelector(store=>store.userSlice)
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
        navigate("/error")
    });
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName,photoURL} = user;
        navigate("/browse")
        dispatch(addUser({uid:uid,email,displayName,photoURL}))
        
      // ...
    } else {
      // User is signed out
      dispatch(removeUser())
      navigate("/")
    }
  })
  return ()=>unsubscribe()
},[]);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center">
      <img 
        src={Logo}
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