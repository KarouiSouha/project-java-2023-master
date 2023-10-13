package com.java.projectJwt.services;

import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.java.projectJwt.models.User;
import com.java.projectJwt.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

  private final UserRepository userRepository;

  public UserDetailsService userDetailsService() {
      return new UserDetailsService() {
          @Override
          public UserDetails loadUserByUsername(String username) {
              return userRepository.findByEmail(username)
                      .orElseThrow(() -> new UsernameNotFoundException("User not found"));
          }
      };
  }

  public User save(User newUser) {
    
    return userRepository.save(newUser);
  }
  
  
  
  public Optional<User> findOne(Long id) {
  	Optional<User> maybeUser = userRepository.findById(id);
  	if(maybeUser.isPresent()) {
  		return maybeUser;
  	} else {
  		return null;
  	}
  }


 // READ ALL
 	public List<User> allUser(){
 		return userRepository.findAll();
 	}
 	
 	
 	// UPDATE 
 	public User update(User o) {
 		// Hash and set password, save the user to database
 		String hashdPW = BCrypt.hashpw(o.getPassword(), BCrypt.gensalt());
 		o.setPassword(hashdPW);
 		return userRepository.save(o);
 	}
 	
 	// DELETE
 	public void delete(Long id) {
 		userRepository.deleteById(id);
 	}
  }

