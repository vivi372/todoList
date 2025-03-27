package com.todo.list.service;

import java.util.List;
import java.util.Map;

import com.todo.list.model.ListDTO;

public interface ListService {
	//투두리스트 출력
	public List<ListDTO> todoList(ListDTO dto);
	
	//투두 작성
	public int todoWrite(ListDTO dto);
	
	//todo 완료 또는 완료 취소
	public int todoComple(ListDTO dto);
	
	//todo 수정
	public int todoUpdate(ListDTO dto);
	
	//todo 삭제
	public int todoDelete(ListDTO dto);

}
