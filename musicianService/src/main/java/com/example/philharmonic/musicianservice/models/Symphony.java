package com.example.philharmonic.musicianservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "symphonies")

public class Symphony {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="composer")
    private String composer;

    @Column(name="opus")
    private int opus;

    @JsonIgnoreProperties(value="symphonies")
    @ManyToMany
    @JoinTable(
           name = "musicians_symphonies",
           joinColumns = {@JoinColumn(name = "symphony_id",
           nullable = false, updatable = false)
           },
           inverseJoinColumns = {@JoinColumn(name = "musician_id",
           nullable = false, updatable = false)
           })

    private List<Musician> musicians;



    public void setMusicians(List<Musician> musician) {
        this.musicians = musicians;
    }

    public Symphony(String composer, int opus) {
        this.composer = composer;
        this.opus = opus;
        this.musicians  = new ArrayList<Musician>();
    }

    public Symphony(){}

    public String getComposer() {
        return composer;
    }

    public void setComposer(String composer) {
        this.composer = composer;
    }

    public int getOpus() {
        return opus;
    }

    public void setOpus(int opus) {
        this.opus = opus;
    }

    public List<Musician> getMusicians() {
        return musicians;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void addMusician(Musician musician){
        this.musicians.add(musician);
    }
}
