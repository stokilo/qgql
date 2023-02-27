package com.sstec.qgql.model.gql;

public class Ally implements Character, SearchResult{

    public String name;
    public String surname;
    public Hero partner;

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }
}
