import React, {useState, useEffect} from 'react';
import './RegistrationBody.css';
import { NavLink, useNavigate } from 'react-router-dom';
import {useStateValue} from "../../redux/StateProvider";

function RegistrationBody() {
    const [{ userDetails }, dispatch] = useStateValue();
    const [btnState, setBtnState] = useState(true);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
      });
    //   console.log("userrrrrr", userDetails)
      function handleUser(e){
        if(e.target.name === "name")
        {
            setUser(() => ({ ...user, name: e.target.value }));
        }
        if(e.target.name==="email")
        {
            setUser(() => ({ ...user, email: e.target.value }));
        }
        if(e.target.name === "password")
        {
            setUser(() => ({ ...user, password: e.target.value }));
        }
       }
       useEffect(() => {
        if (user.name !== "" && user.email !== "" && user.password !== ""){
            setBtnState(false);
        }
        else{
            setBtnState(true);
        }
    }, [user.name, user.email, user.password])

    function submitData(e){
        // e.preventDefault();
        dispatch({ type: "USERDETAILS", value: user });
        // console.log("uuuserr", user);
        // navigate('/login');
        // alert("hello");
    }
    useEffect( () => {
        if(userDetails.name !== "" && userDetails.email !== "" && userDetails.password !== ""){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: userDetails.name, email: userDetails.email, password: userDetails.password })
            };
            fetch('http://localhost:3001/userDetails', requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));   
        
            navigate('/login')
    }
    }, [userDetails])
        
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
                    value={user.name} 
                    onChange={handleUser}
                    />
                    <input type="text" 
                    name="email" 
                    placeholder="Email address" 
                    className='regEmail'
                    value={user.email} 
                    onChange={handleUser}
                    />
                    <input type="password" 
                    name="password" 
                    placeholder="Password" 
                    className='regPassword'
                    value={user.password} 
                    onChange={handleUser}
                    />
                    <button className='regShow' 
                    ></button>
                    <input type="submit" 
                    name="submit" 
                    placeholder="Get Started" 
                    value="Get Started" 
                    className='regBtn'
                    disabled={btnState}
                    onClick={(e) => {
                        submitData(e);
                      }}
                    />
            </form>
        </div>
    </div>
  )
}

export default RegistrationBody