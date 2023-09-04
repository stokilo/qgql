package com.sstec.qgql.mapper;

import com.sstec.qgql.model.entity.Application;
import com.sstec.qgql.model.entity.Beneficiary;
import com.sstec.qgql.model.gql.RootGQL;
import graphql.schema.DataFetchingEnvironment;
import io.smallrye.graphql.api.Context;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.persistence.criteria.*;
import jakarta.transaction.Transactional;


@ApplicationScoped
public class RootMapper {

    @Inject
    Context context;

    @Inject
    EntityManager em;

    public RootGQL getRoot(Long applicationId) {
        DataFetchingEnvironment dfe = context.unwrap(DataFetchingEnvironment.class);
        boolean withBeneficiaries = dfe.getSelectionSet().contains("RootGQL.applications/ApplicationGQL.beneficiaries");
        CriteriaBuilder criteriaBuilder = em.getCriteriaBuilder();
        CriteriaQuery<Application> cq = criteriaBuilder.createQuery(Application.class);
        Root<Application> root = cq.from(Application.class);
        if (withBeneficiaries) {
            root.join("beneficiaries");
        }
        RootGQL rootGQL = new RootGQL();
        rootGQL.applications = em.createQuery(cq).getResultList();

        return rootGQL;
    }


}
