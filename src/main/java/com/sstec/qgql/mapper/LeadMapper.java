package com.sstec.qgql.mapper;

import com.sstec.qgql.model.gql.LeadGQL;
import io.smallrye.graphql.api.Context;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;


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
        return leadGQL;
//
//        DataFetchingEnvironment dfe = context.unwrap(DataFetchingEnvironment.class);
//        DataFetchingFieldSelectionSet gqlSelectionSet = dfe.getSelectionSet();
//
//        if (gqlSelectionSet.contains("applications")) {
//            EntityGraph<Application> entityGraph = em.createEntityGraph(Application.class);
//            if (gqlSelectionSet.contains("applications/beneficiaries")) {
//                entityGraph.addAttributeNodes("beneficiaries");
//            }
//
//            Application app = em.createQuery("select a from Application a where a.id = :id", Application.class)
//                    .setParameter("id", applicationId)
//                    .setHint(HINT_FETCH_GRAPH, entityGraph)
//                    .getSingleResult();
//            rootGQL.applications = List.of(app);
//        }
//
//        if (gqlSelectionSet.contains("config")) {
//            EntityGraph<Config> entityGraph = em.createEntityGraph(Config.class);
//            if (gqlSelectionSet.contains("config/configItems")) {
//                entityGraph.addAttributeNodes("configItems");
//            }
//            rootGQL.config = em.createQuery("select c from Config c", Config.class)
//                    .setHint(HINT_FETCH_GRAPH, entityGraph)
//                    .getSingleResult();
//        }
//
//        return rootGQL;
    }


}
