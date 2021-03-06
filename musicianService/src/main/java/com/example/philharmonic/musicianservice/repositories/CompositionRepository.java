package com.example.philharmonic.musicianservice.repositories;

import com.example.philharmonic.musicianservice.models.Composition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompositionRepository extends JpaRepository<Composition, Long> {
}
