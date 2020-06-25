package com.example.philharmonic.musicianservice;

import com.example.philharmonic.musicianservice.models.Composition;
import com.example.philharmonic.musicianservice.models.Concert;
import com.example.philharmonic.musicianservice.models.Tutti;
import com.example.philharmonic.musicianservice.models.Musician;
import com.example.philharmonic.musicianservice.repositories.CompositionRepository;
import com.example.philharmonic.musicianservice.repositories.ConcertRepository;
import com.example.philharmonic.musicianservice.repositories.TuttiRepository;
import com.example.philharmonic.musicianservice.repositories.MusicianRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;


//@RunWith(SpringRunner.class)
@SpringBootTest
public class MusicianServiceApplicationTests {
    @Autowired
    TuttiRepository tuttiRepository;

    @Autowired
    MusicianRepository musicianRepository;

    @Autowired
    CompositionRepository compositionRepository;

    @Autowired
    ConcertRepository concertRepository;

    @Test
    public void contextLoads(){}

    @Test
    public void createConcert(){
        Concert marini = new Concert("Marini", "GRCH", LocalDateTime.of(2020,05,10,19,45,00));
        concertRepository.save(marini);
    }

    @Test
    public void createMusicianAndTutti(){
        Tutti tutti = new Tutti("Firsts");
       // tutti.setId(1L);
        tuttiRepository.save(tutti);

        Musician violinist = new Musician("Johnny", "Walker", 25, "Violin", "Rank and File", tutti);
       // tutti.setId(1L);
        musicianRepository.save(violinist);
    }

    @Test
    public void addMusiciansToCompositions(){
        Tutti tutti = new Tutti( "Firsts");
        tuttiRepository.save(tutti);
        Musician leader = new Musician("Jurgs", "Schwietering", 28, "Violin", "Leader", tutti);
        musicianRepository.save(leader);
        Concert baroque = new Concert("Baroque", "FHCC", LocalDateTime.of(2020,6,22,19,45,00));
        concertRepository.save(baroque);
        Composition composition = new Composition("Beethoven", "Triple Concerto", "C Major", "10", baroque);
        compositionRepository.save(composition);


        Tutti tutti2 = new Tutti("Seconds");
        tuttiRepository.save(tutti2);
        Musician violin2 = new Musician("Wendy", "Schwietering", 6, "violin", "Sub Principal",tutti2);
        musicianRepository.save(violin2);

        Composition composition2 = new Composition("Mozart", "Symphony Nr 1", "F minor", "K. 23", baroque);
        compositionRepository.save(composition2);


        Tutti tutti3 = new Tutti("Firsts");
        tuttiRepository.save(tutti3);
        Musician violin3 = new Musician("Simos", "Aering", 30, "Violin", "Principal", tutti3);
        musicianRepository.save(violin3);
        Composition composition3 = new Composition("Shostakovich", "The Nose", "D Major", "152", baroque);
        compositionRepository.save(composition3);


        composition.addMusician(leader);
        composition.addMusician(violin2);
        composition.addMusician(violin3);
    }

//*****NOTED OUT LAST
//    @Test
//////    public void addCompositionToConcert(){
//////
//////        Concert baroque = new Concert("Baroque", "FHCC", LocalDateTime.of(2020,6,22,19,45,00));
//////        concertRepository.save(baroque);
//////
//////        Composition uccellini = new Composition("Uccellini", "Passacalio", "D Major", "45", baroque);
//////        compositionRepository.save(uccellini);
//////
//////        baroque.addComposition(uccellini);
//////    }
//////
//////  *******STOP HERE




//    @Test
//    public void addOneCompositionToManyConcerts(){
//
//        Composition uccellini = new Composition("Uccellini", "Passacalio", "D Major", "45");
//        compositionRepository.save(uccellini);
//
//        Concert earlyBaroque = new Concert("Early Baroque", "FHCC", LocalDateTime.of(2021,6,22,19,45,00));
//        concertRepository.save(earlyBaroque);
//
//        Concert midBaroque = new Concert("Mid Baroque", "Arena", LocalDateTime.of(2022,7,22,19,45,00));
//        concertRepository.save(midBaroque);
//
//        Concert lateBaroque = new Concert("Late Baroque", "FHCC", LocalDateTime.of(2023,8,22,19,45,00));
//        concertRepository.save(lateBaroque);
//
//        earlyBaroque.addComposition(uccellini);
//        midBaroque.addComposition(uccellini);
//        lateBaroque.addComposition(uccellini);
//    }
}
