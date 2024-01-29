package com.example.demo.repository;

import com.example.demo.model.entities.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;
import java.util.Optional;
import java.util.UUID;

public interface EventRepository extends JpaRepository<Event, Long> {
    Optional<Event> findById(UUID uuid);
    void deleteById(UUID uuid);
}
