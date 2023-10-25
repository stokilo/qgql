package com.sstec.qgql.model.entity.lead;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Lead {

    private Long id;
    private String leadNr;
    private Set<LeadComment> comments = new HashSet<>();

    @Id
    @SequenceGenerator(name = "leadSeq", sequenceName = "lead_id_seq", allocationSize = 1, initialValue = 1)
    @GeneratedValue(generator = "leadSeq")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @OneToMany(mappedBy = "lead", cascade = CascadeType.ALL, orphanRemoval = true)
    public Set<LeadComment> getComments() {
        return comments;
    }

    public void setComments(Set<LeadComment> leadComments) {
        this.comments = leadComments;
    }
}
