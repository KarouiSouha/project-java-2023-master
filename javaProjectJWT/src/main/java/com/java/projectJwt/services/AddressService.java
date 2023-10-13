package com.java.projectJwt.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.projectJwt.models.Address;
import com.java.projectJwt.models.User;
import com.java.projectJwt.repositories.AddressRepo;
import com.java.projectJwt.repositories.UserRepository;

@Service
public class AddressService {
	// === CRUD ===
	
	@Autowired
	private AddressRepo addressRepo;
	@Autowired
	private UserRepository userRepo;
	
	// READ ALL
		public List<Address> allAddress(){
			return (List<Address>) addressRepo.findAll();
		}
		
		// CREATE
		public Address create(Address p) {

			return addressRepo.save(p);
		}
		
		// READ ONE
		public Optional<Address> findOne(Long id) {
			
			Optional<Address> maybeAddress = addressRepo.findById(id);
			if(maybeAddress.isPresent()) {
				return maybeAddress;
			}else {
				return null;
			}
		}
		
		// UPDATE 
		public Address update(Address p) {
			return addressRepo.save(p);
		}
		
		// DELETE
		public void delete(Long id) {
			addressRepo.deleteById(id);
		}
	
}

