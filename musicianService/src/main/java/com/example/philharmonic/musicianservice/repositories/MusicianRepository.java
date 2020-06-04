package com.example.philharmonic.musicianservice.repositories;

import com.example.philharmonic.musicianservice.models.Musician;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MusicianRepository extends JpaRepository<Musician, Long> {
}
