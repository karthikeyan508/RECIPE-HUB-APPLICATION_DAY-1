package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;




import com.example.demo.Entity.contactentity;
import com.example.demo.Repository.contactrepo;



@org.springframework.stereotype.Service
public class contactservice {
	@Autowired(required=true)
	contactrepo Rep;
	public contactentity saveDetails(contactentity e)
	{
		return Rep.save(e);
	}
	public List<contactentity> getDetails(){
		return Rep.findAll();
	} 
	public contactentity updateDetails(contactentity e) {
		return Rep.saveAndFlush(e);
	}
	public void deleteDetails(String firstname) {
		Rep.deleteById(firstname);
		
	}
}