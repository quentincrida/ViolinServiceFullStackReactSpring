package com.example.philharmonic.musicianservice.repositories;

import com.example.philharmonic.musicianservice.models.Symphony;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SymphonyRepository extends JpaRepository<Symphony, Long> {
}
