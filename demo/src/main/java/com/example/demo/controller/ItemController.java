package com.example.demo.controller;

import com.example.demo.model.DTO.ItemDto;
import com.example.demo.model.entities.Item;
import com.example.demo.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/item")
public class ItemController {
    private final ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping("/all")
    public List<Item> getAllItems() {
        return itemService.findAllItems();
    }

    @GetMapping
    public Item getItemById(@RequestBody UUID id){
        return itemService.findById(id);
    }
    @PostMapping("/create")
    public Item createItem(@RequestBody ItemDto itemDto){
        return itemService.createItem(itemDto);
    }

    @DeleteMapping
    public boolean deleteById(@RequestBody UUID id){
        return itemService.deleteByID(id);
    }

}
