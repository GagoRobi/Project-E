package com.example.demo.model.DTO;

import lombok.*;


@NoArgsConstructor
@Getter
@Setter
@Builder
public class ItemDto {
    private String name;
    private int price;
    private String description;
    private String pictureUrl;

    public ItemDto(String name, int price, String description, String pictureUrl) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.pictureUrl = pictureUrl;
    }
}
