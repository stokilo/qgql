package com.sstec.qgql.mapper;

import com.sstec.qgql.model.entity.lead.Lead;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

import java.time.LocalDateTime;


@ApplicationScoped
public class LeadService {

    @Inject
    EntityManager em;

    @Transactional
    public Lead createLead(@Valid Lead lead) {
        lead.setStatus("new");
        lead.setCreationDate(LocalDateTime.now());
        em.persist(lead);
        return lead;
    }
}
