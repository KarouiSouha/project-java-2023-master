package com.java.projectJwt.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.projectJwt.models.Role;
import com.java.projectJwt.models.User;
import com.java.projectJwt.services.UserService;

import jakarta.validation.Valid;
@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserApi {

	
	private final UserService userservice;

	public UserApi(UserService userservice) {
		this.userservice = userservice;
	}
	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/")
	public ResponseEntity<Object> index() {
		return ResponseEntity.ok().body(userservice.allUser());
	}
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	@GetMapping("/{id}")
	public User show(@PathVariable Long id) {
		return userservice.findOne(id).orElseThrow(RuntimeException::new);
	}
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	@PutMapping("/{id}")
	public ResponseEntity<Object> update(@Valid @RequestBody User user, BindingResult result,
			@PathVariable("id") Long id) {
		if (id==1) {
			return ResponseEntity.status(400).body("can't update");
		}
		if (result.hasErrors()) {
			return ResponseEntity.status(400).body(result.getAllErrors());

		} else {
			user.setId(id);
			user.setRole(Role.ROLE_USER);
			User updateUser = userservice.update(user);
			return ResponseEntity.ok().body(updateUser);
		}
	}

	// DELETE
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	@DeleteMapping("/{id}")
	public ResponseEntity<Object> delete(@PathVariable("id") Long id) {
		userservice.delete(id);
		return ResponseEntity.ok().build();
	}
}
