package com.cdac.projecttrackbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.projecttrackbackend.models.Employee;


@Repository
public interface EmployeeDao extends JpaRepository<Employee, Integer> {
	
	
	
	public Employee findByEmail(String email);
	public Employee findByEmailAndSecurityQuesAndSecurityAns(String email,String securityQues,String securityAns);
	
	
	//validate user with valid email and password
	public Employee findByEmailAndPassword(String email,String password);
	
	public Employee findByEmpid(int id);

	@Override
	public List<Employee> findAll();
	

	
}
