package com.example.demo.service;

import com.example.demo.model.DTO.EventDto;
import com.example.demo.model.entities.Event;
import com.example.demo.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class EventService {

    private final EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<Event> getAllEvents(){
        List<Event> events = eventRepository.findAll();
        List<EventDto> eventDtos = events.stream().map(EventDto::new).toList();
        System.out.println(eventDtos);
        return events;
    }

    public Event findEventById(UUID id){
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
    public void deleteEventById(UUID id){
        eventRepository.deleteById(id);
    }

}
