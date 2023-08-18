package com.sstec.qgql.model.entity;


import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Transient;

@Entity(name = "movie")
public class Movie extends PanacheEntity {
    public Long id;
    public String title;
    public String year;
    @Transient
    public Director director;
}
