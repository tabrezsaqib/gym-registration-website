import React from 'react';
import "./LoginBody.css";
import {NavLink} from "react-router-dom";

function LoginBody() {
  return (
    <div className='loginMain'>
        <div className='loginFormContainer'>
            <form className='loginForm' action="">
                    <input type="text" 
                    name="email" 
                    placeholder="Email address" 
                    className='loginEmail'
                    />
                    <input type="password" 
                    name="password" 
                    placeholder="Password" 
                    className='loginPassword'
                    />
                    <button className='loginShow' 
                    ></button>
                    <NavLink to="/home" className="link" >
                        <input type="submit" 
                        name="login" 
                        placeholder="Login" 
                        value="Login" 
                        className='loginBtn'
                        // disabled={btnState}
                        />
                    </NavLink>
            </form>
        </div>
    </div>
  )
}

export default LoginBody