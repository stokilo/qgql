package com.sstec.qgql.model.entity.lead;

import jakarta.persistence.*;
import jakarta.validation.Valid;
import org.hibernate.validator.constraints.Length;

import java.time.LocalDateTime;
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
    @Length(min = 3)
    private String lastName;
    private LocalDateTime creationDate;

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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setComments(Set<LeadComment> leadComments) {
        for (LeadComment comment : leadComments) {
            comment.setLead(this);
        }

        this.comments = leadComments;
    }
}
