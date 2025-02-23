package com.todo.list.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.list.mapper.ListMapper;
import com.todo.list.model.ListDTO;
import com.todo.list.service.ListService;

@Service
public class ListServiceImpl implements ListService {
	
	@Autowired
	private ListMapper mapper;

	@Override
	public List<ListDTO> todoList(ListDTO dto) {
		return mapper.todoList(dto);
	}

	@Override
	public int todoWrite(ListDTO dto) {
		return mapper.todoWrite(dto);
	}



}
