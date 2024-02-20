package com.example.demo.model.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Item {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private int price;
    private String description;
    private String pictureUrl;
}
