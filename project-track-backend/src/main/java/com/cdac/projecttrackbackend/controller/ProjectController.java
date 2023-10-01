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
import com.cdac.projecttrackbackend.models.Projects;
import com.cdac.projecttrackbackend.repository.ProjectDao;



@RestController
@RequestMapping("/api/v1")
public class ProjectController {
	@Autowired
	private ProjectDao projectdao;
	
	@GetMapping("/projects")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Projects> getAllProjects(){
		return projectdao.findAll();
	}
	
	@PostMapping("/projects")
	@CrossOrigin(origins = "http://localhost:3000")
	public Projects createProject(@RequestBody Projects project) {
		return projectdao.save(project);
	}
	
	@DeleteMapping("/projects/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<Map<String, Boolean>> deleteBug(@PathVariable Long id){
		Projects project = projectdao.findByProjectid(id);
		if(project == null)
			throw new ResourceNotFoundException("Bug does not exist" + id);
		projectdao.deleteById(id);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/projects/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public Projects getProjectById(@PathVariable Long id) {
		return projectdao.findByProjectid(id);
	}
}
