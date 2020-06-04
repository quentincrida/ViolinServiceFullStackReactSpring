package com.example.philharmonic.musicianservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="tuttis")

public class Tutti {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    //prevent recursion with @JsonBackReference
    @JsonIgnoreProperties(value="tutti")
//    @JsonBackReference
    @OneToMany(mappedBy = "tutti", fetch = FetchType.LAZY)
    private List<Musician>  musicians;

    public Tutti(String name) {
        this.name = name;
//        this.tuttis = new ArrayList<Violin>();
    }
    public Tutti(){}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Musician> getMusicians() {
        return musicians;
    }

    public void setMusicians(List<Musician> musicians) {
        this.musicians = musicians;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
