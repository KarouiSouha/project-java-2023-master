package com.java.projectJwt.repositories;

import org.springframework.data.repository.CrudRepository;

import com.java.projectJwt.models.CartProduct;

public interface CartProductRepo extends CrudRepository<CartProduct, Long> {

}
