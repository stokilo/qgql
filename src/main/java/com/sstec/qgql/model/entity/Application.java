package com.sstec.qgql.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

@Entity
public class Application {

    private Long id;
    private String applicationNr;

    @Id
    @SequenceGenerator(name = "applicationSeq", sequenceName = "application_id_seq", allocationSize = 1, initialValue = 1)
    @GeneratedValue(generator = "applicationSeq")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getApplicationNr() {
        return applicationNr;
    }

    public void setApplicationNr(String applicationNr) {
        this.applicationNr = applicationNr;
    }
}
