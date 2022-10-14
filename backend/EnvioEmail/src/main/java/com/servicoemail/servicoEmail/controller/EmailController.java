package com.servicoemail.servicoEmail.controller;

import com.servicoemail.servicoEmail.repository.EmailRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.servicoemail.servicoEmail.dto.EmailDto;
import com.servicoemail.servicoEmail.model.EmailModel;
import com.servicoemail.servicoEmail.service.EmailService;

import java.util.List;

@RestController
public class EmailController {

	@Autowired
	private EmailService emailService;
	
	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private EmailRepository emailRepository;
	
	@PostMapping("/send-email")
	public ResponseEntity<EmailModel> sendEmail(@RequestBody EmailDto model){
		EmailModel email = modelMapper.map(model, EmailModel.class);
		emailService.sendEmail(email);
		return new ResponseEntity<EmailModel>(email, HttpStatus.OK);
	}
	@GetMapping("/listEmail/{dd}")
	public List<EmailModel> listaEmail(@PathVariable String dd){
		String mm;
		String yyyy;
		mm = dd.substring(4,6);
		yyyy = dd.substring(5);
		dd = dd.substring(7);
		System.out.println("\n********************"+dd+"/"+mm+"/"+yyyy+"****************************");
		return emailRepository.findAllDate(dd,mm,yyyy);
	}
	@GetMapping("/listEmail")
	public List<EmailModel> listaAllEmail(){
		return emailRepository.findAll();
	}

	@GetMapping("/listEmail/{id}")
	public List<EmailModel> listOneEmail(@PathVariable String id){
		return emailRepository.findAllById(id);
	}
	
}
