package com.cdac.projecttrackbackend.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;



@Entity
@Table(name = "Task_table")
public class Task {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private Long taskid;
	
	@ManyToOne
	@JoinColumn(name="projectid",nullable = false)
	private Projects project;
	
	@Column(name = "task_name",nullable = false)
	private String taskname;
	
	@Column(name = "task_type",nullable = false)
	private String tasktype;
	
	@Column(name = "status",nullable = false)
	private String status;
	
	@Column(name = "task_desc")
	private String taskdesc;
	
	@Column(name = "comments",nullable = false)
	private String comments;

	public Task() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Task(Long taskid, Projects project, String taskname, String tasktype, String status, String taskdesc,
			String comments) {
		super();
		this.taskid = taskid;
		this.project = project;
		this.taskname = taskname;
		this.tasktype = tasktype;
		this.status = status;
		this.taskdesc = taskdesc;
		this.comments = comments;
	}



	public Long getTaskid() {
		return taskid;
	}



	public void setTaskid(Long taskid) {
		this.taskid = taskid;
	}



	public Projects getProject() {
		return project;
	}



	public void setProject(Projects project) {
		this.project = project;
	}



	public String getTaskname() {
		return taskname;
	}



	public void setTaskname(String taskname) {
		this.taskname = taskname;
	}



	public String getTasktype() {
		return tasktype;
	}



	public void setTasktype(String tasktype) {
		this.tasktype = tasktype;
	}



	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}



	public String getTaskdesc() {
		return taskdesc;
	}



	public void setTaskdesc(String taskdesc) {
		this.taskdesc = taskdesc;
	}



	public String getComments() {
		return comments;
	}



	public void setComments(String comments) {
		this.comments = comments;
	}

}
