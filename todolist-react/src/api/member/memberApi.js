import { postRequest } from "../api";

// 로그인 API 함수
export const loginUser = async (id, password) => {
    const param = {
        id : id,
        password : password
    };
    try {
        return await postRequest("/member/login", param);
    } catch (error) {
        return null;
    }
};

// 회원가입 API 함수
export const joinUser = async (id, password,name,findQuest,findAnsw) => {
    const param = {
        id : id,
        password : password,
        name : name,
        findQuest : findQuest,
        findAnsw : findAnsw,
    };
    try {
        return await postRequest("/member/join", param);
    } catch (error) {
        return null;
    }
};
