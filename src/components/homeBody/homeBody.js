import React from 'react';
import "./homeBody.css";
import gym from '../../assets/images/gym.jpg';
import dumbell from '../../assets/images/dumbell.jpg';
import openspace from '../../assets/images/openspace.jpg';

function homeBody() {
  return (
    <div className="homemain">
                <div className="homeimages">
                    <div className="homecard1">
                        <img  src={gym} width="100%" height="60%" className="homecard" alt='not found'/>
                    </div>
                    <div className="homecard2">
                        <img src={dumbell} width="100%" height="60%" className="homecard" alt='not found'/>
                    </div>
                    <div class="homecard3">
                        <img src={openspace} width="100%" height="60%" className="homecard" alt='not found'/>
                    </div>
                </div>
                <div className="homedesc">
                    <h4 className='hometitle'>Get Savagely Strong,
                        Pack On Slabs Of Muscle,
                        Reach Your Physique Goals,
                        and Achieve Peak Performance!</h4>
                    <p className='homeslogan'>We coach strength seeking lifters to unlock their performance potential through world class programming, lifter focused technology, and unrivaled team culture.</p>
                    <p className='homecontent'>Our gym is more than just a place to work out. It's a community of like-minded individuals who are passionate about fitness and wellness. You'll have the opportunity to connect with others and make new friends who share your interests.
                        We are committed to providing you with the best possible experience as a member of our gym. If you have any questions or concerns, please don't hesitate to reach out to our staff. We are always here to help.
                        Thank you for choosing our gym as your fitness home. We look forward to helping you achieve your health and wellness goals.</p>
                </div>
            </div>
  )
}

export default homeBody