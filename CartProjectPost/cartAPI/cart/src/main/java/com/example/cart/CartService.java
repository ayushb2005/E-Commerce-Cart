package com.example.cart;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
@Service
public class CartService {
    @Autowired
    CartRepository cartRepository;
    
    //create product
    public String createProduct(ProductDetails productDetails){
        cartRepository.save(productDetails);
        return "Product Created";
    }

    //find by id
    public ProductDetails findProductById(String id){
        return cartRepository.findById(id).get();
    }
    
    //all
    public List<ProductDetails> getAllProductsCatalog(){
        return cartRepository.findAll();
    }

    //delete by id
    public String deleteById(String id){
        cartRepository.deleteById(id);
        return "Product deleted";
    }

    //update by id
    public String updateByJSON(ProductDetails productDetails){
        Optional < ProductDetails > productDb = cartRepository.findById(productDetails.getId());
        if (productDb.isPresent()) {
            ProductDetails productUpdate = productDb.get();
            productUpdate.setId(productDetails.getId());
            productUpdate.setName(productDetails.getName());
            productUpdate.setDescription(productDetails.getDescription());
            productUpdate.setPrice(productDetails.getPrice());
            productUpdate.setStock(productDetails.getStock());
            productUpdate.setCategory(productDetails.getCategory());
            cartRepository.save(productUpdate);
        }else{
            return "Not found";
        }
        return "Product updated";
    }   

    //update by price
    public String updatePriceById(String id, double newPrice){
        Optional < ProductDetails > productDb = cartRepository.findById(id);
        if(productDb.isPresent()){
            ProductDetails productUpdate = productDb.get();
            productUpdate.setPrice(newPrice);
            cartRepository.save(productUpdate);
        }else{
            return "Price not updated";
        }
        return "Price updated";
        
    }
    public double updateStockById(String id, double quantity){
        Optional < ProductDetails > productDb = cartRepository.findById(id);
        if(productDb.isPresent()){
            ProductDetails productUpdate = productDb.get();
            int quan = (int)(quantity);
            productUpdate.setStock(productUpdate.getStock()-quan);
            cartRepository.save(productUpdate);
        }else{
            return -1;
        }
        return productDb.get().getStock();
    }
    //find by name
    public List<ProductDetails> findProductByName(String name){
        return cartRepository.findByName(name);
    }

    //find by category
    public List<ProductDetails> findProductByCategory(String category){
        return cartRepository.findByCategory(category);
    }

    //sort ASC
    public List<ProductDetails> sortAsc(){
        Sort sort = Sort.by(Sort.Direction.ASC, "name");
        return cartRepository.findAll(sort);
    }
    //sort DESC
    public List<ProductDetails> sortDesc(){
        Sort sort = Sort.by(Sort.Direction.DESC, "name");
        return cartRepository.findAll(sort);
    }

    //filter by max price
    public List<ProductDetails> filterProductByMaxPrice(double max){
        Sort sort = Sort.by(Sort.Direction.ASC, "price");
        return cartRepository.findByMaxPrice(max,sort);
    }
    
    //filter by min price
    public List<ProductDetails> filterProductByMinPrice(double min){
        Sort sort = Sort.by(Sort.Direction.ASC, "price");
        return cartRepository.findByMinPrice(min, sort);
    }

    //Pagination with Sorting AZ
    public List<ProductDetails> sortedPaginationAZ(int pageNo, int pageSize, String field){
        PageRequest paging = PageRequest.of(pageNo-1, pageSize);
        return cartRepository.findAll(paging.withSort(Sort.Direction.ASC, field)).getContent();
    }
    //Pagination with Sorting ZA
    public List<ProductDetails> sortedPaginationZA(int pageNo, int pageSize, String field){
        PageRequest paging = PageRequest.of(pageNo-1, pageSize);
        return cartRepository.findAll(paging.withSort(Sort.Direction.DESC, field)).getContent();
    }

    //regex
    public List<ProductDetails> findTextSearch(String search){
        return cartRepository.findTextSearch(search);
    }
}
