import React from 'react'
import './Login.css'
import { loginUrl } from '../../spotify'

function Login() {
  return (
    <div className="login-container">
        
            <div className="logo-container">
                <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png" alt="" />
                </div>

                <button id="loginBtn">
               
               <a href={loginUrl} className="text-white">

                      Login
               </a>
                    
                
                  </button>
        
        </div>
  )
}

export default Login