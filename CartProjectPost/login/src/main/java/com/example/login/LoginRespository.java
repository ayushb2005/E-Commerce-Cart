package com.example.login;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRespository extends MongoRepository<LoginDetails,String>{


    @Query("{email:{$eq:?0},password:{$eq:?1},userType:admin}")
    List<LoginDetails> verifyEPAdmin(String email,String password);

    @Query("{email:{$eq:?0},password:{$eq:?1},userType:customer}")
    List<LoginDetails> verifyEPCustomer(String email,String password);

    @Query("{email:{$eq:?0},userType:customer}")
    List<LoginDetails> getNameByEmail(String email);
    
}
