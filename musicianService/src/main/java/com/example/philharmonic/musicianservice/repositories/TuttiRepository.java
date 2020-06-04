package com.example.philharmonic.musicianservice.repositories;

import com.example.philharmonic.musicianservice.models.Tutti;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TuttiRepository extends JpaRepository<Tutti, Long> {

}
