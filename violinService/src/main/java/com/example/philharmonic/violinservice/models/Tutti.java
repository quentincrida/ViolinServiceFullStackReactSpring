package com.example.philharmonic.violinservice.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
    @JsonIgnoreProperties(value="tutti")
//    @JsonBackReference
    @OneToMany(mappedBy = "tutti", fetch = FetchType.LAZY)
    private List<Violin>  violins;

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

//    public List<Violin> getFirstViolins() {
//        return violins;
//    }

//    public void setFirstViolins(List<Violin> violins) {
//        this.violins = violins;
//    }

    public List<Violin> getViolins() {
        return violins;
    }

    public void setViolins(List<Violin> violins) {
        this.violins = violins;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
