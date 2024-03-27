package com.example.demo.controller;

import com.example.demo.model.DTO.EventDto;
import com.example.demo.model.entities.Event;
import com.example.demo.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/events")
public class EventController {

    private final EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping
    public List<Event> getAllEvents() {
        System.out.println(eventService.getAllEvents());
        return eventService.getAllEvents();
    }

    @PostMapping("/create")
    public Event addNewEvent(@RequestBody EventDto newEvent) {
        return eventService.addEvent(newEvent);
    }

    @DeleteMapping("/delete")
    public void deleteEvent(@RequestBody UUID id) {
        eventService.deleteEventById(id);
    }

}
