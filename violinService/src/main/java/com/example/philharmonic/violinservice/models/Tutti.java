package com.example.philharmonic.violinservice.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
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
    @JsonIgnore
//    @JsonBackReference
    @OneToMany(mappedBy = "tutti")
    private List<Violin> tuttis;

    public Tutti(String name) {
        this.name = name;
        this.tuttis = new ArrayList<Violin>();
    }
    public Tutti(){}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Violin> getFirstViolins() {
        return tuttis;
    }

    public void setFirstViolins(List<Violin> tuttis) {
        this.tuttis = tuttis;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
