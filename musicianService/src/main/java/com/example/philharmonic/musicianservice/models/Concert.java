package com.example.philharmonic.musicianservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.OffsetDateTime;
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
    private OffsetDateTime details;
//
//    @Column(name = "time")
//    private String time;

//    @JsonIgnoreProperties(value = "concert")
//    @ManyToMany(mappedBy = "concert", fetch = FetchType.LAZY)
//    @JoinTable(
//            name = "concerts_compositions",
//            joinColumns = {@JoinColumn(
//                    name = "concert_id",
//                    nullable = false,
//                    updatable = false)
//            },
//            inverseJoinColumns = {@JoinColumn(
//                    name = "composition_id",
//                    nullable = false,
//                    updatable = false)
//            }
//    )
//    private List<Composition> compositions;

    public Concert(String title, String venue, OffsetDateTime details) {
        this.title = title;
        this.venue = venue;
        this.details = details;
//        this.time = time;
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

    public OffsetDateTime getDetails() {
        return details;
    }

    public void setDetails(OffsetDateTime details) {
        this.details = details;
    }


    //
//    public List<Composition> getCompositions() {
//        return compositions;
//    }
//
//    public void setCompositions(List<Composition> compositions) {
//        this.compositions = compositions;
//    }
//
//    public void addComposition(Composition composition) {
//        this.compositions.add(composition);
//
//    }
}