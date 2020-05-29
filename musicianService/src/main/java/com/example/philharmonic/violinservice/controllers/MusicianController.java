package com.example.philharmonic.violinservice.controllers;

import com.example.philharmonic.violinservice.models.Musician;
import com.example.philharmonic.violinservice.repositories.MusicianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class MusicianController {
    //responseEntity allows me to specify status code,
// and getAllViolins will take a payload of type List<Violin>.
    //HttpStatus.OK = code 200
    @Autowired
    MusicianRepository musicianRepository;

    @GetMapping(value = "/musicians")
    public ResponseEntity<List<Musician>> getAllMusicians(){
        return new ResponseEntity<>(musicianRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/musicians/{id}")
    public ResponseEntity getMusician(@PathVariable Long id){
            return new ResponseEntity<>(musicianRepository.findById(id), HttpStatus.OK);
        }

    @PostMapping(value = "/musicians")
    public ResponseEntity<Musician> postMusician(@RequestBody Musician musician){
        musicianRepository.save(musician);
        return new ResponseEntity<>(musician, HttpStatus.CREATED);
    }
    @PatchMapping(value="/musicians/{id}")
    public ResponseEntity<Musician> updateMusician(@RequestBody Musician musician){
        musicianRepository.save(musician);
        return new ResponseEntity<>(musician, HttpStatus.OK);
    }
    @DeleteMapping(value="/musicians/{id}")
        public ResponseEntity<Musician> deleteMusician(@PathVariable Long id) {
        Musician found = musicianRepository.getOne(id);
        musicianRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
   }


