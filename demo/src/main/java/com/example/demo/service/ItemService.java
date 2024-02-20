package com.example.demo.service;

import com.example.demo.model.DTO.ItemDto;
import com.example.demo.model.entities.Item;
import com.example.demo.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {
    private final ItemRepository itemRepository;

    @Autowired
    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Item> findAllItems() {
        return itemRepository.findAll();
    }
    public Item findById(long id){
        return itemRepository.findById(id).orElseThrow(/*TODO*/);
    }

    public Item createItem(ItemDto item) {
        Item createdItem = Item.
                builder().
                name(item.getName()).
                price(item.getPrice()).
                description(item.getDescription()).
                pictureUrl(item.getPictureUrl()).
                build();
        return itemRepository.save(createdItem);
    }
    public boolean deleteByID(long id){
        itemRepository.deleteById(id);
        return !itemRepository.existsById(id); //should return true if the Item is not in the DB!
    }
}
