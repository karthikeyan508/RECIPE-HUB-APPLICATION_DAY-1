package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;




import com.example.demo.Entity.loginentity;
import com.example.demo.Repository.loginrepo;



@org.springframework.stereotype.Service
public class loginservice {
	@Autowired(required=true)
	loginrepo Rep;
	public loginentity saveDetails(loginentity e)
	{
		return Rep.save(e);
	}
	public List<loginentity> getDetails(){
		return Rep.findAll();
	} 
	public loginentity updateDetails(loginentity e) {
		return Rep.saveAndFlush(e);
	}
	public void deleteDetails(String email) {
		Rep.deleteById(email);
		
	}
}