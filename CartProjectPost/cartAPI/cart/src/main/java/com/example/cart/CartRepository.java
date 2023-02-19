package com.example.cart;


import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.Query;

@Repository
public interface CartRepository extends MongoRepository<ProductDetails,String> {
    List<ProductDetails> findByName(String name);
    List<ProductDetails> findByCategory(String category);

    @Query(("{price:{$lt:?0}}"))
    List<ProductDetails> findByMaxPrice(double max, Sort sort);

    @Query(("{price:{$gt:?0}}"))
    List<ProductDetails> findByMinPrice(double min, Sort sort);
    
    @Query("{$text:{$search:?0,$caseSensitive:false}}")
    List<ProductDetails> findTextSearch(String search);

}
