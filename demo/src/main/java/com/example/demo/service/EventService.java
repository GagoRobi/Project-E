package com.example.demo.service;

import com.example.demo.model.DTO.EventDto;
import com.example.demo.model.entities.Event;
import com.example.demo.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    private final EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<Event> getAllEvents(){
        return eventRepository.findAll();
    }

    public Event findEventById(long id){
        return eventRepository.findById(id).orElseThrow();
    }
    public Event addEvent(EventDto event){
        Event newEvent = Event.builder()
                .title(event.getTitle())
                .type(event.getType())
                .description(event.getDescription())
                .date(event.getDate())
                .headcount(event.getHeadcount())
                .build();
        return eventRepository.save(newEvent);
    }
    public boolean updateEvent(long id, EventDto eventDto){
        return false;
    }
    public boolean deleteEventById(long id){
        return false;
    }

}
