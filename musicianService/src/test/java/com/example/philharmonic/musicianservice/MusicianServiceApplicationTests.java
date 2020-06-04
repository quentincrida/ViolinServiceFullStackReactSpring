package com.example.philharmonic.musicianservice;

import com.example.philharmonic.musicianservice.models.Symphony;
import com.example.philharmonic.musicianservice.models.Tutti;
import com.example.philharmonic.musicianservice.models.Musician;
import com.example.philharmonic.musicianservice.repositories.SymphonyRepository;
import com.example.philharmonic.musicianservice.repositories.TuttiRepository;
import com.example.philharmonic.musicianservice.repositories.MusicianRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


//@RunWith(SpringRunner.class)
@SpringBootTest
public class MusicianServiceApplicationTests {
    @Autowired
    TuttiRepository tuttiRepository;

    @Autowired
    MusicianRepository musicianRepository;

    @Autowired
    SymphonyRepository symphonyRepository;

    @Test
    public void contextLoads(){}

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
    public void addMusiciansToSymphonies(){
        Tutti tutti = new Tutti("Firsts");
        tuttiRepository.save(tutti);
        Musician leader = new Musician("Jurgs", "Schwietering", 28, "Violin", "Leader", tutti);
        musicianRepository.save(leader);
        Symphony symphony = new Symphony("Beethoven", 1, "C Major", "10");
        symphonyRepository.save(symphony);

        Tutti tutti2 = new Tutti("Seconds");
        tuttiRepository.save(tutti2);
        Musician violin2 = new Musician("Wendy", "Schwietering", 6, "violin", "Sub Principal",tutti2);
        musicianRepository.save(violin2);
        Symphony symphony2 = new Symphony("Mozart", 14, "F monor", "K. 23");
        symphonyRepository.save(symphony2);


        Tutti tutti3 = new Tutti("Firsts");
        tuttiRepository.save(tutti3);
        Musician violin3 = new Musician("Simos", "Aering", 30, "Violin", "Principal", tutti3);
        musicianRepository.save(violin3);
        Symphony symphony3 = new Symphony("Shostakovich", 15, "D Major", "152");
        symphonyRepository.save(symphony3);



        symphony.addMusician(leader);
        symphony.addMusician(violin2);
        symphony.addMusician(violin3);
    }
}
