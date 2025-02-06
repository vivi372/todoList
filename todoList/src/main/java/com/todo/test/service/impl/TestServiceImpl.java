package com.todo.test.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.test.mapper.TestMapper;
import com.todo.test.service.TestService;

@Service
public class TestServiceImpl implements TestService {
	
	@Autowired
	private TestMapper mapper;

	@Override
	public int selectAll() {
		return mapper.selectAll();
	}

}
