package com.example.philharmonic.musicianservice.controllers;

import com.example.philharmonic.musicianservice.models.Tutti;
import com.example.philharmonic.musicianservice.repositories.TuttiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TuttiController {
    @Autowired
    TuttiRepository tuttiRepository;

    @GetMapping(value ="/tuttis")
    public ResponseEntity<List<Tutti>> getAllTuttis(){return new ResponseEntity<>( tuttiRepository.findAll(),HttpStatus.OK);}

    @GetMapping(value = "/tuttis/{id}")
    public ResponseEntity getTutti(@PathVariable Long id){ return new ResponseEntity(tuttiRepository.findById(id), HttpStatus.OK );}

    @PostMapping(value = "/tuttis")
    public ResponseEntity<Tutti> createTutti(@RequestBody Tutti tutti){
        tuttiRepository.save(tutti);
        return new ResponseEntity<>(tutti, HttpStatus.CREATED);
    }
    @PatchMapping(value = "/tuttis/{id}")
    public ResponseEntity <Tutti> updateTutti(@RequestBody Tutti tutti){
        tuttiRepository.save(tutti);
        return new ResponseEntity<>(tutti, HttpStatus.OK);
    }
    @DeleteMapping(value = "/tuttis/{id}")
    public ResponseEntity<Tutti> deleteTutti(@PathVariable Long id){
        Tutti found = tuttiRepository.getOne(id);
        tuttiRepository.delete(found);
        return  new ResponseEntity<>(null, HttpStatus.OK);
    }

}
