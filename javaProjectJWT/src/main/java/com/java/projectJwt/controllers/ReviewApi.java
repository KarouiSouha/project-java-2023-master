package com.java.projectJwt.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.java.projectJwt.models.Review;
import com.java.projectJwt.services.ReviewService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ReviewApi {
	private final ReviewService reviewservice;

	public ReviewApi(ReviewService reviewservice) {
		this.reviewservice = reviewservice;
	}

	@GetMapping("/api/Review")
	public ResponseEntity<Object> index() {

		return ResponseEntity.ok().body(reviewservice.allReview());
	}

	@PostMapping( "/api/Review")
	public ResponseEntity<Object>  create(@Valid @RequestBody Review review, BindingResult result) {
		if(result.hasErrors()) {
    		System.out.println(result.getAllErrors());
    		return ResponseEntity.status(400).body(result.getAllErrors());
    	}
		Review create = reviewservice.create(review);
        return ResponseEntity.ok().body(create);
	}

	@GetMapping("/api/Review/{id}")
	public Review show(@PathVariable Long id) {
		

		return reviewservice.findOne(id).orElseThrow(RuntimeException::new);
	}

	@PutMapping("/api/Review/{id}")
	public ResponseEntity<Object>  update(@PathVariable("id") Long id, @Valid @RequestBody Review review, BindingResult result) {
    	if(result.hasErrors()) {
    		return ResponseEntity.status(400).body(result.getAllErrors());
    	}

    	 Review reviewUpdate = reviewservice.update(review);
         return ResponseEntity.ok().body(reviewUpdate);
		}
	

	// DELETE

	@DeleteMapping("/api/Review/{id}")
	public ResponseEntity<Object> delete(@PathVariable("id") Long id) {
		reviewservice.delete(id);
		return  ResponseEntity.ok().build();
	}

}
