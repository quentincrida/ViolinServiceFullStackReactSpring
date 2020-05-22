package com.example.philharmonic.violinservice.repositories;

import com.example.philharmonic.violinservice.models.Violin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ViolinRepository extends JpaRepository<Violin, Long> {
}
