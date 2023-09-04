package com.sstec.qgql.mapper;

import com.sstec.qgql.model.gql.RootGQL;
import io.smallrye.graphql.api.Context;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;


@ApplicationScoped
public class RootMapper {

    @Inject
    Context context;

    public RootGQL getRoot(Long applicationId) {
        return new RootGQL();
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
