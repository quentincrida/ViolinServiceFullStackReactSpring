package com.example.philharmonic.musicianservice.controllers;

import com.example.philharmonic.musicianservice.models.Composition;
import com.example.philharmonic.musicianservice.repositories.CompositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CompositionController {
    @Autowired
    CompositionRepository compositionRepository;

    @GetMapping(value="/compositions")
    public ResponseEntity<List<Composition>> getAllCompositions(){ return new ResponseEntity<>(compositionRepository.findAll(), HttpStatus.OK);}

    @GetMapping(value = "/compositions/{id}")
    public ResponseEntity getCompositions(@PathVariable Long id) { return new ResponseEntity<>(compositionRepository.findById(id), HttpStatus.OK);}

    @PostMapping(value = "/compositions")
    public ResponseEntity<Composition> createComposition(@RequestBody Composition composition){
        compositionRepository.save(composition);
        return new ResponseEntity<>(composition, HttpStatus.CREATED);
    }
    @PatchMapping(value = "/compositions/{id}")
    public ResponseEntity<Composition> updateComposition(@RequestBody Composition composition){
        compositionRepository.save(composition);
        return new ResponseEntity<>(composition, HttpStatus.OK);
    }
    @DeleteMapping(value = "/compositions/{id}")
    public ResponseEntity<Composition> deleteComposition(@PathVariable Long id){
        Composition found = compositionRepository.getOne(id);
        compositionRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
