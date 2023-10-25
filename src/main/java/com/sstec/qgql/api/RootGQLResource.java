package com.sstec.qgql.api;

import com.sstec.qgql.mapper.RootService;
import com.sstec.qgql.mapper.RootMapper;
import com.sstec.qgql.model.entity.Application;
import com.sstec.qgql.model.gql.RootGQL;
import jakarta.inject.Inject;
import jakarta.validation.Valid;
import org.eclipse.microprofile.graphql.*;

@GraphQLApi
public class RootGQLResource {

    @Inject
    RootService rootService;

    @Inject
    RootMapper rootMapper;

    @Query("getRoot")
    @Description("Get root state")
    public RootGQL getRoot(@Name("applicationId") Long applicationId) {
        return rootMapper.getRoot(applicationId);
    }

    @Mutation
    public Application createApplication(@Valid Application application) {
        return rootService.createApplication(application);
    }
}
