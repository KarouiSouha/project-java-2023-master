package com.java.projectJwt.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="orders")
public class Order {
	// MEMBER VARIABLES
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    
	 	private Float amountPaid;
	 	private String paymentId;
	 	
	 	@Builder.Default
		@OneToMany(mappedBy="order", fetch = FetchType.LAZY)
	    private List<CartProduct> orderedProducts=new ArrayList<>();
	 	
	 	@ManyToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name = "order_id")
		private Address deliveryAddress;
		
		
		@JsonIgnore
		@ManyToOne(fetch = FetchType.LAZY)
		@JoinColumn(name="user_id")
		private User user;


	    @Column(updatable=false)
	    @DateTimeFormat(pattern="yyyy-MM-dd")
		private Date createdAt;
		
	    @DateTimeFormat(pattern="yyyy-MM-dd")
		private Date updatedAt;
	    
//		----- methods ---
	    // other getters and setters removed for brevity
	    @PrePersist
	    protected void onCreate(){
	        this.createdAt = new Date();
	    }
	    @PreUpdate
	    protected void onUpdate(){
	        this.updatedAt = new Date();
	    }

		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}

		
		public Float getAmountPaid() {
			return amountPaid;
		}
		public void setAmountPaid(Float amountPaid) {
			this.amountPaid = amountPaid;
		}
		public Address getDeliveryAddress() {
			return deliveryAddress;
		}
		public void setDeliveryAddress(Address deliveryAddress) {
			this.deliveryAddress = deliveryAddress;
		}
		public String getPaymentId() {
			return paymentId;
		}
		public void setPaymentId(String paymentId) {
			this.paymentId = paymentId;
		}
		public User getUser() {
			return user;
		}
		public void setUser(User user) {
			this.user = user;
		}

		public Date getCreatedAt() {
			return createdAt;
		}
		public void setCreatedAt(Date createdAt) {
			this.createdAt = createdAt;
		}
		public Date getUpdatedAt() {
			return updatedAt;
		}
		public void setUpdatedAt(Date updatedAt) {
			this.updatedAt = updatedAt;
		}
		public List<CartProduct> getOrderedProducts() {
			return orderedProducts;
		}
		public void setOrderedProducts(List<CartProduct> orderedProducts) {
			this.orderedProducts = orderedProducts;
		}
		
	
}
