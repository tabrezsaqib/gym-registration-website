import React from 'react';
import "./Header.css";
import {NavLink} from "react-router-dom";
import dumbbell_solid from '../../assets/icons/dumbbell-solid.svg';
import search from '../../assets/icons/search.svg';
import person_fill from '../../assets/icons/person-fill.svg';
import bag_fill from '../../assets/icons/bag-fill.svg';

function Header() {
  return (
            <div className="navmain">
                <div className="navintro">
                    <div className="navname">
                        <h2 className="navname1">Maverick Fitness Studio</h2>
                    </div>
                    <div className="navwel">
                        <p>Welcome <span> </span>!</p>
                    </div>
                </div>
                <div className="navnav">
                    <div class="navlogo">
                        <img src={dumbbell_solid} width="40%" alt='not found'/>
                    </div>
                    <div className="navmenu">
                        <ul>
                            <li>
                                <NavLink className="links" to="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="links" to="/membership">Membership</NavLink>
                            </li>
                            <li>
                                <NavLink className="links" to="/subscription">Subscription</NavLink>
                            </li>   
                        </ul>
                    </div>
                    <div className="navparent">
                        <div id="navsearch">
                            <img src={search} width="10%" id="navicon" alt='not found'/>
                            <input type="text" placeholder="Search" autocomplete="none" className="navsearch"/>
                        </div>
                    </div>
                    <div className="navlogin">
                        <NavLink className="links" to="/profile">
                            <div className="navlogin1">
                                <img src={person_fill}  width="40%" alt='not found'/>
                                <p>Profile</p>
                            </div>
                        </NavLink>
                        <NavLink className="links" to="/checkout">
                            <div className="navlogin1">   
                                <img src={bag_fill}  width="40%" alt='not found'/>
                                <p>Checkout</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
  )
}

export default Header