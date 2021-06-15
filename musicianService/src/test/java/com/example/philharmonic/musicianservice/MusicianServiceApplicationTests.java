package com.example.philharmonic.musicianservice;

import com.example.philharmonic.musicianservice.models.Composition;
import com.example.philharmonic.musicianservice.models.Tutti;
import com.example.philharmonic.musicianservice.models.Musician;
import com.example.philharmonic.musicianservice.repositories.CompositionRepository;
import com.example.philharmonic.musicianservice.repositories.TuttiRepository;
import com.example.philharmonic.musicianservice.repositories.MusicianRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;


//@RunWith(SpringRunner.class)
@SpringBootTest
public class MusicianServiceApplicationTests {
    @Autowired
    TuttiRepository tuttiRepository;

    @Autowired
    MusicianRepository musicianRepository;

    @Autowired
    CompositionRepository compositionRepository;


    @Test
    public void contextLoads(){}

    @Test
    public void createMusicianAndTutti(){
        Tutti tutti = new Tutti("Firsts");
        tuttiRepository.save(tutti);

        Musician violinist = new Musician("Johnny", "Walker", 25, "Violin", "Rank and File", tutti);
        musicianRepository.save(violinist);
    }

    @Test
    public void addMusiciansToCompositions(){
        Tutti tutti = new Tutti( "Firsts");
        tuttiRepository.save(tutti);
        Musician leader = new Musician("Jurgs", "Schwietering", 28, "Violin", "Leader", tutti);
        musicianRepository.save(leader);

        Composition composition = new Composition("Beethoven", "Triple Concerto", "C Major", "10");
        compositionRepository.save(composition);


        Tutti tutti2 = new Tutti("Seconds");
        tuttiRepository.save(tutti2);
        Musician violin2 = new Musician("Wendy", "Schwietering", 6, "violin", "Sub Principal",tutti2);
        musicianRepository.save(violin2);

        Composition composition2 = new Composition("Mozart", "Symphony Nr 1", "F minor", "K. 23");
        compositionRepository.save(composition2);


        Tutti tutti3 = new Tutti("Firsts");
        tuttiRepository.save(tutti3);
        Musician violin3 = new Musician("Simos", "Aering", 30, "Violin", "Principal", tutti3);
        musicianRepository.save(violin3);
        Composition composition3 = new Composition("Shostakovich", "The Nose", "D Major", "152");
        compositionRepository.save(composition3);


        composition.addMusician(leader);
        composition.addMusician(violin2);
        composition.addMusician(violin3);
    }
}
