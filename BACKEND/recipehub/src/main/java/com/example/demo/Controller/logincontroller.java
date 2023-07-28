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

import com.example.demo.Entity.loginentity;
import com.example.demo.Services.loginservice;



@RestController
@CrossOrigin
public class logincontroller {
	@Autowired
	loginservice ser;
	
	@PostMapping("/post") 
	public loginentity addinfo(@RequestBody loginentity st)
	{
		return ser.saveDetails(st);
	}
	@GetMapping("/get")
	public List<loginentity> fetchDetails()
	{
		return ser.getDetails();
	}
	@PutMapping("/update")
		public loginentity updateInfo(@RequestBody loginentity	 st)
		{
			return ser.updateDetails(st);
		}
	@DeleteMapping("/delete/{email}")
	 String deleteInfo(@PathVariable("email") String email){
		ser.deleteDetails(email);
		return "Deleted the data";
	}
//	
}