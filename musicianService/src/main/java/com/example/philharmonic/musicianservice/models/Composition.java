package com.example.philharmonic.musicianservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.swing.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "compositions")

public class Composition {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="composer")
    private String composer;

    @Column(name="title")
    private String title;

    @Column(name="key")
    private String key;

    @Column(name="opus")
    private String opus;

    @JsonIgnoreProperties(value="compositions")
    @ManyToMany
    @JoinTable(
           name = "musicians_compositions",
           joinColumns = {@JoinColumn(name = "composition_id",
           nullable = false, updatable = false)
           },
           inverseJoinColumns = {@JoinColumn(name = "musician_id",
           nullable = false, updatable = false)
           })

    private List<Musician> musicians;



    public void setMusicians(List<Musician> musician) {
        this.musicians = musicians;
    }

    public Composition(String composer, String title, String key, String opus) {
        this.composer = composer;
        this.title = title;
        this.key = key;
        this.opus = opus;
        this.musicians  = new ArrayList<Musician>();
    }

    public Composition(){}

    public String getComposer() {
        return composer;
    }

    public void setComposer(String composer) {
        this.composer = composer;
    }

    public String getOpus() {
        return opus;
    }

    public void setOpus(String opus) {
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public void addMusician(Musician musician){
        this.musicians.add(musician);
    }
}
