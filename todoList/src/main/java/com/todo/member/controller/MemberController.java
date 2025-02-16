package com.todo.member.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todo.member.model.MemberDTO;
import com.todo.member.service.MemberService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/member")
@Slf4j
public class MemberController {
	
	@Autowired
	private MemberService service;
	
	@GetMapping("/test")
	public ResponseEntity<String> test() {
		
		
		return new ResponseEntity<String>("틀린 비밀번호 입니다. 다시 입력해주세요",HttpStatus.OK);
		
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<MemberDTO> login(@RequestBody MemberDTO dto,HttpSession session) {
		
		log.info(dto.toString());
		
		//회원 정보 가져오기
		MemberDTO loginDTO = service.login(dto);
		//로그인 성공시
		if(loginDTO != null) {
			//로그인 정보 넣기
			session.setAttribute("login", loginDTO);			
			return new ResponseEntity<>(loginDTO,HttpStatus.OK);			
		} else {
			//로그인 실패시
			return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
		}
		
	}
	
	@PostMapping("/join")
	public ResponseEntity<String> join(@RequestBody MemberDTO dto) {
		log.info(dto.toString());
		
		//회원가입
		int result = service.joinMember(dto);
		//회원가입 성공시
		if(result > 0) {			
			return new ResponseEntity<String> ("성공적으로 가입하셨습니다",HttpStatus.OK);
		} else {
			//실패시
			return new ResponseEntity<String> ("가입 처리중 오류 발생 다시 확인해주세요",HttpStatus.BAD_REQUEST);
		}
		
	}	
	
	@PostMapping("/findId")
	public ResponseEntity<String> findId(@RequestBody MemberDTO dto) {
		//아이디 찾기
		String id = service.findId(dto);
		//아이디 찾기 성공시
		if(id != null && !id.equals("")) {			
			return new ResponseEntity<String> (id,HttpStatus.OK);
		} else {
			//실패시
			return new ResponseEntity<String> ("잘못된 정보입니다. 다시 입력해 주세요",HttpStatus.BAD_REQUEST);
		}
		
	}	
	
	@PostMapping("/findPw")
	public ResponseEntity<String> findPw(@RequestBody MemberDTO dto) {
		//비밀번호 찾기
		int result = service.findPw(dto);
		//비밀번호 찾기 성공시
		if(result > 0) {			
			return new ResponseEntity<String> ("비밀번호 찾기 성공",HttpStatus.OK);
		} else {
			//실패시
			return new ResponseEntity<String> ("잘못된 정보입니다. 다시 입력해 주세요",HttpStatus.BAD_REQUEST);
		}
		
	}	
	
	@PostMapping("/updatePw")
	public ResponseEntity<String> updatePw(@RequestBody MemberDTO dto) {
		//비밀번호 수정
		int result = service.updatePw(dto);
		//비밀번호 수정 성공시
		if(result > 0) {			
			return new ResponseEntity<String> ("비밀번호가 성공적으로 변경되었습니다.",HttpStatus.OK);
		} else {
			//실패시
			return new ResponseEntity<String> ("비밀번호 변경 처리중 오류가 발생 다시 확인해주세요",HttpStatus.BAD_REQUEST);
		}
		
	}	
	
	@PostMapping("/reSignMember")
	public ResponseEntity<String> reSignMember(String id) {
		//비밀번호 수정
		int result = service.reSignMember(id);  
		//비밀번호 수정 성공시
		if(result > 0) {			
			return new ResponseEntity<String> ("비밀번호가 성공적으로 변경되었습니다.",HttpStatus.OK);
		} else {
			//실패시
			return new ResponseEntity<String> ("비밀번호 변경 처리중 오류가 발생 다시 확인해주세요",HttpStatus.BAD_REQUEST);
		}
		
	}	
	
	
}
