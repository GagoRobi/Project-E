package com.example.demo.service;

import com.example.demo.model.DTO.EventDto;
import com.example.demo.model.entities.Event;
import com.example.demo.model.entities.EventType;
import com.example.demo.repository.EventRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class EventServiceTest {
    private EventService underTest;
    @Mock
    private EventRepository mockRepository;

    @BeforeEach
    public void setup() {
        underTest = new EventService(mockRepository);
    }

    @Test
    public void givenEventProvided() {
        //Arrange
        UUID id = UUID.randomUUID();
        EventDto eventDto = new EventDto("title", new EventType(id, "name"), "desc", LocalDate.now(), 1,"link");
        Event resultEvent = Event.builder().id(id).build();
        Mockito.when(mockRepository.findById(id)).thenReturn(Optional.of(resultEvent));
        //Act
        boolean result = underTest.updateEvent(id, eventDto);
        //Assert
        assertTrue(result);
    }

}