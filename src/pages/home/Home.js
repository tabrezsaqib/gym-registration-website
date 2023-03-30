import React from 'react';
import "./Home.css";
import Header from "../../components/header/Header";
import HomeBody from "../../components/homeBody/homeBody";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div>
      <Header/>
        <HomeBody/>
      <Footer/>
    </div>
  )
}

export default Home