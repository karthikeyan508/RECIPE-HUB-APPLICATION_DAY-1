package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;




import com.example.demo.Entity.recipeentity;
import com.example.demo.Repository.reciperepo;



@org.springframework.stereotype.Service
public class recipeservice {
	@Autowired(required=true)
	reciperepo Rep;
	public recipeentity saveDetails(recipeentity e)
	{
		return Rep.save(e);
	}
	public List<recipeentity> getDetails(){
		return Rep.findAll();
	} 
	public recipeentity updateDetails(recipeentity e) {
		return Rep.saveAndFlush(e);
	}
	public void deleteDetails(String recipename) {
		Rep.deleteById(recipename);
		
	}
}