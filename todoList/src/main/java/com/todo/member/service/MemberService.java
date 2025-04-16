package com.todo.member.service;

import com.todo.member.model.MemberDTO;

public interface MemberService {
	//로그인
	public MemberDTO login(MemberDTO dto);
	
	//회원 가입
	public int joinMember(MemberDTO dto);
	
	//아이디 찾기
	public String findId(MemberDTO dto);
	
	//비밀번호 찾기
	public int findPw(MemberDTO dto);
	
	//비밀번호 변경
	public int updatePw(MemberDTO dto);
	
	//회원 탈퇴
	public int reSignMember(String id);
}
