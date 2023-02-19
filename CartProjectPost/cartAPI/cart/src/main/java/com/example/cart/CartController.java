package com.example.cart;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cart")    
public class CartController {
    @Autowired
    CartService cartService;

    @GetMapping("/welcome")
    public String welcome(){
        return "Welcome to the API";
    }
    @PostMapping("/create")
    public String createProduct(@RequestBody ProductDetails productDetails){
        return cartService.createProduct(productDetails);
    }

    @GetMapping("/getById/{id}")
    public ProductDetails findProductById(@PathVariable String id){
        return cartService.findProductById(id);
    }

    @GetMapping("/all")
    public List<ProductDetails> getAllProductsCatalog(){
        return cartService.getAllProductsCatalog();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteById(@PathVariable String id){
        return cartService.deleteById(id);
    }

    @PutMapping("/update/{id}")
    public String updateByJSON(@RequestBody ProductDetails productDetails){
        return cartService.updateByJSON(productDetails);
    }
    @PutMapping("/updatePrice/{id}")
    public String updatePriceById(@PathVariable String id, @RequestParam double newPrice){
        return cartService.updatePriceById(id, newPrice);
    }
    @PutMapping("/updateStock/{id}")
    public double updateStockById(@PathVariable String id, @RequestParam double quantity){
        return cartService.updateStockById(id, quantity);
    }
    @GetMapping("/findByName/{name}")
    public List<ProductDetails> findProductByName(@PathVariable String name){
        return cartService.findProductByName(name);
    }
    @GetMapping("/findByCategory/{category}")
    public List<ProductDetails> findProductByCategory(@PathVariable String category){
        return cartService.findProductByCategory(category);
    }
    @GetMapping("/sortASC")
    public List<ProductDetails> sortAsc(){
        return cartService.sortAsc();
    }
    @GetMapping("/sortDSC")
    public List<ProductDetails> sortDesc(){
        return cartService.sortDesc();
    }
    @GetMapping("/filterByMaxPrice/{max}")
    public List<ProductDetails> filterByMaxPrice(@PathVariable double max){
        return cartService.filterProductByMaxPrice(max);
    }
    @GetMapping("/filterByMinPrice/{min}")
    public List<ProductDetails> filterByMinPrice(@PathVariable double min){
        return cartService.filterProductByMinPrice(min);
    }
    @GetMapping("/allWithPaginationAZ")
    public List<ProductDetails> sortedPaginationAZ(@RequestParam int pageNo, @RequestParam int pageSize, @RequestParam String field){
        return cartService.sortedPaginationAZ(pageNo, pageSize, field);
    }
    @GetMapping("/allWithPaginationZA")
    public List<ProductDetails> sortedPaginationZA(@RequestParam int pageNo, @RequestParam int pageSize, @RequestParam String field){
        return cartService.sortedPaginationAZ(pageNo, pageSize, field);
    }

    @GetMapping("/regex")
    public List<ProductDetails> findTextSearch(@RequestParam String regex){
        return cartService.findTextSearch(regex);
    }
}
