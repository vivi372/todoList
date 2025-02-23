package com.todo.list.model;

import lombok.Data;

@Data
public class ListDTO {
	//일련 번호
	private String seqNo;
	//todo 제목
	private String todoName;
	//todo 메모
	private String todoMemo;
	//완료 여부
	private String compleYn;
	//등록일자
	private String regDate;
	//중요도
	private String impor;
	//시작 기간
	private String startDate;
	//종료 기간
	private String endDate;
	//아이디
	private String id;

}
