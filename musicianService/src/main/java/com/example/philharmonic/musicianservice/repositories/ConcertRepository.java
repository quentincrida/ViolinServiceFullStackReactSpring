package com.example.philharmonic.musicianservice.repositories;

import com.example.philharmonic.musicianservice.models.Concert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConcertRepository extends JpaRepository<Concert, Long> {
}
