package com.sstec.qgql.model.entity.lead;

import jakarta.persistence.*;
import org.hibernate.validator.constraints.Length;

@Entity
public class LeadComment {

    private Long id;
    @Length(min = 3)
    private String comment;
    public Lead lead;

    @Id
    @SequenceGenerator(name = "leadCommentSeq", sequenceName = "lead_comment_id_seq", allocationSize = 1, initialValue = 1)
    @GeneratedValue(generator = "leadCommentSeq")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    @ManyToOne
    @JoinColumn(name = "lead_id")
    public Lead getLead() {
        return lead;
    }

    public void setLead(Lead lead) {
        this.lead = lead;
    }
}
