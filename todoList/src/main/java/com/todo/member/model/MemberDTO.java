package com.todo.member.model;

import lombok.Data;

@Data
public class MemberDTO {
	//아이디
	private String id;
	//비밀번호
	private String pw;
	//이름
	private String name;
	//찾기 질문
	private String findQuest;
	//찾기 답변
	private String findAnsw;
	//탈퇴 여부
	private String resignYn;

}
