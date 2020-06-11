package com.example.philharmonic.musicianservice.components;

import com.example.philharmonic.musicianservice.models.Symphony;
import com.example.philharmonic.musicianservice.models.Tutti;
import com.example.philharmonic.musicianservice.models.Musician;
import com.example.philharmonic.musicianservice.repositories.SymphonyRepository;
import com.example.philharmonic.musicianservice.repositories.TuttiRepository;
import com.example.philharmonic.musicianservice.repositories.MusicianRepository;
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
        Tutti viola = new Tutti( "Violas");
        tuttiRepository.save(viola);

        Tutti violin1 = new Tutti("First Violins");
        tuttiRepository.save(violin1);

        Tutti violin2 = new Tutti("Second Violins");
        tuttiRepository.save(violin2);

        Tutti cello = new Tutti("Violoncellos");
        tuttiRepository.save(cello);

        Tutti bass = new Tutti("Basses");
        tuttiRepository.save(bass);

        Tutti flute = new Tutti( "Flutes");
        tuttiRepository.save(flute);

        Tutti trumpet = new Tutti( "Trumpets");
        tuttiRepository.save(trumpet);

        Tutti percussion = new Tutti("Percussion");
        tuttiRepository.save(percussion);

        Musician quentin = new Musician("Seb", "Crida", 48,"Viola", "Principal", viola);
        musicianRepository.save(quentin);

        Musician este = new Musician("Virginia", "Visser", 43,"Violin", "Principal", violin1);
        musicianRepository.save(este);

        Musician emile = new Musician("Steven", "de Roubaix", 43,"Violin", "Rank and File", violin2);
        musicianRepository.save(emile);

        Musician peter = new Musician("Mary", "Martens", 48,"Cello", "Sub Principal", cello);
        musicianRepository.save(peter);

        Musician leon = new Musician("Bob", "Bosch", 55, "Bass", "Principal", bass);
        musicianRepository.save(leon);

        Symphony beethoven = new Symphony("Beethoven", 5, "C minor", "67");
        symphonyRepository.save(beethoven);

        Symphony mozart = new Symphony("Mozart", 41," C Major", "K.551");
        symphonyRepository.save(mozart);

        Symphony haydn = new Symphony("Haydn", 45, "F sharp minor", "Hb: ?");
        symphonyRepository.save(haydn);

        Symphony shostakovich = new Symphony("Shostakovich", 5, "D minor", "47");
        symphonyRepository.save(shostakovich);

        Symphony vivaldi = new Symphony("Vivaldi", 0, "C Major", "111a");
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
        este.addSymphony(beethoven);
        musicianRepository.save(este);

//        bass.addSymphony(shostakovich);
//        bass.addSymphony(beethoven);
//        violinRepository.save(bass);
    }
}
