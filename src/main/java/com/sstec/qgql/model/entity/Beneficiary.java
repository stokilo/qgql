package com.sstec.qgql.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

@Entity
public class Beneficiary {

    private Long id;
    private String firstName;

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
}
