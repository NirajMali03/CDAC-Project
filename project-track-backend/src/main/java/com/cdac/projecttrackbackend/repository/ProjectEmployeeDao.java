package com.cdac.projecttrackbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.projecttrackbackend.models.ProjectEmployeeMapping;


@Repository
public interface ProjectEmployeeDao extends JpaRepository<ProjectEmployeeMapping, Long>{
	public List<ProjectEmployeeMapping> findAll();
	
	public ProjectEmployeeMapping findByEmpid(Long id);
}
