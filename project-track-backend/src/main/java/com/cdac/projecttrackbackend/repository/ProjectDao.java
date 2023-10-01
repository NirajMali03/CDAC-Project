package com.cdac.projecttrackbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.projecttrackbackend.models.Projects;



@Repository
public interface ProjectDao extends JpaRepository<Projects, Long>{
	
	public Projects findByProjectid(Long id);
	public List<Projects> findAll();
}
