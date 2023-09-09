package com.sstec.qgql.mapper;

import com.sstec.qgql.App;
import com.sstec.qgql.model.entity.Application;
import com.sstec.qgql.model.gql.RootGQL;
import graphql.schema.DataFetchingEnvironment;
import io.smallrye.graphql.api.Context;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityGraph;
import jakarta.persistence.EntityManager;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@ApplicationScoped
public class RootMapper {


    @Inject
    Context context;

    @Inject
    EntityManager em;

    /**
     * jakarta.persistence.fetchgraph -> all relationships are fetched lazy regardless of annotation
     * and only provided attribute nodes are loaded
     * jakarta.persistence.loadgraph -> opposite, load all entities eagerly
     **/
    public RootGQL getRoot(Long applicationId) {
        DataFetchingEnvironment dfe = context.unwrap(DataFetchingEnvironment.class);
        boolean withBeneficiaries = dfe.getSelectionSet().contains("applications/beneficiaries");

        EntityGraph<Application> entityGraph = em.createEntityGraph(Application.class);
        entityGraph.addAttributeNodes("id");
        if (withBeneficiaries) {
            entityGraph.addAttributeNodes("beneficiaries");
        }

        Application app = em.createQuery("select a from Application a where a.id = :id", Application.class)
                .setParameter("id", applicationId)
                .setHint("jakarta.persistence.fetchgraph", entityGraph)
                .getSingleResult();



        RootGQL rootGQL = new RootGQL();
        rootGQL.applications = List.of(app);

        return rootGQL;
    }


}
