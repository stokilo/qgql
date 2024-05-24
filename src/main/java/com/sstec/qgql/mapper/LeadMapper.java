package com.sstec.qgql.mapper;

import com.sstec.qgql.model.entity.lead.Lead;
import com.sstec.qgql.model.gql.LeadGQL;
import graphql.com.google.common.base.Strings;
import graphql.schema.DataFetchingEnvironment;
import graphql.schema.DataFetchingFieldSelectionSet;
import io.smallrye.graphql.api.Context;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityGraph;
import jakarta.persistence.EntityManager;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Root;

import java.util.List;

import org.hibernate.query.Order;


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

    public LeadGQL getLeads(String order, String status, String term) {
        LeadGQL leadGQL = new LeadGQL();

        DataFetchingEnvironment dfe = context.unwrap(DataFetchingEnvironment.class);
        DataFetchingFieldSelectionSet gqlSelectionSet = dfe.getSelectionSet();

        CriteriaBuilder builder = em.getCriteriaBuilder();
        CriteriaQuery<Lead> criteriaQuery = builder.createQuery(Lead.class);
        Root<Lead> root = criteriaQuery.from(Lead.class);

        if ("asc".equals(order)) {
            criteriaQuery.orderBy(builder.asc(root.get("leadNr")));
        } else if ("desc".equals(order)){
            criteriaQuery.orderBy(builder.desc(root.get("leadNr")));
        }

        if (!Strings.isNullOrEmpty(term)) {
            criteriaQuery.where(builder.like(root.get("leadNr"), "%" + term +"%"));
        }

        if (!Strings.isNullOrEmpty(status)) {
            criteriaQuery.where(builder.equal(root.get("status"), status.toLowerCase()));
        }

        // this is with criteria builder
        if (gqlSelectionSet.contains("leads")) {
            if (gqlSelectionSet.contains("leads/comments")) {
                root.fetch("comments", JoinType.LEFT);
            }
        }
        leadGQL.leads = em.createQuery(criteriaQuery).getResultList();

        // This is with fetch graph approach
//        if (gqlSelectionSet.contains("leads")) {
//            EntityGraph<Lead> entityGraph = em.createEntityGraph(Lead.class);
//            if (gqlSelectionSet.contains("leads/comments")) {
//                entityGraph.addAttributeNodes("comments");
//            }
//
//            leadGQL.leads = em.createQuery("select l from Lead l", Lead.class)
//                    .setHint(HINT_FETCH_GRAPH, entityGraph)
//                    .getResultList();
//        }


        return leadGQL;
    }


}
