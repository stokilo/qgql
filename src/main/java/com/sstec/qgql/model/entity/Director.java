package com.sstec.qgql.model.entity;


import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;

@Entity(name = "director")
public class Director extends PanacheEntity {
    public Long id;
    public String name;
}
