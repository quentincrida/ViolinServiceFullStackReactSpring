package com.example.philharmonic.musicianservice.repositories;

import com.example.philharmonic.musicianservice.models.Composition;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompositionRepository extends JpaRepository<Composition, Long> {
}
