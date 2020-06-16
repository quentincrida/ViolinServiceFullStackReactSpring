package com.example.philharmonic.musicianservice.controllers;

import com.example.philharmonic.musicianservice.models.Concert;
import com.example.philharmonic.musicianservice.repositories.ConcertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class ConcertController {

@Autowired
ConcertRepository concertRepository;

@GetMapping(value="/concerts")
public List<Concert> getAllConcerts(){
  return concertRepository.findAll();
}
@GetMapping(value="/concerts/{id}")
public Optional<Concert> getConcert(@PathVariable Long id){
    return concertRepository.findById(id);
}
}
