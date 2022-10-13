package com.servicoemail.servicoEmail.dto;

import com.servicoemail.servicoEmail.model.StatusEmail;
import lombok.Data;

@Data
public class EmailDto {

	private String id;
	private String ownerRef;
	private String emailFrom;
	private String emailTo;
	private String subject;
	private String text;
	private String sendDateEmail;
	private StatusEmail statusEmail;
	
}
