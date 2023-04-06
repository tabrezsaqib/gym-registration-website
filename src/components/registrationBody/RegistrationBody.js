import React, {useState, useEffect} from 'react';
import './RegistrationBody.css';
import { NavLink, useNavigate } from 'react-router-dom';
import {useStateValue} from "../../redux/StateProvider";

function RegistrationBody() {
    const [{ userDetails}, dispatch] = useStateValue();
    const [btnState, setBtnState] = useState(true);
    const navigate = useNavigate();
    const [apiResp, setApiResp] = useState([]);
    const [emailError, setEmailError] = useState('');
    // // let nameError = '';
    // let emailError = '';
    // let passwordError = '';
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
      });
      useEffect(
        () => {
            fetch("http://localhost:3001/userDetails")
            .then((resp) => {
                            return resp.json();
                          })
                          .then((data) => {
                            setApiResp(data);
                            // checkDuplicates();
                            dispatch({ type: "USERDETAILS", value: data });
                          });
        },[]
      )
    //   console.log("hello",apiResp);
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
            // alert("Please fill the form");

        }
    }, [user.name, user.email, user.password])

    function userRegistration(){
        if(user.name !== "" && user.email !== "" && user.password !== ""){
            apiResp && apiResp.map((element) => {
                if(element?.email !== user.email){
                    console.log("eee", element.email);
                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name: user.name, email: user.email, password: user.password })
                    };
                    fetch('http://localhost:3001/userDetails', requestOptions)
                        .then(response => response.json())
                        .then(data => 
                            navigate('/login')
                            // alert("Registration done successfully")
                        );
                }
            })
    }
    }
    function checkDuplicates(){
        userDetails && userDetails.map(
            (element) => {
                if (element?.email === user?.email){
                    setEmailError("Email already exists!");
                }
                else{
                    userRegistration();
                    // alert("hello");
                }
            }
        )
    }

    // function apiCalling(){
    //         fetch("http://localhost:3001/userDetails")
    //           .then((resp) => {
    //             return resp.json();
    //           })
    //           .then((data) => {
    //             setApiResp(data);
    //             checkDuplicates();
    //           });
    // }
    useEffect(() => {
        dispatch({ type: "APIDATA", value: apiResp });
      }, [apiResp]);
    
    function submitData(e){
        // e.preventDefault();
        checkDuplicates();
            
    }
        
  return (
    <div className='regMain'>
        <div className='regFormContainer'>
            <form className='regForm' action="" method='get' onSubmit={(e) => {
                        submitData(e);
                      }}>
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
                    {/* <p className="regnameError">{nameError}</p> */}
                    <input type="text" 
                    name="email" 
                    placeholder="Email address" 
                    className='regEmail'
                    value={user.email} 
                    onChange={handleUser}
                    />
                    <p className="regemailError">{emailError}</p>
                    <input type="password" 
                    name="password" 
                    placeholder="Password" 
                    className='regPassword'
                    value={user.password} 
                    onChange={handleUser}
                    />
                    {/* <p className="regpasswordError">{passwordError}</p> */}
                    <button className='regShow' 
                    ></button>
                    <input type="submit" 
                    name="submit" 
                    placeholder="Get Started" 
                    value="Get Started" 
                    className='regBtn'
                    disabled={btnState}
                    />
            </form>
        </div>
    </div>
  )
}

export default RegistrationBody