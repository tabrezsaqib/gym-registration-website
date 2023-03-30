import React, {useState} from 'react';
import './RegistrationBody.css';
import { NavLink } from 'react-router-dom';

function RegistrationBody() {
    // const [btnState, setBtnState] = useState(true);
  return (
    <div className='regMain'>
        <div className='regFormContainer'>
            <form className='regForm' action="">
                <div className='regTitle'>
                    <h4 className="regHeader">Register</h4>
                    <h6 className="regNew">Already a member?  
                    <NavLink to="/login" className="link">  
                    Login
                    </NavLink></h6>
                </div>
                <input type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    className='regName'
                    />
                    <input type="text" 
                    name="email" 
                    placeholder="Email address" 
                    className='regEmail'
                    />
                    <input type="password" 
                    name="password" 
                    placeholder="Password" 
                    className='regPassword'
                    />
                    <button className='regShow' 
                    ></button>
                    <input type="submit" 
                    name="submit" 
                    placeholder="Get Started" 
                    value="Get Started" 
                    className='regBtn'
                    // disabled={btnState}
                    />
            </form>
        </div>
    </div>
  )
}

export default RegistrationBody