package com.sstec.qgql.mapper;

import com.sstec.qgql.model.entity.Application;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;


@ApplicationScoped
public class RootService {

    @Inject
    EntityManager em;

    @Transactional
    public Application createApplication(Application application) {
        em.persist(application);
        return application;
    }
}
