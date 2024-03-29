import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { profile_photo } from "../utils/constants";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef("");
  const email = useRef("");
  const password = useRef("");

  const toggleSignIn = () => {
    setSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = checkValidation(
      name.current?.value,
      email.current.value,
      password.current.value,
      isSignIn
    );
    setErrorMessage(message);

    if (message !== null) {
      return;
    }

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: profile_photo,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid: uid, email, displayName, photoURL }));
              //   navigate("browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " -- " + errorMessage);
        });
    } else {
      console.log(email.current.value, password.current.value);
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //   navigate("browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " -- " + errorMessage);
        });
    }
  };

  const guestLogin = (e) => {
    e.preventDefault();
    let name = "test6@gmail.com";
    let pwd = "Abcdef@123";
    signInWithEmailAndPassword(auth, name, pwd)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //   navigate("browse");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " -- " + errorMessage);
      });
  };

  return (
    <div>
      <Header />
      <div className="absolute h-full w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
          className=" h-full w-full object-cover"
        />
      </div>
      <form className=" w-full mx-2 md:w-4/12  bg-black absolute text-white rounded-lg p-12 my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter Email Id"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-700">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg cursor-pointer"
          onClick={handleSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn && (
          <button
            className="p-4 my-4 bg-red-700 w-full rounded-lg cursor-pointer"
            onClick={guestLogin}
          >
            Guest Login(Don't forgot to use GPT Search for better Experience)
          </button>
        )}
        <p className="cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "Don't have Account.Sign Up Now"
            : " Already have account.Click here to Sign In "}
        </p>
      </form>
    </div>
  );
};

export default Login;
