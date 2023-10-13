package com.java.projectJwt.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.projectJwt.models.Product;
import com.java.projectJwt.models.User;
import com.java.projectJwt.repositories.ProductRepo;
import com.java.projectJwt.repositories.UserRepository;

@Service
public class ProductService {
	// === CRUD ===
	
	@Autowired
	private ProductRepo productRepo;
	@Autowired
	private UserRepository userRepo;
	
	// READ ALL
		public List<Product> allProduct(){
			return productRepo.findAll();
		}
		
		// CREATE
		public Product create(Product p) {

			return productRepo.save(p);
		}
		
		// READ ONE
		public Optional<Product> findOne(Long id) {
			
			Optional<Product> maybeProduct = productRepo.findById(id);
			if(maybeProduct.isPresent()) {
				return maybeProduct;
			}else {
				return null;
			}
		}
		
		// UPDATE 
		public Product update(Product p) {
			return productRepo.save(p);
		}
		
		// DELETE
		public void delete(Long id) {
			productRepo.deleteById(id);
		}
	
}
