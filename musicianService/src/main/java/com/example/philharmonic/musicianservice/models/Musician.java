package com.example.philharmonic.musicianservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="musicians")

public class Musician implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="age")
    private int age;

    @Column(name="instrument")
    private String instrument;

    @Column(name="position")
    private String position;

//new jsonignore
    @JsonIgnoreProperties(value="musicians")
    @ManyToOne
    @JoinColumn(name="tutti_id", nullable = false)
    private Tutti tutti;

    @JsonIgnoreProperties(value="musicians")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            joinColumns = {@JoinColumn(
                    name = "musician_id",
                    nullable = false, updatable = false)
            },
            inverseJoinColumns = { @JoinColumn(
                    name = "composition_id",
                    nullable = false,
                    updatable = false )
            }
    )
    private List<Composition> compositions;

    public Musician(String firstName, String lastName, int age, String instrument, String position, Tutti tutti) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.instrument = instrument;
        this.position = position;
        this.tutti = tutti;
        this.compositions = new ArrayList<>();
    }
    public Musician(){}

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getInstrument() {
        return instrument;
    }

    public void setInstrument(String instrument) {
        this.instrument = instrument;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Tutti getTutti() {
        return tutti;
    }

    public void setTutti(Tutti tutti) {
        this.tutti = tutti;
    }

    public List<Composition> getCompositions() {return compositions;}

    public void setCompositions(List<Composition> compositions) {
        this.compositions = compositions;
    }



    public void addComposition(Composition composition){
        this.compositions.add(composition);
    }
}
