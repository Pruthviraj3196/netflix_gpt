import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

  const[isSignInForm, setIsSignInForm] = useState(true);
  const[erroroMassage, setErrorMassage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const passowrd = useRef(null);

  const hancleButtonClick = () => {
    // validate the form data
    const message = checkValidData(email.current.value, passowrd.current.value);
    setErrorMassage(message);
    
    if(message) return;

    // Sign in Sign up Logic
    if(!isSignInForm){
      // Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, passowrd.current.value)
      .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value, photoURL: "https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
      }).then(() => {
        
        const {uid, email, displayName, photoURL} = auth.currentUser;
        dispatch(
          addUser({
            uid: uid, 
            email:email, 
            displayName: displayName,
             photoURL: photoURL,
            }));
       

        navigate("/browse");
      }).catch((error) => {
        setErrorMassage(error.message);
      });
      console.log(user);
    // ...
     })
     .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
      // ..
      setErrorMassage(errorCode + "-" + errorMessage)
      });
    }else {
      // Sign in Logic
      signInWithEmailAndPassword(auth,email.current.value, passowrd.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMassage(errorCode + "-"+ errorMessage);
      });
    }
  }

  const togglesignInform = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/031c42b9-0c81-4db5-b980-0160765188e9/27f1b15d-79ed-43ca-8982-7faa9e4aa388/IN-en-20240819-TRIFECTA-perspective_WEB_3c576fa6-cd23-46b6-ac3f-1ad2bb0f66fb_large.jpg' alt='Backgroundimg'/>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12  absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>
      {!isSignInForm && (
        <input 
        ref={name}
        type='text'
        placeholder='Full Name'
        className='p-4 my-4 w-full bg-gray-700'
       />
      )}
      <input 
        ref={email}
        type='text'
        placeholder='Email Address or Phone Number'
        className='p-4 my-4 w-full bg-gray-700'
      />
      <input 
       ref={passowrd}
       type='password'
       placeholder='Password'
       className='p-4 my-4 w-full bg-gray-700'
      />
      <p className='text-red-500 font-bold text-lg py-2'>{erroroMassage}</p>
      <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={hancleButtonClick}>
      {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
      <p className='py-4 cursor-pointer' onClick={togglesignInform}>
      {isSignInForm ? " New to Netflix? Sign Up Now"
       : "Already registered? Sign In Now"}
       </p>
      </form>
    </div>
  )
}

export default Login 

