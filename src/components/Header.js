import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from 'react'
import { addUser,removeUser, selectLang } from "../utils/userSlice"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {  useNavigate } from "react-router-dom";
import { Logo, Supported_Languages } from "../utils/constants";
import { showGPTSearchToggle } from "../utils/GptSlice";
import { lang } from "../utils/langConstants";
const Header = () => {

  const user=useSelector(store=>store.userSlice.user)
  const gptValue=useSelector(store=>store.gptSlice.showGpt)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const preferredlanguage=useSelector(store=>store.userSlice.preferredlanguage)

  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
        navigate("/error")
    });
  }

  const handleLangChange=(e)=>{
    dispatch(selectLang(e.target.value))
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName,photoURL} = user;
        navigate("/browse")
        dispatch(addUser({uid:uid,email,displayName,photoURL}))
    } else {
      // User is signed out
      dispatch(removeUser())
      navigate("/")
    }
  })
  return ()=>unsubscribe()
},[]);

  return (
    <div className="absolute md:px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between items-center ">
      <img 
        src={Logo}
        alt="logo"
        className='w-44' 
      />
      {user && <div className="flex p-2 items-center" >
        {gptValue && <select className="bg-gray-900 text-white px-4 py-2 rounded-md" onChange={handleLangChange} defaultChecked="sdfds">
          {Supported_Languages.map(lang=> <option value={lang.identifier} selected={lang.identifier===preferredlanguage}>{lang.lang}</option>)}
          </select>}
      <button className="text-white mx-4 bg-orange-600 px-4 py-2 rounded-md font-bold cursor-pointer" onClick={()=>dispatch(showGPTSearchToggle())}>{gptValue? lang[preferredlanguage].homepage:lang[preferredlanguage].gptsearch}</button>
        <img className="w-12 rounded-lg h-10 object-cover" alt="profile pic" src={user.photoURL}/>
        <div className="mx-2 center"><p className="text-white px-2">{user.displayName}</p>
        <button className="text-white font-bold" onClick={handleSignout}>({lang[preferredlanguage].signout})</button></div>
        
      </div>
      }
    </div>
  )
}

export default Header