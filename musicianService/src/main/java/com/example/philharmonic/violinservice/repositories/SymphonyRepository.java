package com.example.philharmonic.violinservice.repositories;

import com.example.philharmonic.violinservice.models.Symphony;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SymphonyRepository extends JpaRepository<Symphony, Long> {
}
