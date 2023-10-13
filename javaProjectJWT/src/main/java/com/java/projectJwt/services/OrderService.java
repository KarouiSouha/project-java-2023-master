package com.java.projectJwt.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.projectJwt.models.Order;
import com.java.projectJwt.models.Product;
import com.java.projectJwt.models.User;
import com.java.projectJwt.repositories.OrderRepo;
import com.java.projectJwt.repositories.ProductRepo;
import com.java.projectJwt.repositories.UserRepository;




@Service

public class OrderService {

	// === CRUD ===
	
	@Autowired
	private OrderRepo orderRepo;
	
	@Autowired
	private ProductRepo productRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	// READ ALL
		public List<Order> allOrder(){
			return orderRepo.findAll();
		}
		
		// CREATE
		public Order create(Order o) {

			return orderRepo.save(o);
		}
		
		// READ ONE
		public Optional<Order> findOne(Long id) {
			
			Optional<Order> maybeOrder = orderRepo.findById(id);
			if(maybeOrder.isPresent()) {
				return maybeOrder;
			}else {
				return null;
			}
		}
		
		// UPDATE 

		
		// DELETE
		public void delete(Long id) {
			orderRepo.deleteById(id);
		}
	
	
	
	
}
