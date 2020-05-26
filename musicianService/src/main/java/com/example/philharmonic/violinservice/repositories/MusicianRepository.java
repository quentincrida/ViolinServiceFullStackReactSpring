package com.example.philharmonic.violinservice.repositories;

import com.example.philharmonic.violinservice.models.Musician;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MusicianRepository extends JpaRepository<Musician, Long> {
}
