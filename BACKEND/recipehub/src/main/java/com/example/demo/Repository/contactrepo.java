package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.contactentity;

public interface contactrepo extends JpaRepository<contactentity,String>{

	
  
}