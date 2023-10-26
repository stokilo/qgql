package com.sstec.qgql.model.entity.lead;

import jakarta.persistence.*;
import jakarta.validation.Valid;
import org.hibernate.validator.constraints.Length;

import java.time.LocalTime;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Lead {

    private Long id;
    @Length(min = 3)
    private String leadNr;

    @Length(min = 3)
    private String status;

    @Length(min = 3)
    private String email;

    @Length(min = 3)
    private String firstName;

    private LocalTime creationDate;

    @Length(min = 3)
    private String lastName;


    @Valid
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

    public String getLeadNr() {
        return leadNr;
    }

    public void setLeadNr(String leadNr) {
        this.leadNr = leadNr;
    }

    @OneToMany(mappedBy = "lead", cascade = CascadeType.ALL, orphanRemoval = true)
    public Set<LeadComment> getComments() {
        return comments;
    }

    public void setComments(Set<LeadComment> leadComments) {
        for (LeadComment comment: leadComments) {
            comment.setLead(this);
        }

        this.comments = leadComments;
    }
}
