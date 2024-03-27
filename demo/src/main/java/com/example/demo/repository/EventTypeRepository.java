package com.example.demo.repository;

import com.example.demo.model.entities.EventType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface EventTypeRepository extends JpaRepository<EventType, UUID> {

    Optional<EventType> findById(UUID id);

    void deleteById(UUID uuid);


}
