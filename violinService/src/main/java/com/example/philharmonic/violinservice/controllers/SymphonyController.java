package com.example.philharmonic.violinservice.controllers;

import com.example.philharmonic.violinservice.models.Symphony;
import com.example.philharmonic.violinservice.repositories.SymphonyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class SymphonyController {
    @Autowired
    SymphonyRepository symphonyRepository;

    @GetMapping(value="/symphonies")
    public ResponseEntity<List<Symphony>> getAllSymphonies(){ return new ResponseEntity<>(symphonyRepository.findAll(), HttpStatus.OK);}

    @GetMapping(value = "/symphonies/{id}")
    public ResponseEntity getSymphonies(@PathVariable Long id) { return new ResponseEntity<>(symphonyRepository.findById(id), HttpStatus.OK);}

    @PostMapping(value = "/symphonies")
    public ResponseEntity<Symphony> createSymphony(@RequestBody Symphony symphony){
        symphonyRepository.save(symphony);
        return new ResponseEntity<>(symphony, HttpStatus.CREATED);
    }
}
