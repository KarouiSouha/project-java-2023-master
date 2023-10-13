package com.java.projectJwt.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.java.projectJwt.models.Order;




public interface OrderRepo extends CrudRepository< Order, Long> {
	// Read All
	List<Order> findAll();
}
