package com.sstec.qgql.api;

import com.sstec.qgql.mapper.GraphService;
import com.sstec.qgql.mapper.RootMapper;
import com.sstec.qgql.model.entity.Application;
import com.sstec.qgql.model.gql.RootGQL;
import jakarta.inject.Inject;
import org.eclipse.microprofile.graphql.*;

@GraphQLApi
public class GQLResource {

    @Inject
    GraphService graphService;

    @Inject
    RootMapper rootMapper;

    @Query("getRoot")
    @Description("Get root state")
    public RootGQL getRoot(@Name("applicationId") Long applicationId) {
        return rootMapper.getRoot(applicationId);
    }

    @Mutation
    public Application createApplication(Application application) {
        return graphService.createApplication(application);
    }
}
