package com.example.philharmonic.musicianservice.components;

import com.example.philharmonic.musicianservice.models.Composition;
//import com.example.philharmonic.musicianservice.models.Concert;
import com.example.philharmonic.musicianservice.models.Concert;
import com.example.philharmonic.musicianservice.models.Tutti;
import com.example.philharmonic.musicianservice.models.Musician;
import com.example.philharmonic.musicianservice.repositories.CompositionRepository;
import com.example.philharmonic.musicianservice.repositories.ConcertRepository;
import com.example.philharmonic.musicianservice.repositories.TuttiRepository;
import com.example.philharmonic.musicianservice.repositories.MusicianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    MusicianRepository musicianRepository;

    @Autowired
    TuttiRepository tuttiRepository;

    @Autowired
    CompositionRepository compositionRepository;

    @Autowired
    ConcertRepository concertRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {


        Tutti violin1 = new Tutti("First Violins");
        tuttiRepository.save(violin1);

        Tutti violin2 = new Tutti("Second Violins");
        tuttiRepository.save(violin2);

        Tutti viola = new Tutti("Violas");
        tuttiRepository.save(viola);

        Tutti cello = new Tutti("Violoncellos");
        tuttiRepository.save(cello);

        Tutti bass = new Tutti("Basses");
        tuttiRepository.save(bass);

        Tutti flute = new Tutti("Flutes");
        tuttiRepository.save(flute);

        Tutti trumpet = new Tutti("Trumpets");
        tuttiRepository.save(trumpet);

        Tutti percussion = new Tutti("Percussion");
        tuttiRepository.save(percussion);

        Musician quentin = new Musician("Seb", "Crida", 48, "Viola", "Principal", viola);
        musicianRepository.save(quentin);

        Musician este = new Musician("Virginia", "Visser", 43, "Violin", "Principal", violin1);
        musicianRepository.save(este);

        Musician emile = new Musician("Steven", "de Roubaix", 43, "Violin", "Rank and File", violin2);
        musicianRepository.save(emile);

        Musician peter = new Musician("Mary", "Martens", 48, "Cello", "Sub Principal", cello);
        musicianRepository.save(peter);

        Musician leon = new Musician("Bob", "Bosch", 55, "Bass", "Principal", bass);
        musicianRepository.save(leon);

        Musician debbie = new Musician("Debbie", "Carousel", 25, "Flute", "Third Flute", flute);
        musicianRepository.save(debbie);

        Musician mark = new Musician("Mark", "Johnson", 55, "Trumpet", "Principal", trumpet);
        musicianRepository.save(mark);

        Musician bill = new Musician("Bill", "Belgium", 55, "Timpani", "Principal", percussion);
        musicianRepository.save(bill);

        Composition beethoven = new Composition("Beethoven", "Symphony Nr 5", "C minor", "67");
        compositionRepository.save(beethoven);

        Composition mozart = new Composition("Mozart", "Sinfonia Concertante", "E flat Major", "K.364");
        compositionRepository.save(mozart);

        Composition haydn = new Composition("Haydn", "Symphony Nr 45, The Farewell", "F sharp minor", "Hb: ?");
        compositionRepository.save(haydn);

        Composition shostakovich = new Composition("Shostakovich", "Symphony Nr 5", "D minor", "47");
        compositionRepository.save(shostakovich);

        Composition vivaldi = new Composition("Vivaldi", "Le Quattro Stagioni", "C Major", "RV: 456");
        compositionRepository.save(vivaldi);

        Concert tchaikovsky = new Concert("Ballet Music", "Usher Hall", OffsetDateTime.of(2020,6,26,19,45,0,0, ZoneOffset.ofHours(+1)));
        concertRepository.save(tchaikovsky);

        Concert ravel = new Concert("La Valse", "City Halls, Glasgow", OffsetDateTime.of(2020,8,27,19,45,0,0, ZoneOffset.ofHours(+1)));
        concertRepository.save(ravel);

        quentin.addComposition(beethoven);
        quentin.addComposition(mozart);
        musicianRepository.save(quentin);

        haydn.addMusician(este);
        compositionRepository.save(haydn);

        vivaldi.addMusician(emile);
        vivaldi.addMusician(peter);
        compositionRepository.save(vivaldi);

        shostakovich.addMusician(leon);
        shostakovich.addMusician(quentin);
        compositionRepository.save(shostakovich);

        este.addComposition(shostakovich);
        este.addComposition(beethoven);
        musicianRepository.save(este);

    }
}
