package com.sstec.qgql.mapper;

import com.sstec.qgql.model.generated.tables.Application;
import com.sstec.qgql.model.generated.tables.Beneficiary;
import com.sstec.qgql.model.gql.ApplicationGQL;
import com.sstec.qgql.model.gql.BeneficiaryGQL;
import com.sstec.qgql.model.gql.RootGQL;
import graphql.schema.DataFetchingEnvironment;
import io.smallrye.graphql.api.Context;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.jooq.DSLContext;
import org.jooq.SelectQuery;

import java.util.List;

import static org.jooq.Records.mapping;
import static org.jooq.impl.DSL.multiset;
import static org.jooq.impl.DSL.select;


@ApplicationScoped
public class RootMapper {


    @Inject
    Context context;

    @Inject
    DSLContext dsl;


    public RootGQL getRoot(Long applicationId) {
        DataFetchingEnvironment dfe = context.unwrap(DataFetchingEnvironment.class);
        boolean withBeneficiaries = dfe.getSelectionSet().contains("RootGQL.applications/ApplicationGQL.beneficiaries");

        SelectQuery<?> queryApp = dsl.select(Application.APPLICATION).getQuery();
        if (withBeneficiaries) {
            queryApp.addSelect(multiset(
                    select(Beneficiary.BENEFICIARY)
                            .from(Beneficiary.BENEFICIARY)
                            .where(Beneficiary.BENEFICIARY.APPLICATION_ID.eq(Application.APPLICATION.ID))
            ).as("beneficiaries").convertFrom(r -> r.map(mapping(BeneficiaryGQL::new))));
        }
        queryApp.addFrom(Application.APPLICATION);
        List<ApplicationGQL> applications = queryApp.fetch().into(ApplicationGQL.class);

        RootGQL rootGQL = new RootGQL();
        rootGQL.applications = applications;
        return rootGQL;
    }

}
