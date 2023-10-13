package com.java.projectJwt.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.projectJwt.dto.JwtAuthenticationResponse;
import com.java.projectJwt.dto.SignInRequest;
import com.java.projectJwt.dto.SignUpRequest;
import com.java.projectJwt.services.AuthenticationService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/signup")
    public ResponseEntity<Object> signup(@Valid @RequestBody SignUpRequest request,BindingResult result) {

		if (result.hasErrors()) {
			return  ResponseEntity.status(400).body(result.getAllErrors());
		}
    	return authenticationService.signup(request,result);
    }

    @PostMapping("/signin")
    public ResponseEntity<Object> signin(@Valid @RequestBody SignInRequest request,BindingResult result) {
    	
    	if (result.hasErrors()) {
			System.out.println(result.getAllErrors());
			return  ResponseEntity.status(400).body(result.getAllErrors());
		}
        return authenticationService.signin(request);
    }
    
}