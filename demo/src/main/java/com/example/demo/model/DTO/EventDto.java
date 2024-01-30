package com.example.demo.model.DTO;

import com.example.demo.model.entities.Event;
import com.example.demo.model.entities.EventType;
import lombok.*;

import java.time.LocalDate;
import java.util.UUID;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class EventDto {
    private String title;
    private EventType type;
    private String description;
    private LocalDate date;
    private int headcount;

    public EventDto(Event event){
        this.title = event.getTitle();
        this.type = event.getType();
        this.description = event.getDescription();
        this.date = event.getDate();
        this.headcount = event.getHeadcount();
    }
}
