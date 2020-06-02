package com.example.philharmonic.violinservice.components;

import com.example.philharmonic.violinservice.models.Symphony;
import com.example.philharmonic.violinservice.models.Tutti;
import com.example.philharmonic.violinservice.models.Musician;
import com.example.philharmonic.violinservice.repositories.SymphonyRepository;
import com.example.philharmonic.violinservice.repositories.TuttiRepository;
import com.example.philharmonic.violinservice.repositories.MusicianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    MusicianRepository musicianRepository;

    @Autowired
    TuttiRepository tuttiRepository;

    @Autowired
    SymphonyRepository symphonyRepository;

    public DataLoader(){

    }
    public void run(ApplicationArguments args) {
        Tutti viola = new Tutti("Violas");
        tuttiRepository.save(viola);

        Tutti violin2 = new Tutti("First Violins");
        tuttiRepository.save(violin2);

        Tutti violin3 = new Tutti("Second Violins");
        tuttiRepository.save(violin3);

        Tutti cello = new Tutti("Violoncellos");
        tuttiRepository.save(cello);

        Tutti bass = new Tutti("Basses");
        tuttiRepository.save(bass);

        Musician quentin = new Musician("Quentin", "Crida", 48,"Viola", "Principal", viola);
        musicianRepository.save(quentin);

        Musician este = new Musician("Este", "Visser", 43,"Violin", "Principal", violin2);
        musicianRepository.save(este);

        Musician emile = new Musician("Emile", "de Roubaix", 43,"Violin", "Rank and File", violin3);
        musicianRepository.save(emile);

        Musician peter = new Musician("Peter", "Martens", 48,"Cello", "Sub Principal", cello);
        musicianRepository.save(peter);

        Musician leon = new Musician("Leon", "Bosch", 55, "Bass", "Principal", bass);
        musicianRepository.save(leon);

        Symphony beethoven = new Symphony("Beethoven", 151);
        symphonyRepository.save(beethoven);

        Symphony mozart = new Symphony("Mozart", 70);
        symphonyRepository.save(mozart);

        Symphony haydn = new Symphony("Haydn", 1);
        symphonyRepository.save(haydn);

        Symphony shostakovich = new Symphony("Shostakovich", 100);
        symphonyRepository.save(shostakovich);

        Symphony vivaldi = new Symphony("Vivaldi", 12);
        symphonyRepository.save(vivaldi);

        quentin.addSymphony(beethoven);
        quentin.addSymphony(mozart);
        musicianRepository.save(quentin);

        haydn.addMusician(este);
        symphonyRepository.save(haydn);

        vivaldi.addMusician(emile);
        vivaldi.addMusician(peter);
        symphonyRepository.save(vivaldi);

        shostakovich.addMusician(leon);
        shostakovich.addMusician(quentin);
        symphonyRepository.save(shostakovich);

        este.addSymphony(shostakovich);
        este.addSymphony(haydn);
        musicianRepository.save(este);

//        bass.addSymphony(shostakovich);
//        bass.addSymphony(beethoven);
//        violinRepository.save(bass);
    }
}
