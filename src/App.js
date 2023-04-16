import './App.css';
import {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/login/Login";
import Registration from './pages/registration/Registration';
import Home from './pages/home/Home';
import Membership from './pages/membership/Membership';
import Subscription from './pages/subscription/Subscription';
import Checkout from './pages/checkout/Checkout';
import {useStateValue} from './redux/StateProvider'
import Profile from './pages/profile/Profile';

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import firebaseConfig from './firebaseConfig';

function App() {
  const [apiResp, setApiResp] = useState();

  const [, dispatch] = useStateValue();

  // firebase.initializeApp(firebaseConfig);

  useEffect(() => {
    fetch("http://localhost:3001/userDetails")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setApiResp(data);
      });
  }, []);

  useEffect(() => {
    dispatch({ type: "APIDATA", value: apiResp });
  }, [apiResp]);

  // console.log("apiiiiiii", apiResp);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Registration />}/>
          <Route  path="/login" element={<Login />}/>
          <Route  path="/home" element={<Home />}/>
          <Route  path="/membership" element={<Membership />}/>
          <Route  path="/subscription" element={<Subscription />}/>
          <Route  path="/profile" element={<Profile/>}/>
          <Route  path="/checkout" element={<Checkout />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
