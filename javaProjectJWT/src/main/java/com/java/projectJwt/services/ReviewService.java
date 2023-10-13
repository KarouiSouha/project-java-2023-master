package com.java.projectJwt.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.projectJwt.models.Review;
import com.java.projectJwt.repositories.RateRepo;


@Service
public class ReviewService {
	// === CRUD ===
	
	@Autowired
	private RateRepo rateRepo;
	
	// READ ALL
		public List<Review> allReview(){
			return rateRepo.findAll();
		}
		
		// CREATE
		public Review create(Review r) {
			return rateRepo.save(r);
		}
		
		// READ ONE
		public Optional<Review> findOne(Long id) {
			
			Optional<Review> maybeReview = rateRepo.findById(id);
			if(maybeReview.isPresent()) {
				return maybeReview;
			}else {
				return null;
			}
		}
		
		// UPDATE 
		public Review update(Review r) {
			return rateRepo.save(r);
		}
		
		// DELETE
		public void delete(Long id) {
			rateRepo.deleteById(id);
		}
	
}
