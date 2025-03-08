package com.todo.list.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.todo.list.mapper.ListMapper;
import com.todo.list.model.ListDTO;
import com.todo.list.service.ListService;

@Service
public class ListServiceImpl implements ListService {
	
	@Autowired
	private ListMapper mapper;
	
	//투두리스트 출력
	@Override
	public List<ListDTO> todoList(ListDTO dto) {
		return mapper.todoList(dto);
	}
	
	//투두 작성
	@Override
	@Transactional
	public int todoWrite(ListDTO dto) {
		//등록하려는 todo의 중요도에 따라 실행
		if(dto.getImpor() != null || dto.getImpor().equals("")) {
			//중요도 존재하는 todo일 경우 해당 다른 todo의 중요도를 밀기
			Map<String, String> map = new HashMap<>();
			
			map.put("impor", dto.getImpor());
			map.put("id", dto.getId());
			
			mapper.todoPush(map);
		}
		
		return mapper.todoWrite(dto);
	}
	
	//todo 완료 또는 완료 취소
	@Override
	public int todoComple(String compleYn,String seqNo) {
		//mapper에 넣을 MAP 생성
		Map<String, String> map = new HashMap<>();
		
		//들어온 완료 여부의 반대로 입력
		if(compleYn.equals("Y")) {
			compleYn = "N";
		} else {
			compleYn = "Y";			
		}
		
		map.put("compleYn", compleYn);
		map.put("seqNo", seqNo);
		
		return mapper.todoComple(map);
	}
	
	//todo 수정
	@Override
	@Transactional
	public int todoUpdate(ListDTO dto) {
		Map<String, String> map = new HashMap<>();
		//수정하려는 todo의 중요도에 따라 실행
		if((dto.getImpor() != null || dto.getImpor().equals(""))&&
				(dto.getBeforeimpor() != null || dto.getBeforeimpor().equals(""))) {
			//중요도와 이전 중요도 둘다 존재하는 todo일 경우
			//이전 중요도와 비교하여 중요도를 당기기			
			map.put("impor", dto.getBeforeimpor());
			map.put("id", dto.getId());			
			
			mapper.todoPull(map);
			
			//그 후 옮길 중요도와 비교하여 중요도 밀기
			map.put("impor", dto.getImpor());
			
			mapper.todoPush(map);
		} else if(dto.getImpor() != null || dto.getImpor().equals("")) {
			//이전 중요도는 없고 옮길 중요도만 존재하는 경우
			//옮길 중요도와 비교하여 중요도 밀기
			map.put("impor", dto.getImpor());
			map.put("id", dto.getId());			
			
			mapper.todoPush(map);
		} else if(dto.getBeforeimpor() != null || dto.getBeforeimpor().equals("")) {
			//옮길 중요도는 없고 이전 중요도만 존재하는 경우
			//옮길 중요도와 비교하여 중요도 당기기
			map.put("impor", dto.getBeforeimpor());
			map.put("id", dto.getId());			
			
			mapper.todoPull(map);
		} 
		
		return mapper.todoUpdate(dto);
	}
	
	//todo 삭제
	@Override
	@Transactional
	public int todoDelete(ListDTO dto) {
		//등록하려는 todo의 중요도에 따라 실행
		if(dto.getBeforeimpor() != null || dto.getBeforeimpor().equals("")) {
			//이전 중요도 존재하는 todo일 경우 해당 다른 todo의 중요도를 당기기
			Map<String, String> map = new HashMap<>();
			
			map.put("impor", dto.getBeforeimpor());
			map.put("id", dto.getId());
			
			mapper.todoPull(map);
		}
		
		return mapper.todoDelete(Integer.parseInt(dto.getSeqNo()));
	}



}
