/** @format */

import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidateData } from '../utils/validation';
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
const Login = () => {
   const [isSignInForm, setIsSignInForm] = useState(false);
   const [errorMessage, setErrorMessage] = useState(null);
   const email = useRef(null);
   const password = useRef(null);
   const username = useRef(null);

   function toggleSignInForm() {
      setIsSignInForm(!isSignInForm);
      // Clear input fields
      if (email.current) email.current.value = '';
      if (password.current) password.current.value = '';
      if (username.current) username.current.value = '';
      setErrorMessage(null); // Optional: also clear errors
   }

   function handleButtonClick(e) {
      e.preventDefault();

      const emailValue = email.current?.value;
      const passwordValue = password.current?.value;
      const usernameValue = isSignInForm ? username.current?.value : null;

      const message = checkValidateData(
         emailValue,
         passwordValue,
         usernameValue
      );

      // if (message) return;

      if (isSignInForm) {
         //Sign Up Logic
         createUserWithEmailAndPassword(auth, emailValue, passwordValue)
            .then((userCredential) => {
               // Signed in
               const user = userCredential.user;
               console.log('user', user);
            })
            .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
               setErrorMessage(errorCode + ' - ' + errorMessage);
            });
      } else {
         //Sign in Logic

         signInWithEmailAndPassword(auth, emailValue, passwordValue)
            .then((userCredential) => {
               // Signed in
               const user = userCredential.user;
               console.log('Login User =', user);
            })
            .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
               setErrorMessage(errorCode + ' - ' + errorMessage);
            });
      }

      setErrorMessage(message);
   }
   return (
      <div>
         <Header />
         <div className='absolute'>
            <img
               src='https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg'
               alt='Netflix'
            />
         </div>

         <form
            onSubmit={handleButtonClick}
            className='absolute w-3/12 p-12 my-36 mx-auto  right-0 left-0 text-white rounded bg-black/70 bg-opacity-10 '>
            <h1 className='text-white text-3xl font-bold mb-6'>
               {isSignInForm ? 'Sign Up' : 'Sign In'}
            </h1>
            {isSignInForm && (
               <input
                  ref={username}
                  type='text'
                  placeholder='Full Name'
                  className='p-2 mt-4 w-full bg-gray-700 rounded bg-opacity-50'
               />
            )}
            <br />
            <input
               ref={email}
               type='text'
               placeholder='Email or Phone'
               className='p-2 mt-4 w-full bg-gray-700 rounded bg-opacity-50'
            />
            <br />
            <input
               ref={password}
               type='password'
               placeholder='Password'
               className='p-2 mt-4  w-full  bg-gray-700 rounded'
            />

            <p className='text-red-500 p-2 text-normal'>{errorMessage}</p>
            <button className='p-2 mt-6 bg-red-500  w-full rounded'>
               {isSignInForm ? 'Sign Up' : 'Sign In'}
            </button>

            <p
               className='py-6 text-sm cursor-pointer'
               onClick={toggleSignInForm}>
               {!isSignInForm
                  ? 'New to Netflix? Sign up now'
                  : 'Click for Sign In'}
            </p>
         </form>
      </div>
   );
};

export default Login;
