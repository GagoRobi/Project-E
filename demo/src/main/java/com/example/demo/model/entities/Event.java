package com.example.demo.model.entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.UUID;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Event {
    @Id
    @GeneratedValue
    private UUID id;
    private String title;
    @ManyToOne
    private EventType type;
    @Column(length = 500)
    private String description;
    private LocalDate date;
    private int headcount;
    private String link;

}
