package com.cdac.projecttrackbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.projecttrackbackend.models.Employee;
import com.cdac.projecttrackbackend.repository.EmployeeDao;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeDao empdao;
	

	

	@Override
	public Employee forgetPassword(String email, String securityQues, String securityAns) {
		
		return empdao.findByEmailAndSecurityQuesAndSecurityAns(email, securityQues, securityAns);
	}

	@Override
	public Employee updatePassword(Employee member) {
		System.out.println("in update password");
		// TODO Auto-generated method stub
		Employee m = empdao.findByEmail(member.getEmail());
		m.setPassword(member.getPassword());
		return empdao.save(member);
	}

	@Override
	public Employee findByEmail(String email) {
		// TODO Auto-generated method stub
		return empdao.findByEmail(email);
	}

	@Override
	public Employee getUMemberByEmailAndPassword(String email, String password) {
		// TODO Auto-generated method stub
		return empdao.findByEmailAndPassword(email, password);
	}

}
