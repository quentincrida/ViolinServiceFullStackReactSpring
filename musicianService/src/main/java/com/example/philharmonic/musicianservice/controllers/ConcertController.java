package com.example.philharmonic.musicianservice.controllers;

import com.example.philharmonic.musicianservice.models.Composition;
import com.example.philharmonic.musicianservice.models.Concert;
import com.example.philharmonic.musicianservice.models.Musician;
import com.example.philharmonic.musicianservice.repositories.ConcertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ConcertController {

@Autowired
ConcertRepository concertRepository;

@GetMapping(value="/concerts")
public ResponseEntity<List<Concert>> getAllConcerts(){
  return new ResponseEntity<>(concertRepository.findAll(), HttpStatus.OK);
    }
@GetMapping(value="/concerts/{id}")
public ResponseEntity getConcert(@PathVariable Long id){
    return new ResponseEntity(concertRepository.findById(id), HttpStatus.OK);
    }
@PostMapping(value= "/concerts")
    public ResponseEntity<Concert> postConcert(@RequestBody Concert concert){
    concertRepository.save(concert);
    return new ResponseEntity<>(concert, HttpStatus.CREATED);
    }

@PatchMapping(value="/concerts/{id}")
    public ResponseEntity<Concert> updateConcert(@RequestBody Concert concert){
    concertRepository.save(concert);
    return new ResponseEntity<>(concert, HttpStatus.OK);
    }
@DeleteMapping(value="/concerts/{id}")
    public ResponseEntity<Concert> deleteComposition(@PathVariable Long id){
    Concert found = concertRepository.getOne(id);
    concertRepository.delete(found);
    return new ResponseEntity<>(null, HttpStatus.OK);
    }

}
