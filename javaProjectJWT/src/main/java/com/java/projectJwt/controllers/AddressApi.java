package com.java.projectJwt.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.projectJwt.models.Address;
import com.java.projectJwt.models.Product;
import com.java.projectJwt.models.User;
import com.java.projectJwt.services.AddressService;
import com.java.projectJwt.services.OrderService;
import com.java.projectJwt.services.UserService;

import jakarta.validation.Valid;
@RequestMapping("/api/v1")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AddressApi {
@Autowired
private AddressService addressSercice;
@Autowired
UserService userService;

@GetMapping("/address/{userId}")
public ResponseEntity<Object> index(@PathVariable("userId") Long userId) {
	Optional<User> user=userService.findOne(userId);
	return ResponseEntity.ok().body(user.get().getAddress());
}
@PostMapping("/address/{userId}")
public ResponseEntity<Object> create (@RequestBody Address address,@PathVariable("userId") Long userId){
	
	Optional<User> user=userService.findOne(userId);
	System.out.println(user.get().getId());
	address.setUser(user.get());
	addressSercice.create(address);
	
	return  ResponseEntity.ok().body(user.get().getAddress());
}
@DeleteMapping("address/{addressid}")

public ResponseEntity<Object> delete(@PathVariable("addressid") Long addressId) {
	Optional<Address> address = addressSercice.findOne(addressId);
	User user= address.get().getUser();
	address.get().setUser(null);
	address.get().setOrders(null);
	addressSercice.delete(addressId);
	User userUpdated=userService.update(user);
	
	    
		return ResponseEntity.ok().body(userUpdated.getAddress());
	}
}
