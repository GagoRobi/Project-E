package com.example.demo.model.DTO;

import com.example.demo.model.entities.EventType;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
public class EventDto {
    private UUID id;
    private String title;
    private EventType type;
    private String description;
    private LocalDate date;
    private int headcount;
}
