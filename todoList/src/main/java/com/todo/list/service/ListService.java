package com.todo.list.service;

import java.util.List;

import com.todo.list.model.ListDTO;

public interface ListService {
	//투두리스트 출력
	public List<ListDTO> todoList(ListDTO dto);
	
	//투두 작성
	public int todoWrite(ListDTO dto);		

}
