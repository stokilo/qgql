package com.sstec.qgql.model.entity;


import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity(name = "FAVOURITES")
public class Favourites {
    @Id
    public Long user_id;
    @Transient
    public Movie movie;


}
