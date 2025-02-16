import React, { useEffect, useState } from 'react';
import '../../../styles/findStyles.css';


const Page = () => {  
    const [activeTab, setActiveTab] = useState("findId"); // "findId" 또는 "findPw"
    return (
        <>
            <div className="container right-panel-active" id="containerFind">
                <div className="form-container sign-up-container">
                    <div className="form-container sign-in-container">
                        <form>
                            <h1 className="me-auto">아이디 찾기
                             {/* 탭 메뉴 */}
                             <ul class="nav nav-tabs">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Active</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>                               
                            </ul>
                            </h1>
                            <input type="text" placeholder="ID" />
                            <input type="password" placeholder="Password"/>                            
                            <button className='my-2'>로그인</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;