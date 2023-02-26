package com.sstec.qgql.model;


import java.util.ArrayList;
import java.util.List;


public class Hero implements Character, SearchResult {

    public String name;
    public String surname;
    public Double height;
    public Integer mass;
    public Boolean darkSide;
    public LightSaber lightSaber;
    public List<Integer> episodeIds = new ArrayList<>();

    public String getName() {
        return name;
    }


    public String getSurname() {
        return surname;
    }

}
