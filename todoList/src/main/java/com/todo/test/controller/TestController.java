package com.todo.test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todo.test.service.TestService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class TestController {
	
	@Autowired
	private TestService service;

	@GetMapping("/todo/test")
	public ResponseEntity<String> test() {
		
		log.info("result"+service.selectAll());
		
		return new ResponseEntity<String>("성공", HttpStatus.OK);
	}
	
}
