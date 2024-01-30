package com.example.demo.controller;

import com.example.demo.model.DTO.EventDto;
import com.example.demo.model.entities.Event;
import com.example.demo.model.entities.EventType;
import com.example.demo.service.EventService;
import com.example.demo.service.EventTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/event-types")
public class EventTypeController {
    private final EventTypeService eventTypeService;
    @Autowired
    public EventTypeController(EventTypeService eventTypeService) {
        this.eventTypeService = eventTypeService;
    }

    @GetMapping
    public List<EventType> getAllEvents(){
        System.out.println(eventTypeService.getAllEvents());
        return eventTypeService.getAllEvents();
    }
    @PostMapping("/create")
    public EventType addNewEvent(@RequestBody String name){
        return eventTypeService.addEventType(name);
    }
    @DeleteMapping("/delete")
    public void deleteTypeById(@RequestBody UUID id){
        eventTypeService.deleteEventTypeById(id);
    }
}
