import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import {isSession} from '../utils/session';

const Navbar = () => {
    const navigate = useNavigate();


    return (
        <header className="header navbar-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="nav-inner">                        
                            <nav className="navbar navbar-expand-lg">
                                <Link className="navbar-brand" to="/">
                                    <img src="%PUBLIC_URL%/assets/images/logo/white-logo.svg" alt="Logo"/>
                                </Link>
                                <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                    <ul id="nav" className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <Link to="/">
                                                Home
                                            </Link>                                        
                                        </li>                                    
                                        <li className="nav-item">
                                            <a className="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                                                data-bs-target="#submenu-1-1" aria-controls="navbarSupportedContent"
                                                aria-expanded="false" aria-label="Toggle navigation">Pages</a>
                                            <ul className="sub-menu collapse" id="submenu-1-1">
                                                <li className="nav-item active"><a href="about-us.html">About Us</a></li>
                                                <li className="nav-item"><a href="pricing.html">Our Pricing</a></li>
                                                <li className="nav-item"><a href="signin.html">Sign In</a></li>
                                                <li className="nav-item"><a href="signup.html">Sign Up</a></li>
                                                <li className="nav-item"><a href="reset-password.html">Reset Password</a></li>
                                                <li className="nav-item"><a href="mail-success.html">Mail Success</a></li>
                                                <li className="nav-item"><a href="404.html">404 Error</a></li>
                                            </ul>
                                        </li>                                    
                                    </ul>
                                </div>
                                {isSession()? 
                                    <FaUser style={{ fontSize: 'x-large', color: '#ffffff' }} />     
                                    : 
                                    <div className="button" onClick={()=>navigate('/member/login')}>                                
                                            <span className='btn'>Get started</span>                                                               
                                    </div>                                    
                                }
                            </nav>
                        
                        </div>
                    </div>
                </div> 
            </div>
        </header>
    );
};

export default Navbar;
