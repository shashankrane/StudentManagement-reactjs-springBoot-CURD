package com.basic.studentmanagement.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.basic.studentmanagement.module.StudentDetails;

@Repository
public interface StudentDetailsRepository extends CrudRepository<StudentDetails, Integer> {
	
	StudentDetails findById(int id);

}
