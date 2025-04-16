package com.todo.member.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.member.mapper.MemberMapper;
import com.todo.member.model.MemberDTO;
import com.todo.member.service.MemberService;

@Service
public class MemberServiceImpl implements MemberService {
	
	@Autowired
	private MemberMapper mapper;

	@Override
	public MemberDTO login(MemberDTO dto) {
		return mapper.login(dto);
	}

	@Override
	public int joinMember(MemberDTO dto) {
		return mapper.joinMember(dto);
	}

	@Override
	public String findId(MemberDTO dto) {
		return mapper.findId(dto);
	}

	@Override
	public int findPw(MemberDTO dto) {
		return mapper.findPw(dto);
	}

	@Override
	public int updatePw(MemberDTO dto) {
		return mapper.updatePw(dto);
	}

	@Override
	public int reSignMember(String id) {
		return mapper.reSignMember(id);
	}

}
