package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.recipeentity;
import com.example.demo.Services.recipeservice;



@RestController
@CrossOrigin
public class recipecontroller {
	@Autowired
	recipeservice ser;
	
	@PostMapping("/addRecipe") 
	public recipeentity addinfo(@RequestBody recipeentity st)
	{
		return ser.saveDetails(st);
	}
	@GetMapping("/showRecipe")
	public List<recipeentity> fetchDetails()
	{
		return ser.getDetails();
	}
	@PutMapping("/updateRecipe")
		public recipeentity updateInfo(@RequestBody recipeentity st)
		{
			return ser.updateDetails(st);
		}
	@DeleteMapping("/deleteRecipe/{recipename}")
	 String deleteInfo(@PathVariable("recipename") String recipename){
		ser.deleteDetails(recipename);
		return "Deleted the data";
	}
//	
}