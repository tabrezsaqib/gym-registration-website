import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import SubscriptionBody from '../../components/subscriptionBody/SubscriptionBody';
import './Subscription.css';


function Subscription() {
  return (
    <div>
      <Header/>
      <SubscriptionBody/>
      <Footer/>
    </div>
  )
}

export default Subscription