package com.example.login;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/login")
public class LoginController {
    
    @Autowired
    LoginService loginService;

    @GetMapping("/welcome")
    public String welcome(){
        return "welcome to login api";
    }

    @PostMapping("/create")
    public String createUser(@RequestBody LoginDetails loginDetails){
        return loginService.createUser(loginDetails);
    }

    @GetMapping("/getAll")
    public List<LoginDetails> getAll(){
        return loginService.getAll();
    }
    
    @DeleteMapping("/delete/{id}")
    public String deleteById(@PathVariable String id){
        return loginService.deleteById(id);
    }

    @GetMapping("/verifyAdminB")
    public String verifyAdminB(@RequestParam String email, @RequestParam String password){
        if(!loginService.verifyAdmin(email,password).isEmpty()){
            return "Admin";
        }
        return "Wrong";
    }

    @GetMapping("/verifyCustomerB")
    public String verifyCustomerB(@RequestParam String email, @RequestParam String password){
        if(!loginService.verifyCustomer(email,password).isEmpty()){
            return "Customer";
        }
        return "Wrong";
    }
    
    @PostMapping("/verifyAdmin")
    public int verifyAdmin(@RequestBody LoginDetails loginDetails){
        if(!loginService.verifyAdmin(loginDetails.getEmail(),loginDetails.getPassword()).isEmpty()){
            return 200;
        }
        return 404;
    }

    @PostMapping("/verifyCustomer")
    public int verifyCustomer(@RequestBody LoginDetails loginDetails){
        if(!loginService.verifyCustomer(loginDetails.getEmail(),loginDetails.getPassword()).isEmpty()){
            return 200;
        }
        return 404;
    }

    
    @GetMapping("/getNameFromEmailCustomer/{email}")
    public String getNameByEmailCustomer(@PathVariable String email){
        return ((LoginDetails)loginService.getNameByEmailCustomer(email).toArray()[0]).getFirstName();
    }

}
