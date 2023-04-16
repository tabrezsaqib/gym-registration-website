import React, {useState, useEffect} from 'react';
import './RegistrationBody.css';
import { NavLink, useNavigate } from 'react-router-dom';
import {useStateValue} from "../../redux/StateProvider";

function RegistrationBody() {
    const [{ userDetails, apiData }, dispatch] = useStateValue();
    const [btnState, setBtnState] = useState(true);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
      });
      const [apiResp, setApiResp] = useState([]);
    //   console.log("userrrrrr", userDetails)
    const [emailError, setEmailError] = useState('');
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

    const onSubmitForm = async (e) => {
        e.preventDefault();
        // console.log("usssser", user);
        if(user.name !== "" && user.email !== "" && user.password !== ""){
            const database = await fetch("https://userdetails-8e87a-default-rtdb.firebaseio.com/db.json",
                        {
                            method: "POST",
                            header: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                Name: user.name,
                                Email: user.email,
                                Password: user.password
                            })
                        })
                        if(database){
                            alert("Registration Successful");
                            setUser(
                                {
                                name: "",
                                email: "",
                                password: ""
                            }  
                            );
                        }
                        dispatch({ type: "USERDETAILS", value: user });
                        navigate('/login');
                    }
        }
    //     if(user.name !== "" && user.email !== "" && user.password !== ""){
    //     const checkDuplicates = await apiResp && apiResp.map(
    //         (element) => {
    //         if(element?.email !== user.email){
    //             const resp = fetch("https://userdetails-8e87a-default-rtdb.firebaseio.com/db.json",
    //             {
    //                 method: "POST",
    //                 header: {
    //                     "Content-Type": "application/json"
    //                 },
    //                 body: JSON.stringify({
    //                     Name: user.name,
    //                     Email: user.email,
    //                     Password: user.password
    //                 })
    //             })
    //             if(resp){
    //                 alert("Registration Successful");
    //                 setUser(
    //                     {
    //                     name: "",
    //                     email: "",
    //                     password: ""
    //                 }  
    //                 );
    //             }
    //             dispatch({ type: "USERDETAILS", value: user });
    //             navigate('/login');
    //         }
    //         if(element?.email === user.email){
    //             setEmailError("Email already exists!");
    //         }
    //     }
    //     )      
    //     }
    // }
    useEffect(
        () => {
            fetch("https://userdetails-8e87a-default-rtdb.firebaseio.com/db.json")
            .then((duplicates) => {
                            return duplicates.json();
                          })
                          .then((data) => {
                            setApiResp(data);
                            dispatch({ type: "APIDATA", value: data });
                            // console.log("dataaaa",data);
                          });
        },[]
      )

    // function submitData(e){
    //     // e.preventDefault();
    //     dispatch({ type: "USERDETAILS", value: user });
    //     // console.log("uuuserr", user);
    //     // navigate('/login');
    //     // alert("hello");
    // }
    // useEffect( () => {
    //     if(userDetails.name !== "" && userDetails.email !== "" && userDetails.password !== ""){
    //         const requestOptions = {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ name: userDetails.name, email: userDetails.email, password: userDetails.password })
    //         };
    //         fetch('http://localhost:3001/userDetails', requestOptions)
    //             .then(response => response.json())
    //             .then(data => console.log(data));   
        
    //         navigate('/login')
    // }
    // }, [userDetails])
        
  return (
    <div className='regMain'>
        <div className='regFormContainer'>
            <form className='regForm' action="" onSubmit={onSubmitForm}>
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
                    <p className="regemailError">{emailError}</p>
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
                    // onClick={(e) => {
                    //     submitData(e);
                    //   }}
                    />
            </form>
        </div>
    </div>
  )
}

export default RegistrationBody