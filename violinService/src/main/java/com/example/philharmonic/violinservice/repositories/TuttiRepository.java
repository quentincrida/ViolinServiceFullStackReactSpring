package com.example.philharmonic.violinservice.repositories;

import com.example.philharmonic.violinservice.models.Tutti;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TuttiRepository extends JpaRepository<Tutti, Long> {

}
