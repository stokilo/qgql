package com.sstec.qgql.mapper;

import com.sstec.qgql.model.entity.Application;
import com.sstec.qgql.model.entity.Beneficiary;
import com.sstec.qgql.model.gql.RootGQL;
import graphql.schema.DataFetchingEnvironment;
import io.smallrye.graphql.api.Context;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.ListJoin;
import jakarta.persistence.criteria.Root;


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
//        ListJoin<Application, Beneficiary> beneficiaries = root.join("beneficiaries");


        RootGQL rootGQL = new RootGQL();
        rootGQL.applications = em.createQuery(cq).getResultList();

        return rootGQL;
    }

//    public RootGQL getRoot(Long applicationId) {
//        RootGQL rootGQL = new RootGQL();
//
//        DataFetchingEnvironment dfe = context.unwrap(DataFetchingEnvironment.class);
//        boolean withBeneficiaries = dfe.getSelectionSet().contains("RootGQL.applications/ApplicationGQL.beneficiaries");
//        boolean withConfig = dfe.getSelectionSet().contains("RootGQL.config");
//
//        SelectQuery<?> queryApp = dsl.select(Application.APPLICATION).getQuery();
//        if (withBeneficiaries) {
//            queryApp.addSelect(multiset(
//                    select(Beneficiary.BENEFICIARY)
//                            .from(Beneficiary.BENEFICIARY)
//                            .where(Beneficiary.BENEFICIARY.APPLICATION_ID.eq(Application.APPLICATION.ID))
//            ).as("beneficiaries").convertFrom(r -> r.map(mapping(BeneficiaryGQL::new))));
//        }
//        queryApp.addFrom(Application.APPLICATION);
//        List<ApplicationGQL> applications = queryApp.fetch().into(ApplicationGQL.class);
//
//        if (withConfig) {
//            SelectQuery<?> queryConfig = dsl.select(Config.CONFIG).getQuery();
//            boolean withConfigItems = dfe.getSelectionSet().contains("RootGQL.config/ConfigGQL.items");
//            if (withConfigItems) {
//                queryConfig.addSelect(multiset(
//                        select(ConfigItem.CONFIG_ITEM)
//                                .from(ConfigItem.CONFIG_ITEM)
//                                .where(ConfigItem.CONFIG_ITEM.CONFIG_ID.eq(Config.CONFIG.ID))
//                ).as("items").convertFrom(r -> r.map(mapping(ConfigItemGQL::new))));
//            }
//            queryConfig.addFrom(Config.CONFIG);
//            rootGQL.config = queryConfig.fetchOne().into(ConfigGQL.class);
//        }
//
//
//        rootGQL.applications = applications;
//        return rootGQL;
//    }

}
