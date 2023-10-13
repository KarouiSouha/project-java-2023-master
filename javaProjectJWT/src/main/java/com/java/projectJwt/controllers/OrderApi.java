package com.java.projectJwt.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.java.projectJwt.dto.OrderRequest;
import com.java.projectJwt.models.Order;
import com.java.projectJwt.models.User;
import com.java.projectJwt.services.OrderService;
import com.java.projectJwt.services.UserService;

import jakarta.validation.Valid;
@RequestMapping("/api/v1")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class OrderApi {

	
private final OrderService orderservice;

	public OrderApi(OrderService orderservice) {
		this.orderservice=orderservice;
	}
	@Autowired
	UserService userService;
	
	@GetMapping("/orders/{userId}")
	public ResponseEntity<Object> index(@PathVariable("userId") Long userId) {
		Optional<User> user=userService.findOne(userId);
		return ResponseEntity.ok().body(user.get().getOrders());
	}
	
	
	@PostMapping("/orders/{userId}")
	public ResponseEntity<Object> create (@RequestBody OrderRequest orderRequest, @PathVariable("userId") Long userId){
		Optional<User> user=userService.findOne(userId);
		System.out.println(orderRequest);
		
		Order order = Order.builder().deliveryAddress(orderRequest
				.getDeliveryAddress())
				.paymentId(orderRequest.getPaymentId())
				.amountPaid(orderRequest.getAmountPaid())
				.user(user.get())
				.build();
		Order create = orderservice.create(order);
		
		return  ResponseEntity.ok().body(user.get().getOrders());
	}
	
	@GetMapping("/orders")
	public List<Order> show(@PathVariable Long id) {
		return orderservice.allOrder();
	}
	




	
	// DELETE
	
	@DeleteMapping("/Orders/{id}")
	public ResponseEntity<Object> delete(@PathVariable Long id) {
		orderservice.delete(id);
		return ResponseEntity.ok().build();
	}
	
	
	
}
