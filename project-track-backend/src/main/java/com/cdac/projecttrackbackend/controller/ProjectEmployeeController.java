package com.cdac.projecttrackbackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.projecttrackbackend.exception.ResourceNotFoundException;
import com.cdac.projecttrackbackend.models.Email;
import com.cdac.projecttrackbackend.models.Employee;
import com.cdac.projecttrackbackend.models.ProjectEmployeeMapping;
import com.cdac.projecttrackbackend.repository.EmployeeDao;
import com.cdac.projecttrackbackend.repository.ProjectEmployeeDao;



@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class ProjectEmployeeController {
	
	@Autowired
	private ProjectEmployeeDao projects;
	//@Autowired
	//private Emailutil emailutil;
	@Autowired
	private EmployeeDao employeedao;
	
	
	@GetMapping("/projsemps")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<ProjectEmployeeMapping> getAllProjects() {
		return projects.findAll();
	}
	
	@PostMapping("/projsemps")
	@CrossOrigin(origins = "http://localhost:3000")
	public  String assignDeveloper( @RequestBody ProjectEmployeeMapping projectemps) {
		ProjectEmployeeMapping project = projects.save(projectemps);
		 String msg;
		if(project == null)
			msg= " Failed to assign project";
		else {
			 long empid = project.getEmpid();
			 Employee employee= employeedao.findByEmpid((int)empid);
			 Email email = new Email();
			 email.setDestEmail(employee.getEmail());
			 email.setSubject("You are assigned new bug");
			 email.setMessage("Project Manager has assigned bugs to you");
			// emailutil.sendEmail(email);
			 msg = "Project has been assigned";
		}
			
		return msg;
		
	}
	
	@GetMapping("/projsemps/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity <ProjectEmployeeMapping> findEmployeeProject(@PathVariable Long id){
		ProjectEmployeeMapping getEmp = projects.findByEmpid(id);
		if(getEmp==null)
			throw new ResourceNotFoundException("Employee does not exist" + id);
		else {
			return ResponseEntity.ok(getEmp);
		}
	}
	
	@DeleteMapping("/projsemps/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<Map<String, Boolean>> deleteBug(@PathVariable Long id){
		ProjectEmployeeMapping project = projects.findByEmpid(id);
		if(project == null)
			throw new ResourceNotFoundException("Bug does not exist" + id);
		projects.delete(project);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
