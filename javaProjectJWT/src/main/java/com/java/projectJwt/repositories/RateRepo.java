package com.java.projectJwt.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.java.projectJwt.models.Review;


public interface RateRepo extends CrudRepository<Review, Long> {
	// Read All
	List<Review> findAll();
}
