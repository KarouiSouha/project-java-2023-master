package com.java.projectJwt.services;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.java.projectJwt.dto.JwtAuthenticationResponse;
import com.java.projectJwt.dto.SignInRequest;
import com.java.projectJwt.dto.SignUpRequest;
import com.java.projectJwt.models.Role;
import com.java.projectJwt.models.User;
import com.java.projectJwt.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

  private final UserRepository userRepository;
  private final UserService userService;
  private final PasswordEncoder passwordEncoder;
  private final JwtService jwtService;
  private final AuthenticationManager authenticationManager;

  public ResponseEntity<Object> signup(SignUpRequest request,BindingResult result) {
	  Optional<User> potentialUser = userRepository.findByEmail(request.getEmail());
		if(potentialUser.isPresent()) {
			result.rejectValue("email", "registerError", "Email is Taken");
		}
		// Does the entered password match the confirmation password?
		if(!request.getPassword().equals(request.getConfirm())) {
			result.rejectValue("password", "registerError", "passwords does not match");
		}
		
		if(result.hasErrors()) {
			return ResponseEntity.status(400).body(result.getAllErrors());
		}else {

		
      var user = User
                  .builder()
                  .firstName(request.getFirstName())
                  .lastName(request.getLastName())
                  .email(request.getEmail())
                  .password(passwordEncoder.encode(request.getPassword()))
                  .role(Role.ROLE_USER)
                  .build();

      user = userService.save(user);
      var jwt = jwtService.generateToken(user);
      
       return ResponseEntity.status(200).body(JwtAuthenticationResponse.builder().token(jwt).firstName(user.getFirstName()).lastName(user.getLastName()).email(user.getEmail()).id(user.getId()).build());
		}
  }


  public ResponseEntity<Object> signin(SignInRequest request) {
	  
      authenticationManager.authenticate(
              new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
      
      var user = userRepository.findByEmail(request.getEmail())
              .orElseThrow(() -> new IllegalArgumentException("Invalid email or password."));
      System.out.println(user);
      var jwt = jwtService.generateToken(user);
      
      return ResponseEntity.status(200).body(JwtAuthenticationResponse.builder().token(jwt).firstName(user.getFirstName()).lastName(user.getLastName()).email(user.getEmail()).id(user.getId()).build());
  }
  
}
