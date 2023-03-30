import React from 'react';
import "./Membership.css";
import Header from '../../components/header/Header';
import MembershipBody from '../../components/membershipBody/MembershipBody';
import Footer from "../../components/footer/Footer";

function Membership() {
  return (
    <div>
      <Header/>
      <MembershipBody/>
      <Footer/>
    </div>
  )
}

export default Membership