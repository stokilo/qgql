package com.sstec.qgql.mapper;

import com.sstec.qgql.model.entity.Application;
import com.sstec.qgql.model.entity.lead.Lead;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;


@ApplicationScoped
public class LeadService {

    @Inject
    EntityManager em;

    @Transactional
    public Lead createLead(Lead lead) {
        em.persist(lead);
        return lead;
    }
}
