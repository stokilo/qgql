package com.sstec.qgql.model.entity;

import jakarta.persistence.*;

@Entity
public class Beneficiary {

    private Long id;
    private String firstName;
    public Application application;

    @Id
    @SequenceGenerator(name = "beneficiarySeq", sequenceName = "beneficiary_id_seq", allocationSize = 1, initialValue = 1)
    @GeneratedValue(generator = "beneficiarySeq")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @ManyToOne
    @JoinColumn(name = "application_id")
    public Application getApplication() {
        return application;
    }

    public void setApplication(Application application) {
        this.application = application;
    }
}
