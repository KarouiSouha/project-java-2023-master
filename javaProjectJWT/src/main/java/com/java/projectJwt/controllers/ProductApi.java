package com.java.projectJwt.controllers;


import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.projectJwt.models.CartProduct;
import com.java.projectJwt.models.Product;
import com.java.projectJwt.models.User;
import com.java.projectJwt.services.ProductService;
import com.java.projectJwt.services.UserService;

import jakarta.validation.Valid;



@RequestMapping("/api/v1")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductApi {
	private final ProductService productservice;
	
	public ProductApi(ProductService productservice) {
		this.productservice=productservice;
	}
	@Autowired
	UserService userService;
	@GetMapping("/products")
	public ResponseEntity<Object>  index() {
		System.out.println(productservice.allProduct().get(0).getUser().getEmail());
		return ResponseEntity.ok().body(productservice.allProduct());
	}
	  


	@PostMapping("/products/{userId}")
	public ResponseEntity<Object> createProductWithImage(@Valid @RequestBody Product product, BindingResult result,@PathVariable("userId") Long userId ) {
	    if (result.hasErrors()) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result.getAllErrors());
	    }
	    Optional<User> user=userService.findOne(userId);
	    product.setUser(user.get());
		Product savedProduct = productservice.create(product); 
		return ResponseEntity.ok("Product with ID: " + savedProduct.getId() + " created successfully.");
	}

	@GetMapping("/products/{id}")
	public Product show(@PathVariable Long id) {
		return productservice.findOne(id).orElseThrow(RuntimeException::new);
		}
	@PutMapping("/products/{id}")
	public  ResponseEntity<Object> update(@Valid @RequestBody Product product, BindingResult result,@PathVariable("id") Long id ) {
		if(result.hasErrors()) {
    		return ResponseEntity.status(400).body(result.getAllErrors());
    	}
		Product productUpdate = productservice.update(product);
	        return ResponseEntity.ok().body(productUpdate);
		}
	
	// DELETE
	
	@DeleteMapping("/products/{id}")
	public ResponseEntity<Object> delete(@PathVariable("id") Long id) {
		productservice.delete(id);
		return ResponseEntity.ok().build();
	}
	@PostMapping("/wishlist/{userId}/{productId}")
	public ResponseEntity<Object> create (@PathVariable("userId") Long userId,@PathVariable("productId") Long productId){
		
		Optional<User> user=userService.findOne(userId);
		Optional<Product> product = productservice.findOne(productId);
		user.get().getFavoriteProducts().add(product.get());
		userService.save(user.get());
		
		return  ResponseEntity.ok().body(user.get().getFavoriteProducts());
	}
	@GetMapping("/wishlist/{userId}")
	public ResponseEntity<Object> index(@PathVariable("userId") Long userId) {
		Optional<User> user=userService.findOne(userId);
		return ResponseEntity.ok().body(user.get().getFavoriteProducts());
	}
	@DeleteMapping("/wishlist/{productId}/{userId}")
	public ResponseEntity<Object> delete(@PathVariable("userId") Long userId,@PathVariable("productId") Long productId) {
		Optional<User> user=userService.findOne(userId);
		Optional<Product> product = productservice.findOne(productId);
		for (Product item : user.get().getFavoriteProducts()) 
		{ 
		    if(item.getId()==productId) {
		    	user.get().getFavoriteProducts().remove(product.get());
		    	userService.save(user.get());
		    	product.get().getUserFavorites().remove(user.get());
		    	productservice.create(product.get());
		    	break;
		    	
		    }
		    
		    
		}
			return ResponseEntity.ok().body(user.get().getFavoriteProducts());
		}
	@GetMapping("/categories")
	public ResponseEntity<Object> categories() {
		ArrayList<String> categories=new ArrayList<>();
		categories.add("Kid");
		categories.add("Men");
		categories.add("Women");
		return ResponseEntity.ok().body(categories);
				}
}
