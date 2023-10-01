package com.cdac.projecttrackbackend.controller;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.supercsv.io.CsvBeanWriter;
import org.supercsv.io.ICsvBeanWriter;
import org.supercsv.prefs.CsvPreference;

import com.cdac.projecttrackbackend.exception.ResourceNotFoundException;
import com.cdac.projecttrackbackend.models.Employee;
import com.cdac.projecttrackbackend.repository.EmployeeDao;
import com.cdac.projecttrackbackend.service.EmployeeService;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	@Autowired
	private EmployeeDao employeedao;
	
	@Autowired
	private EmployeeService empService;
	
	//@Autowired
	//private MailService mailService;
	
	
	@PostMapping("/forget")
	public Employee forgetPassword(@RequestBody Employee emp){
		System.out.println("in forget ......"+emp.getEmail());
		return empService.forgetPassword(emp.getEmail(), emp.getSecurityQues(), emp.getSecurityAns());
	}
	
	
	@PostMapping("/findbyemail")
	public Employee findByEmail(@RequestBody Employee emp) {
		return empService.findByEmail(emp.getEmail());
	}
	
	
	
	@PutMapping("/updatepassword")
	public Employee updatePassword(@RequestBody Employee emp) {
		return empService.updatePassword(emp);
	}

	@GetMapping("/employees")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Employee> getAllEmployees(){
		return employeedao.findAll();
	}
	
	@GetMapping("/employees/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public Employee getEmployee(@PathVariable int id) {
		return employeedao.findByEmpid(id);
	}
	
	@PostMapping("/employees")
	@CrossOrigin(origins = "http://localhost:3000")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeedao.save(employee);
	}
	
	@PutMapping("/employees/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<Employee> updateEmp(@PathVariable int id,@RequestBody Employee employeedata) throws Exception{
		Employee emp = employeedao.findByEmpid(id);
		if(emp==null) {
			throw new ResourceNotFoundException("Task does not exist" + id);
		}
			emp.setEmail(employeedata.getEmail());
			emp.setPassword(employeedata.getPassword());
			emp.setFirstName(employeedata.getFirstName());
			emp.setLastName(employeedata.getLastName());
			emp.setRole(employeedata.getRole());
			emp.setSecurityAns(employeedata.getSecurityAns());
			emp.setSecurityQues(employeedata.getSecurityQues());
			
			Employee updatedemp = employeedao.save(emp);
			return ResponseEntity.ok(updatedemp);
			
	}
	

	
}