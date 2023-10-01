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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.projecttrackbackend.exception.ResourceNotFoundException;
import com.cdac.projecttrackbackend.models.Task;
import com.cdac.projecttrackbackend.repository.TaskDao;



@RestController
@RequestMapping("/api/v1")
public class TaskController {
	
	@Autowired
	private TaskDao taskdao;
	
	@GetMapping(path = "/bugs")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Task> getAllBugs() {
		return taskdao.findAll();
	}
	
	@PostMapping("/bugs")
	@CrossOrigin(origins = "http://localhost:3000")
	public Task createBug(@RequestBody Task bug) {
		return taskdao.save(bug);
	}
	
	@GetMapping("/bugs/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<Task> getBugById(@PathVariable Long id) {
		Task getTask = taskdao.findByTaskid(id);
		if(getTask==null)
			throw new ResourceNotFoundException("Bug does not exist" + id);
		else {
			return ResponseEntity.ok(getTask);
		}
	}
	
	@GetMapping("/projectbugs/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<List<Task>> getProjectById(@PathVariable Long id) {
		List <Task> foundProjects = taskdao.findAllByProjectProjectid(id);
		if(foundProjects==null)
			throw new ResourceNotFoundException("Task does not exist" + id);
		else {
			return ResponseEntity.ok(foundProjects);
		}
	}
	
	
	@PutMapping("/bugs/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<Task> updateTask(@PathVariable Long id,@RequestBody Task Taskdata) throws Exception{
		Task Task = taskdao.findByTaskid(id);
		if(Task==null) {
			throw new ResourceNotFoundException("Task does not exist" + id);
		}
		Task.setTaskname(Taskdata.getTaskname());
		Task.setTasktype(Taskdata.getTasktype());
		Task.setStatus(Taskdata.getStatus());
		Task.setProject(Taskdata.getProject());
		Task.setTaskdesc(Taskdata.getTaskdesc());
		Task.setComments(Taskdata.getComments());
			Task updatedTask = taskdao.save(Task);
			return ResponseEntity.ok(updatedTask);
	}
	
	@DeleteMapping("/bugs/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<Map<String, Boolean>> deleteBug(@PathVariable Long id){
		Task Task= taskdao.findByTaskid(id);
		if(Task == null)
			throw new ResourceNotFoundException("Task does not exist" + id);
		taskdao.delete(Task);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
