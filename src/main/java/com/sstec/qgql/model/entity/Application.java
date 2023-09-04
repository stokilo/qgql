package com.sstec.qgql.model.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.Fetch;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Application {

    private Long id;
    private String applicationNr;
    public Set<Beneficiary> beneficiaries = new HashSet<>();

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

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "application_id")
    public Set<Beneficiary> getBeneficiaries() {
        return beneficiaries;
    }

    public void setBeneficiaries(Set<Beneficiary> beneficiaries) {
        this.beneficiaries = beneficiaries;
    }
}
