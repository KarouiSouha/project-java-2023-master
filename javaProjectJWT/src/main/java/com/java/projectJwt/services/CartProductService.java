package com.java.projectJwt.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.projectJwt.models.CartProduct;
import com.java.projectJwt.models.Order;
import com.java.projectJwt.models.Product;
import com.java.projectJwt.models.User;
import com.java.projectJwt.repositories.CartProductRepo;
import com.java.projectJwt.repositories.OrderRepo;
import com.java.projectJwt.repositories.ProductRepo;
import com.java.projectJwt.repositories.UserRepository;

@Service
public class CartProductService {
	@Autowired
	private CartProductRepo cartProductRepo;
	
	@Autowired
	private ProductRepo productRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	public CartProduct create(CartProduct c) {

		return cartProductRepo.save(c);
	}
	// READ ONE
			public Optional<CartProduct> findOne(Long id) {
				
				Optional<CartProduct> maybeCartProduct = cartProductRepo.findById(id);
				if(maybeCartProduct.isPresent()) {
					return maybeCartProduct;
				}else {
					return null;
				}
			}
	// UPDATE 
			public CartProduct update(CartProduct o) {

				return cartProductRepo.save(o);
			}
			
			// DELETE
			public void delete(Long id) {
				cartProductRepo.deleteById(id);
			}
}
