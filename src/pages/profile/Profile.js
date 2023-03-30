import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ProfileBody from '../../components/profileBody/ProfileBody';
import "./Profile.css";

function Profile() {
  return (
    <div>
        <Header/>
        <ProfileBody/>
        <Footer/>
    </div>
  )
}

export default Profile