package com.todo.list.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.todo.list.model.ListDTO;

@Repository
@Mapper
public interface ListMapper {
	
	//투두리스트 출력
	public List<ListDTO> todoList(ListDTO dto);
	
	//투두 작성
	public int todoWrite(ListDTO dto);
	
	//todo 완료 또는 완료 취소
	public int todoComple(Map<String, String> map);
	
	//todo 수정
	public int todoUpdate(ListDTO dto);
	
	//todo 중요도 하나씩 뒤로 미루기
	public int todoInc(Map<String, String> map);
	
	//todo 삭제
	public int todoDelete(ListDTO dto);
	


}
