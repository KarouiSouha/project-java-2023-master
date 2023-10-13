package com.java.projectJwt.models;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User implements UserDetails {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  Long id;
  @NotEmpty(message="firstName is required!")
  @Size(min=3, max=30, message="FirstName must be between 3 and 30 characters")
  String firstName;
  @NotEmpty(message="LastName is required!")
  @Size(min=3, max=30, message="LastName must be between 3 and 30 characters")
  String lastName;
  @NotEmpty(message="Email is required!")
  @Email(message="Please enter a valid email!")
  @Column(unique = true)
  String email;
  @NotEmpty(message="Password is required!")
  @Size(min=8, max=128, message="Password must be between 8 and 128 characters")
  String password;


  @Enumerated(EnumType.STRING)
  Role role;

  
  
  
	// 1:M
  @Builder.Default
  	@JsonIgnore
	@OneToMany(mappedBy="user", fetch = FetchType.LAZY)
	private List<Product> products=new ArrayList<>();
 

	
	// 1:M
  @Builder.Default
  	@JsonIgnore
	@OneToMany(mappedBy="user", fetch = FetchType.LAZY)
	private List<Order> orders=new ArrayList<>();    
  @Builder.Default
  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(
  		name = "favoritesUsers", 
  		joinColumns = @JoinColumn(name = "user_id"), 
  		inverseJoinColumns = @JoinColumn(name="product_id"))
  private List <Product> favoriteProducts=new ArrayList<>();
  @Builder.Default
  	@OneToMany(mappedBy="user", fetch = FetchType.LAZY)
    private List<CartProduct> productInCart=new ArrayList<>();
  
  @Builder.Default
	@OneToMany(mappedBy="user", fetch = FetchType.LAZY)
  private List<Address> address=new ArrayList<>();
  
  
  
  
  @Column(updatable=false)
  @DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createdAt;
	
  @DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updatedAt;
  
//	----- methods ---
  // other getters and setters removed for brevity
  @PrePersist
  protected void onCreate(){
      this.createdAt = new Date();
  }
  @PreUpdate
  protected void onUpdate(){
      this.updatedAt = new Date();
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
      return List.of(new SimpleGrantedAuthority(role.name()));
  }

  @Override
  public String getUsername() {
      // our "username" for security is the email field
      return email;
  }

  @Override
  public boolean isAccountNonExpired() {
      return true;
  }

  @Override
  public boolean isAccountNonLocked() {
      return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
      return true;
  }

  @Override
  public boolean isEnabled() {
      return true;
  }
public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}

public String getFirstName() {
	return firstName;
}
public void setFirstName(String firstName) {
	this.firstName = firstName;
}
public String getLastName() {
	return lastName;
}
public void setLastName(String lastName) {
	this.lastName = lastName;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public Role getRole() {
	return role;
}
public void setRole(Role role) {
	this.role = role;
}
public List<Product> getProducts() {
	return products;
}
public void setProducts(List<Product> products) {
	this.products = products;
}
public List<Order> getOrders() {
	return orders;
}
public void setOrders(List<Order> orders) {
	this.orders = orders;
}

public List<CartProduct> getProductInCart() {
	return productInCart;
}
public void setProductInCart(List<CartProduct> productInCart) {
	this.productInCart = productInCart;
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
public List<Product> getFavoriteProducts() {
	return favoriteProducts;
}
public void setFavoriteProducts(List<Product> favoriteProducts) {
	this.favoriteProducts = favoriteProducts;
}
public List<Address> getAddress() {
	return address;
}
public void setAddress(List<Address> address) {
	this.address = address;
}

}
