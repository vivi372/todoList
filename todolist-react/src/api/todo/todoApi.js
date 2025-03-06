import { postRequest } from "../api";

// 투두리스트 API 함수 
export const todoList = async (id) => {
    const param = {
        id : id,        
    };
    try {
        return await postRequest("/todo/list", param);
    } catch (error) {
        return null;
    }
};

// 투두리스트 등록 API 함수
export const todoWrite = async (todoName, todoMemo,impor,startDate,endDate,id) => {
    const param = {
        todoName : todoName,
        todoMemo : todoMemo,
        impor : impor,
        startDate : startDate,
        endDate : endDate,
        id : id,
    };
    try {
        await postRequest("/todo/write", param);
        return true
    } catch (error) {
        return false;
    }
};

// 투두리스트 토글 API 함수
export const todoTogle = async (seqNo,compleYn) => {
    const param = {
        seqNo : seqNo,
        compleYn : compleYn,
    };
    try {
        return await postRequest("/todo/comple", param);
    } catch (error) {
        return false;
    }
};

// 투두리스트 업데이트 API 함수
export const todoUpdate = async (todoName, todoMemo,impor,startDate,endDate,seqNo) => {
    const param = {
        todoName : todoName,
        todoMemo : todoMemo,
        impor : impor,
        startDate : startDate,
        endDate : endDate,
        seqNo : seqNo,  
    };
    try {
        return await postRequest("/todo/update", param);
    } catch (error) {
        return false;
    }
};

// 투두리스트 삭제 API 함수
export const todoDelete = async (seqNo) => {
    const param = {
        seqNo : seqNo,
    };
    try {
        return await postRequest("/todo/delete", param);
    } catch (error) {
        return false;
    }
};
