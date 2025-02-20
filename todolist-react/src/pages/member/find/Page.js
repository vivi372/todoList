import React, { useEffect, useState } from 'react';
import '../../../styles/findStyles.css';
import {findPw} from '../../../api/member/memberApi';
import { useNavigate } from 'react-router-dom';



const Page = () => {
    const [findQuest,setFindQuest] = useState("어릴 때 다녔던 초등학교 이름은?");
    const [findAnsw,setFindAnsw] = useState("");
    const [id,setId] = useState("");
    const navigate = useNavigate();

    const handleFind = async (e) => {
            e.preventDefault();
            const result = await findPw(id,findQuest,findAnsw);            
            console.log(result);    
            //답변 일치시
            if(result == '비밀번호 찾기 성공') {
                alert(`비밀번호 변경 화면으로 이동합니다.`);
                navigate('/member/updatePw',{state: id});
            } else {
                alert("답변또는 질문이 틀립니다. 다시 입력해주세요.");
            }
    
    };

    return (
        <>
            <div className="container right-panel-active" id="containerFind">
                <div className="form-container sign-up-container">
                    <div className="form-container sign-in-container">
                        <form>                    
                            <h1 className="me-auto">비밀번호 찾기</h1>                                                   
                                                       
                            <div className='findPwDiv'>
                                <input type="text" placeholder="ID" onChange={(e) => { setId(e.target.value); }}/>
                                <select placeholder="계정 찾기 질문" value={findQuest} onChange={(e) => { setFindQuest(e.target.value); }}>
                                    <option value="어릴 때 다녔던 초등학교 이름은?">어릴 때 다녔던 초등학교 이름은?</option>
                                    <option value="가장 감명 깊게 읽었던 책의 제목은?">가장 감명 깊게 읽었던 책의 제목은?</option>
                                    <option value="첫 직장의 회사명은?">첫 직장의 회사명은?</option>
                                    <option value="어린 시절 별명은?">어린 시절 별명은?</option>
                                    <option value="아버지의 출생지는 어디인가요?">아버지의 출생지는 어디인가요?</option>
                                    <option value="첫 반려동물의 이름은?">첫 반려동물의 이름은?</option>
                                </select>
                                <input type="text" placeholder="계정 찾기 답변" onChange={(e) => { setFindAnsw(e.target.value); }}/> 
                            </div>
                            <button className='my-2' onClick={handleFind}>찾기</button>
                        </form>  
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;