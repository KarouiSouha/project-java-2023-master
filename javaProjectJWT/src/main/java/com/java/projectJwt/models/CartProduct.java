package com.java.projectJwt.models;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "cart_products")
public class CartProduct {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product product;
	Integer qty;
	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User user;
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
	private Order order;

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
	public CartProduct(Product product, Integer qty, User user) {

		this.product = product;
		this.qty = qty;
		this.user = user;
	}
	  
}
