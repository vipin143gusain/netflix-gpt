/** @format */

import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
   const [isSignToggle, setIsSignToggle] = useState(false);
   function signUpHandler(params) {
      setIsSignToggle(!isSignToggle);
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

         <form className='absolute w-3/12 p-12 my-36 mx-auto  right-0 left-0 text-white rounded bg-black/70 bg-opacity-10 '>
            <h1 className='text-white text-3xl font-bold mb-6'>
               {isSignToggle ? 'Sign Up' : 'Sign In'}
            </h1>
            {isSignToggle && (
               <input
                  type='text'
                  placeholder='Full Name'
                  className='p-2 mt-4 w-full bg-gray-700 rounded bg-opacity-50'
               />
            )}
            <br />
            <input
               type='text'
               placeholder='Email or Phone'
               className='p-2 mt-4 w-full bg-gray-700 rounded bg-opacity-50'
            />
            <br />
            <input
               type='password'
               placeholder='Password'
               className='p-2 mt-4  w-full  bg-gray-700 rounded'
            />
            <button className='p-2 mt-6 bg-red-500  w-full rounded'>
               {isSignToggle ? 'Sign Up' : 'Sign In'}
            </button>

            <p className='py-6 text-sm cursor-pointer' onClick={signUpHandler}>
               {!isSignToggle
                  ? 'New to Netflix? Sign up now'
                  : 'Click for Sign In'}
            </p>
         </form>
      </div>
   );
};

export default Login;
