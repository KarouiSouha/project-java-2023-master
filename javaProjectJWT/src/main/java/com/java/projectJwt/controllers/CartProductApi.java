package com.java.projectJwt.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
import com.java.projectJwt.services.CartProductService;
import com.java.projectJwt.services.ProductService;
import com.java.projectJwt.services.UserService;

@RequestMapping("/api/v1")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CartProductApi {
	@Autowired
	CartProductService cartProductService;
	@Autowired
	UserService userService;
	@Autowired
	ProductService productService;
	
	@GetMapping("/cart/{userId}")
	public ResponseEntity<Object> index(@PathVariable("userId") Long userId) {
		Optional<User> user=userService.findOne(userId);
		return ResponseEntity.ok().body(user.get().getProductInCart());
	}
	
	
	@PostMapping("/cart/{userId}/{productId}")
	public ResponseEntity<Object> create (@PathVariable("userId") Long userId,@PathVariable("productId") Long productId){
		
		Optional<User> user=userService.findOne(userId);
		Optional<Product> product = productService.findOne(productId);
		CartProduct cartproduct=new CartProduct(product.get(),1,user.get());
		CartProduct create = cartProductService.create(cartproduct);
		
		return  ResponseEntity.ok().body(user.get().getProductInCart());
	}

	


	@DeleteMapping("/cart/{productId}/{userId}")
	public ResponseEntity<Object> delete(@PathVariable("userId") Long userId,@PathVariable("productId") Long productId) {
		Optional<User> user=userService.findOne(userId);
		Optional<Product> product = productService.findOne(productId);
		for (CartProduct item : user.get().getProductInCart()) 
		{ 
		    if(item.getProduct().getId()==productId) {
		    	item.setUser(null);
		    	userService.save(user.get());
		    	item.setProduct(null);
		    	productService.update(product.get());
		    	CartProduct cartProductUpdate=cartProductService.update(item);
		    	cartProductService.delete(item.getId());
		    	user.get().getProductInCart().remove(item);
		    	break;
		    	
		    }
		    
		}
			return ResponseEntity.ok().body(user.get().getProductInCart());
		}
	@PutMapping("/cart/{userId}/{productId}")
	public ResponseEntity<Object> update(@PathVariable("userId") Long userId,@PathVariable("productId") Long productId,@RequestBody Object action) {
		Optional<User> user=userService.findOne(userId);
		for (CartProduct item : user.get().getProductInCart()) 
		{ 
		    if(item.getProduct().getId()==productId) {
		    	if (action.toString().charAt(14)=='i') {
		    		item.setQty(item.getQty()+1);
		    	}
		    	else if (action.toString().charAt(14)=='d') {
		    		item.setQty(item.getQty()-1);
		    	}
		    	CartProduct cartProductUpdate=cartProductService.update(item);
		    	break;
		    	
		    }
		}
			return ResponseEntity.ok().body(user.get().getProductInCart());
		}

	@DeleteMapping("/cart/clearCart/{userId}")
	public ResponseEntity<Object> delete(@PathVariable("userId") Long userId) {
		Optional<User> user=userService.findOne(userId);
		
		
	for (CartProduct item : user.get().getProductInCart()) 
	{ 
		Product product=item.getProduct();
	   item.setProduct(null);
	    productService.update(product);
	   item.setUser(null);
	   userService.update(user.get()); 
	   cartProductService.delete(item.getId());
	    }
    
	
			return ResponseEntity.ok().body(user.get().getProductInCart());
		}
//	

}
