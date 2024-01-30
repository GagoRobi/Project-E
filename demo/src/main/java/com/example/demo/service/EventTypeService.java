package com.example.demo.service;

import com.example.demo.model.entities.EventType;
import com.example.demo.repository.EventRepository;
import com.example.demo.repository.EventTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EventTypeService {

    private final EventTypeRepository eventTypeRepository;
    @Autowired
    public EventTypeService(EventTypeRepository eventTypeRepository) {
        this.eventTypeRepository = eventTypeRepository;
    }
    public List<EventType> getAllEvents(){
        return eventTypeRepository.findAll().stream().toList();
    }
    public EventType addEventType(String typeName){
        return eventTypeRepository.save(EventType.builder().name(typeName).build());
    }
    public void deleteEventTypeById(UUID id){
        eventTypeRepository.deleteById(id);
    }
}
