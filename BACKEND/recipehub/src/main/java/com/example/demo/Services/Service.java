package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;




import com.example.demo.Entity.Entity;
import com.example.demo.Repository.Repository;



@org.springframework.stereotype.Service
public class Service {
	@Autowired(required=true)
	Repository Rep;
	public Entity saveDetails(Entity e)
	{
		return Rep.save(e);
	}
	public List<Entity> getDetails(){
		return Rep.findAll();
	} 
	public Entity updateDetails(Entity e) {
		return Rep.saveAndFlush(e);
	}
	public void deleteDetails(String firstname) {
		Rep.deleteById(firstname);
		
	}
}