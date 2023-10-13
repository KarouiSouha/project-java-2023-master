package com.java.projectJwt.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.java.projectJwt.models.Product;




public interface ProductRepo extends CrudRepository<Product, Long> {
	// Read All
	List<Product> findAll();
}
