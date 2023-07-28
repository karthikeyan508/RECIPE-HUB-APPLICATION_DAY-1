package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.loginentity;

public interface loginrepo extends JpaRepository<loginentity,String>{

	
  
}