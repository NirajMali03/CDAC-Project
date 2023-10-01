package com.cdac.projecttrackbackend.service;

import org.springframework.stereotype.Service;

import com.cdac.projecttrackbackend.models.Employee;


@Service
public interface EmployeeService  {

	public Employee findByEmail(String email);
	
	public Employee getUMemberByEmailAndPassword(String email,String password);
	
	
	public Employee forgetPassword(String email,String securityQues,String securityAns);
	
	public Employee updatePassword(Employee member);
	
}
