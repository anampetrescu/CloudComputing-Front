import React from 'react';
import "./SignIn.css";
import { signInWithGoogle } from '../../Firebase'

export const SignIn = ( { setUser } ) => {

  return (
   
        <div className="centered gradient">
              
                <h1 className='btn-text-white text-2xl font-bold mb-4'>Welcome to Translate Mail </h1>
                <h3 className='btn-text-white text-2xl font-bold mb-4'>Log in with your google account to continue</h3>
                <div onClick={() => signInWithGoogle() } className="google-btn">
                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                </div>
                <p className="btn-text"><b>Sign in with google</b></p>
                </div>
         
        </div>
  );
}