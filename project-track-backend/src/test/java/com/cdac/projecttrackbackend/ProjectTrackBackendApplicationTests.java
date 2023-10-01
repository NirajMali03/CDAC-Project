package com.cdac.projecttrackbackend;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cdac.projecttrackbackend.models.Employee;
import com.cdac.projecttrackbackend.models.Projects;
import com.cdac.projecttrackbackend.repository.EmployeeDao;
import com.cdac.projecttrackbackend.repository.ProjectDao;

@SpringBootTest
class ProjectTrackBackendApplicationTests {
	
	
	@Autowired
	private EmployeeDao employeedao;
	@Autowired
	private ProjectDao projectdao;
	
	private Calculator c = new Calculator();

	@Test
	void test_sum()
	{
		int expectedResult = 6;
		int actResult = c.do_Sum(1, 2, 3);
		
		assertThat(expectedResult).isEqualTo(actResult);
	}
	@Test
	void test_Multiply()
	{
		int expected_result = 6;
		int actual_Result = c.do_MUltiply(3, 2);
		assertThat(expected_result).isEqualTo(actual_Result);
		
	}
	
	@Test
	void getEmpByIdTest()
	{
		Employee employee = employeedao.findByEmpid(1);
		assertThat(employee.getEmpid()).isEqualTo(1);
	}
	@Test
	void getEmpByEmailTest()
	{
		Employee employee = employeedao.findByEmail("ganesh@gmail.com");
		assertThat(employee.getEmail()).isEqualTo("ganesh@gmail.com");
	}
	@Test 
	void getListOfEmployeeTest()
	{
		List<Employee> employee = employeedao.findAll();
		assertThat(employee.size()).isGreaterThan(0);
	}
	@Test
	void findByEmailAndPasswordTest()
	{
		Employee employee = employeedao.findByEmailAndPassword("ganesh@gmail.com", "Ganesh@123");
		assertThat(employee.getEmail()).isEqualTo("ganesh@gmail.com");
	}
	@Test 
	void getListOfProjectTest()
	{
		List<Projects> projects = projectdao.findAll();
		assertThat(projects.size()).isGreaterThan(0);
	}
}
