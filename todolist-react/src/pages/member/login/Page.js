import React, { useEffect, useState } from 'react';
import '../../../styles/loginStyles.css';
import { Link, useNavigate } from 'react-router-dom';
import {loginUser,joinUser} from '../../../api/member/memberApi';
import {setStorageUser} from '../../../utils/session';


const Page = () => {
    
    const [isLogin,setIsLogin] = useState(true);
    const [id,setId] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [findQuest,setFindQuest] = useState('어릴 때 다녔던 초등학교 이름은?');
    const [findAnsw,setFindAnsw] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await loginUser(id,password);
        
        console.log(result);

        //로그인 성공시
        if(result != null) {
            //세션에 데이터 저장
            setStorageUser(result);
            alert(`어서오세요 ${result.name}님`);
            navigate('/');
        } else {
            alert("잘못된 로그인 정보입니다. 다시 입력해주세요.");
        }

    };

    const handleJoin = async (e) => {
        e.preventDefault();
        const result = await joinUser(id,password,name,findQuest,findAnsw);
        
        if(result) {
            //가입 성공시
            const user = await loginUser(id,password);
            //세션에 데이터 저장
            setStorageUser(user);
            alert(`어서오세요 ${user.name}님`);
            navigate('/');
           
        } else {
            //가입 실패시
            alert("잘못된 회원 정보입니다. 다시 입력해주세요.");
        }

    };

    return (
        <>
            <div className={`container ${isLogin?'':'right-panel-active'}`} id="container">
                <div className="form-container sign-up-container">
                    <form onSubmit={handleJoin}>
                        <h1>회원가입</h1>    
                        <span className='my-2'>원하는 아이디를 입력해 가입하세요</span>
                        <input type="text" placeholder="이름" onChange={!isLogin ? (e)=>{setName(e.target.value)} : (e)=>{}}/>
                        <input type="text" placeholder="ID" onChange={!isLogin ? (e)=>{setId(e.target.value)} : (e)=>{}}/>
                        <input type="password" placeholder="Password" onChange={!isLogin ? (e)=>{setPassword(e.target.value)} : (e)=>{}}/>
                        <select placeholder="계정 찾기 질문" value={findQuest} onChange={!isLogin ? (e)=>{setFindQuest(e.target.value)} : (e)=>{}}>
                            <option value="어릴 때 다녔던 초등학교 이름은?">어릴 때 다녔던 초등학교 이름은?</option>
                            <option value="가장 감명 깊게 읽었던 책의 제목은?">가장 감명 깊게 읽었던 책의 제목은?</option>
                            <option value="첫 직장의 회사명은?">첫 직장의 회사명은?</option>
                            <option value="어린 시절 별명은?">어린 시절 별명은?</option>
                            <option value="아버지의 출생지는 어디인가요?">아버지의 출생지는 어디인가요?</option>
                            <option value="첫 반려동물의 이름은?">첫 반려동물의 이름은?</option>
                        </select>
                        <input type="text" placeholder="계정 찾기 답변" onChange={!isLogin ? (e)=>{setFindAnsw(e.target.value)} : (e)=>{}}/>
                        <button className='my-2'>가입하기</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={handleLogin}>
                        <h1>로그인</h1>

                        <span className='my-2'>ID와 비밀번호를 입력해주세요</span>
                        <input type="text" placeholder="ID" onChange={isLogin ? (e)=>{setId(e.target.value)} : (e)=>{}} />
                        <input type="password" placeholder="Password" onChange={isLogin ? (e)=>{setPassword(e.target.value)} : (e)=>{}}/>
                        <a onClick={()=>{navigate('/member/find')}}>비밀번호를 잊으셨나요?</a>
                        <button className='my-2'>로그인</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>다시 만나뵙게 <br/>되어 반갑습니다!</h1>
                            <p>저희와 계속 연결하려면 개인 정보를 사용하여 로그인하세요.</p>
                            <button className="ghost" id="signIn" onClick={()=>setIsLogin(true)}>로그인</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>만나서<br/> 반가워요!</h1>
                            <p>개인 정보를 입력하고 저희와 함께 시작하세요.</p>
                            <button className="ghost" id="signUp" onClick={()=>setIsLogin(false)}>가입하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;