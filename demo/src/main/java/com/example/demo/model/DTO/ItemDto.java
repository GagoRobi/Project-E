package com.example.demo.model.DTO;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class ItemDto {
    private String name;
    private int price;
    private String description;
    private String pictureUrl;
}
