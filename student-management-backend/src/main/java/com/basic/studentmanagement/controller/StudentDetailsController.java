package com.basic.studentmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.basic.studentmanagement.module.StudentDetails;
import com.basic.studentmanagement.service.StudentDetailsService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class StudentDetailsController {
	
	@Autowired
	StudentDetailsService studentDetailsService;
	
	@PostMapping("/student_management")
	public StudentDetails saveStudentDetails(@RequestBody StudentDetails studentDetails) {
		 StudentDetails students = studentDetailsService.saveStudentDetails(studentDetails);
		return students;
	}
	
	@GetMapping("/student_management")
	public List<StudentDetails> getAllStudentDetails(){
	 List<StudentDetails> students = studentDetailsService.getAllStudentDetails();
	return students;
	
			
	}
	
	@GetMapping("/student_management/{id}")
	public StudentDetails getById(@PathVariable int id) {
		StudentDetails students = studentDetailsService.getById(id);
		return students;
	}
	
	@PutMapping("/student_management")
	public StudentDetails updateStudent( @RequestBody StudentDetails studentDetails) {
		StudentDetails student = studentDetailsService.updateStudent(studentDetails);
		return student;
	}
	
	@DeleteMapping("/student_management/{id}")
	public void deleteById(@PathVariable int id) {
		studentDetailsService.deleteById(id);
	}
	
	@DeleteMapping("/student_management")
	public void deleteAll() {
		studentDetailsService.deleteAll();   
	}
	
}
