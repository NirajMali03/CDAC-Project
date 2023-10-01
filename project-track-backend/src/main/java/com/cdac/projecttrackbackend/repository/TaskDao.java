package com.cdac.projecttrackbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.projecttrackbackend.models.Task;


@Repository
public interface TaskDao extends JpaRepository<Task, Long> {

	public Task findByTaskid(Long id);
	
	public List<Task> findAllByProjectProjectid(Long id);
}