package com.example.philharmonic.musicianservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="concerts")
public class Concert {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "venue")
    private String venue;

    @Column(name = "details")
    private LocalDateTime details;


    @JsonIgnoreProperties(value = "concert")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "concerts_compositions",
            joinColumns = {@JoinColumn(
                    name = "concert_id",
                    nullable = false,
                    updatable = false)
            },
            inverseJoinColumns = {@JoinColumn(
                    name = "composition_id",
                    nullable = false,
                    updatable = false)
            }
    )
    private List<Composition> compositions;

    public Concert(String title, String venue, LocalDateTime details) {
        this.title = title;
        this.venue = venue;
        this.details = details;
        this.compositions = new ArrayList<>();
    }

    public Concert() {
    }

    ;

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

    public String getVenue() {
        return venue;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }

    public LocalDateTime getDetails() {
        return details;
    }

    public void setDetails(LocalDateTime details) {
        this.details = details;
    }

    public List<Composition> getCompositions() {
        return compositions;
    }

    public void setCompositions(List<Composition> compositions) {
        this.compositions = compositions;
    }

    public void addComposition(Composition composition) {
        this.compositions.add(composition);

    }
}