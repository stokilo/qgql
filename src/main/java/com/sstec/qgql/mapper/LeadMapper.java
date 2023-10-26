package com.sstec.qgql.mapper;

import com.sstec.qgql.model.entity.lead.Lead;
import com.sstec.qgql.model.gql.LeadGQL;
import graphql.schema.DataFetchingEnvironment;
import graphql.schema.DataFetchingFieldSelectionSet;
import io.smallrye.graphql.api.Context;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityGraph;
import jakarta.persistence.EntityManager;

import java.util.List;


@ApplicationScoped
public class LeadMapper {
    /**
     * jakarta.persistence.fetchgraph -> all relationships are fetched lazy regardless of annotation
     * and only provided attribute nodes are loaded
     * jakarta.persistence.loadgraph -> opposite, load all entities eagerly
     **/
    private static final String HINT_FETCH_GRAPH = "jakarta.persistence.fetchgraph";

    @Inject
    Context context;

    @Inject
    EntityManager em;

    public LeadGQL getLeads() {
        LeadGQL leadGQL = new LeadGQL();

        DataFetchingEnvironment dfe = context.unwrap(DataFetchingEnvironment.class);
        DataFetchingFieldSelectionSet gqlSelectionSet = dfe.getSelectionSet();

        if (gqlSelectionSet.contains("leads")) {
            EntityGraph<Lead> entityGraph = em.createEntityGraph(Lead.class);
            if (gqlSelectionSet.contains("leads/comments")) {
                entityGraph.addAttributeNodes("comments");
            }

            leadGQL.leads = em.createQuery("select l from Lead l", Lead.class)
                    .setHint(HINT_FETCH_GRAPH, entityGraph)
                    .getResultList();
        }


        return leadGQL;
    }


}
