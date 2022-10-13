package com.servicoemail.servicoEmail.repository;

import com.servicoemail.servicoEmail.model.EmailModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmailRepository extends MongoRepository<EmailModel, String>{


    @Query("{sendDateEmail: {$gte: '?0/?1/?2'}}")
    List<EmailModel> findAllDate(String dd,String mm,String yyyy
    );

    @Query("{id: '?0'}")
    List<EmailModel> findAllById(String id);
}
