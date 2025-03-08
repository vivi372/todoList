package com.todo.list.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todo.list.model.ListDTO;
import com.todo.list.service.ListService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/todo")
@Slf4j
public class ListController {
	
	@Autowired
	private ListService service;	

	
	@PostMapping("/list")
	public ResponseEntity<List<ListDTO>> list(@RequestBody ListDTO dto) {
		
		log.info(dto.toString());
		
		return new ResponseEntity<>(service.todoList(dto),HttpStatus.OK);		
	}
	
	@PostMapping("/write")
	public ResponseEntity<Integer> write(@RequestBody ListDTO dto) {
		log.info(dto.toString());		
		
		return new ResponseEntity<>(service.todoWrite(dto),HttpStatus.OK);		
		
	}
	
	@PostMapping("/comple")
	public ResponseEntity<Integer> comple(@RequestBody ListDTO dto) {
		log.info(dto.toString());		
		
		return new ResponseEntity<>(service.todoComple(dto.getCompleYn(),dto.getSeqNo()),HttpStatus.OK);		
		
	}
	
	@PostMapping("/update")
	public ResponseEntity<Integer> update(@RequestBody ListDTO dto) {
		log.info(dto.toString());		
		
		return new ResponseEntity<>(service.todoUpdate(dto),HttpStatus.OK);		
		
	}
	
	@PostMapping("/delete")
	public ResponseEntity<Integer> delete(@RequestBody ListDTO dto) {
		log.info(dto.toString());		
		
		return new ResponseEntity<>(service.todoDelete(dto),HttpStatus.OK);		
		
	}	
	

	

	
	
}
