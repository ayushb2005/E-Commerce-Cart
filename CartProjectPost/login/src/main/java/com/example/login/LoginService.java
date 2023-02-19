package com.example.login;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    @Autowired
    LoginRespository loginRespository;

    //create
    public String createUser(LoginDetails loginDetails){
        loginRespository.save(loginDetails);
        return "User Created";
    }

    //all
    public List<LoginDetails> getAll(){
        return loginRespository.findAll();
    }

    //delete
    public String deleteById(String id){
        loginRespository.deleteById(id);
        return "User Deleted";
    }
    

    //admin verification
    public List<LoginDetails> verifyAdmin(String email,String password){
        return loginRespository.verifyEPAdmin(email,password);
    }

    public List<LoginDetails> verifyCustomer(String email,String password){
        return loginRespository.verifyEPCustomer(email, password);
    }

    public List<LoginDetails> getNameByEmailCustomer(String email){
        return loginRespository.getNameByEmail(email);
    }
}
