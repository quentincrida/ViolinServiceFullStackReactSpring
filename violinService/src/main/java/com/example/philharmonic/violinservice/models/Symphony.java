package com.example.philharmonic.violinservice.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
           name = "violins_symphonies",
           joinColumns = {@JoinColumn(name = "symphony_id",
           nullable = false, updatable = false)
           },
           inverseJoinColumns = {@JoinColumn(name = "violin_id",
           nullable = false, updatable = false)
           })

    private List<Violin> violins;



    public void setViolins(List<Violin> violins) {
        this.violins = violins;
    }

    public Symphony(String composer, int opus) {
        this.composer = composer;
        this.opus = opus;
        this.violins  = new ArrayList<Violin>();
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

    public List<Violin> getViolins() {
        return violins;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void addViolin(Violin violin){
        this.violins.add(violin);
    }
}
