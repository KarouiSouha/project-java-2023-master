package com.java.projectJwt.dto;

import java.util.ArrayList;
import java.util.List;

import com.java.projectJwt.models.Address;
import com.java.projectJwt.models.CartProduct;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequest {
	private Float amountPaid;
 	private String paymentId;
 	private List<CartProduct> orderedProducts=new ArrayList<>();
 	private Address deliveryAddress;
}
