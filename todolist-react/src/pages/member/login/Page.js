import React, { useEffect } from 'react';
import '../../../styles/loginStyles.css'
import { Link } from 'react-router-dom';

const Page = () => {
    


    return (
        <>
            <div className="login-page">

                <div className="login-content login-content-signin" id="signinDiv">
                    <div>
                        <h2>Log in</h2>
                        <form className="wrapper-box" role="form">
                            <input type="email"
                                ng-model="email"
                                className="form-control form-control-email"
                                placeholder="ID"
                                required/>
                            <input type="password"
                                ng-model="password"
                                className="form-control form-control-password"
                                placeholder="Password"
                                required />           
                            <Link className="outer-link pull-left" href="#/forgot">아이디 찾기/비밀번호 찾기</Link>                
                            <button type="submit" className="btn btn-submit btn-default pull-right">Log in</button>
                        </form>
                    </div>
                </div>

                <div className="login-content login-content-signup" id="signupDiv">
                    <div>
                        <h2>Sign Up</h2>
                        <form className="wrapper-box" role="form">
                            <input type="text"
                                ng-model="username"
                                className="form-control form-control-username"
                                placeholder="Username"
                                required />
                            <input type="email"
                                ng-model="email"
                                className="form-control form-control-email"
                                placeholder="Email address"
                                required />
                            <input type="password"
                                ng-model="password"
                                className="form-control form-control-password"
                                placeholder="Password"
                                required />           
                            <button type="submit" className="btn btn-submit btn-default pull-right">Sign up</button>
                        </form>
                    </div>
                </div>



                <div className="login-switcher">
                    <div className="login-switcher-signin" id="signinBtnDiv">
                        <h3>Have an account?</h3>
                        <button>Login</button>
                    </div>
                    <div className="login-switcher-signup" id="signupBtnDiv">
                        <h3>Don't have an account?</h3>
                        <button>Sign Up</button>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Page;