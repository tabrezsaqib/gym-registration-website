import React, {useState, useEffect} from 'react';
import "./LoginBody.css";
import {NavLink, useNavigate} from "react-router-dom";
import {useStateValue} from "../../redux/StateProvider";

// import firebase from 'firebase/app';

function LoginBody(props) {
  const [{ userDetails, formData, apiData }, dispatch] = useStateValue();
  const [apiResp, setApiResp] = useState();
  const [btnState, setBtnState] = useState(true);
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  });
  useEffect(() => {
    setApiResp(apiData);
  }, [apiData]);
  function handleUser(e){
    if(e.target.name==="email")
    {
        setLoginDetails(() => ({ ...loginDetails, email: e.target.value }));
    }
    if(e.target.name === "password")
    {
        setLoginDetails(() => ({ ...loginDetails, password: e.target.value }));
    }
   }
   useEffect(() => {
    if (loginDetails.email !== "" && loginDetails.password !== ""){
        setBtnState(false);
    }
    else{
        setBtnState(true);
    }
}, [loginDetails.email, loginDetails.password])
const submitData = async (e) => {
    e.preventDefault();
    dispatch({ type: "FORMDATA", value: loginDetails });
    await apiResp &&
          apiResp.map((element) => {
            if (
              element?.email
                .includes(formData.email) && 
                element?.password 
                .includes(formData.password)
            ) {
              navigate('/home');
            }
            else{
              alert("Invalid Credentials");
            }
          }); 
}
// const handleSignIn = async () => {
//   try {
//     await firebase.auth().signInWithEmailAndPassword(loginDetails.email, loginDetails.password);
//     navigate('/home');
//   } catch (error) {
//     console.error(error);
//     alert("Invalid Credentials");
//   }
// };
  return (
    <div className='loginMain'>
        <div className='loginFormContainer'>
            <form className='loginForm' action="" onSubmit={submitData}>
                    <input type="text" 
                    name="email" 
                    placeholder="Email address" 
                    className='loginEmail'
                    value={loginDetails.name} 
                    onChange={handleUser}
                    />
                    <input type="password" 
                    name="password" 
                    placeholder="Password" 
                    className='loginPassword'
                    value={loginDetails.password} 
                    onChange={handleUser}
                    />
                    <button className='loginShow' 
                    ></button>
                    {/* <NavLink to="/home" className="link" > */}
                        <input type="submit" 
                        name="login" 
                        placeholder="Login" 
                        value="Login" 
                        className='loginBtn'
                        disabled={btnState}
                        // onClick={
                        //   // (e) => {
                        // // submitData(e);
                        // handleSignIn
                        //   // }
                        // }
                        />
                    {/* </NavLink> */}
            </form>
        </div>
    </div>
  )
}

export default LoginBody