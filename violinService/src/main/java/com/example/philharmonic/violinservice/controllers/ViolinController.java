package com.example.philharmonic.violinservice.controllers;

import com.example.philharmonic.violinservice.models.Violin;
import com.example.philharmonic.violinservice.repositories.ViolinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class ViolinController {
    //responseEntity allows me to specify status code,
// and getAllViolins will take a payload of type List<Violin>.
    //HttpStatus.OK = code 200
    @Autowired
    ViolinRepository violinRepository;

    @GetMapping(value = "/violins")
    public ResponseEntity<List<Violin>> getAllViolins(){
        return new ResponseEntity<>(violinRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/violins/{id}")
    public ResponseEntity getViolin(@PathVariable Long id){
            return new ResponseEntity<>(violinRepository.findById(id), HttpStatus.OK);
        }

    @PostMapping(value = "/violins")
    public ResponseEntity<Violin> postViolin(@RequestBody Violin violin){
        violinRepository.save(violin);
        return new ResponseEntity<>(violin, HttpStatus.CREATED);
    }
   }


