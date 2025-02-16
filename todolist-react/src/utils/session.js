
/**
 * 리액트 세션 관리해주는 자바스크립트 파일
 */

/**
 * 세션 존재하는 체크하는 함수
 */
const isSession = () => {
    const session = sessionStorage.getItem('user');
    if(session) return true;
    else return false;
};

/**
 * 세션에 회원정보 저장하는 함수 
 */
const setStorageUser = (param) => {
    sessionStorage.setItem('user',JSON.stringify(param));
};

/**
 * 세션 로그아웃 시키는 함수
 */
const storageLogout = (param) => {
    sessionStorage.removeItem('user');
};

/**
 * 세션 가져오는 함수
 */
const getSession = () => {
    const strUser = sessionStorage.getItem('user');
    return JSON.parse(strUser);
};