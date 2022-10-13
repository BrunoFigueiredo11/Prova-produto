package com.servicoemail.servicoEmail.model;


import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "email")
public class EmailModel {
	
	@Id
	private String id;
	
	private String ownerRef;
	private String emailFrom;
	private String emailTo;
	private String subject;
	private String text;
	private String sendDateEmail;
	private StatusEmail statusEmail;
}
