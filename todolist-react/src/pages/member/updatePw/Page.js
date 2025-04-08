import React, { useEffect, useState  } from 'react';
import '../../../styles/findStyles.css';
import {updatePw} from '../../../api/member/memberApi';
import { useNavigate,useLocation } from 'react-router-dom';



const Page = () => { 
 
    const [pw,setPw] = useState("");
    const [pw2,setPw2] = useState("");
    const location = useLocation();
    const id = location.state;
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(location);
        console.log(id);
    },[])

    const handleUpdate = async (e) => {
            e.preventDefault();

            if(pw!=pw2) {
                setPw2("");
                alert("비밀번호가 다릅니다. 다시 입력해주세요");
            } else {
                const result = await updatePw(id,pw);            
                console.log(result);    
                //변경 성공
                if(result == '비밀번호가 성공적으로 변경되었습니다.') {
                    alert(`비밀번호가 성공적으로 변경되었습니다. 로그인 화면으로 이동합니다.`);
                    navigate('/member/login');
                } else {
                    alert("변경중 오류 발생 ");
                }
            }

    
    };

    return (
        <>
            <div className="container right-panel-active" id="containerFind">
                <div className="form-container sign-up-container">
                    <div className="form-container sign-in-container">
                        <form>                    
                            <h1 className="me-auto">비밀번호 수정</h1>                                                   
                                                       
                            <div>
                                <input type="text" placeholder="ID" readOnly value={id}/>
                                <input type="password" placeholder="PW" onChange={(e)=> setPw(e.target.value)}/>     
                                <input type="password" value={pw2} placeholder="PW2" onChange={(e)=> setPw2(e.target.value)}/>                             
                            </div>
                            <button className='my-2' onClick={handleUpdate}>수정</button>
                        </form>  
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;