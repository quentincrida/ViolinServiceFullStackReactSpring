package com.example.philharmonic.violinservice.components;

import com.example.philharmonic.violinservice.models.Symphony;
import com.example.philharmonic.violinservice.models.Tutti;
import com.example.philharmonic.violinservice.models.Violin;
import com.example.philharmonic.violinservice.repositories.SymphonyRepository;
import com.example.philharmonic.violinservice.repositories.TuttiRepository;
import com.example.philharmonic.violinservice.repositories.ViolinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    ViolinRepository violinRepository;

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

        Violin quentin = new Violin("Quentin", "Crida", 48, viola);
        violinRepository.save(quentin);

        Violin este = new Violin("Este", "Visser", 43, violin2);
        violinRepository.save(este);

        Violin emile = new Violin("Emile", "de Roubaix", 43, violin3);
        violinRepository.save(emile);

        Violin peter = new Violin("Peter", "Martens", 48, cello);
        violinRepository.save(peter);

        Violin leon = new Violin("Leon", "Bosch", 55, bass);
        violinRepository.save(leon);

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
        violinRepository.save(quentin);

        haydn.addViolin(este);
        symphonyRepository.save(haydn);

        vivaldi.addViolin(emile);
        vivaldi.addViolin(peter);
        symphonyRepository.save(vivaldi);

        shostakovich.addViolin(leon);
        shostakovich.addViolin(quentin);
        symphonyRepository.save(shostakovich);

        este.addSymphony(shostakovich);
        este.addSymphony(haydn);
        violinRepository.save(este);

//        bass.addSymphony(shostakovich);
//        bass.addSymphony(beethoven);
//        violinRepository.save(bass);
    }
}
