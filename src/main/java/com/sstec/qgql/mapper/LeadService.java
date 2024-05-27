package com.sstec.qgql.mapper;

import com.sstec.qgql.model.entity.lead.Lead;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Valid;
import jakarta.validation.Validator;

import java.time.LocalDateTime;
import java.util.Set;


@ApplicationScoped
public class LeadService {

    @Inject
    EntityManager em;

    @Inject
    Validator validator;

    @Transactional
    public Lead createLead(@Valid Lead lead) {

        if ("John".equals(lead.getFirstName())) {
            throw new LeadCreationException("Sorry, we don't accept more Johns");
        }

        lead.setStatus("new");
        lead.setCreationDate(LocalDateTime.now());
        em.persist(lead);
        return lead;
    }
}
