package com.sstec.qgql.api;

import com.sstec.qgql.mapper.GraphService;
import com.sstec.qgql.mapper.LeadMapper;
import com.sstec.qgql.mapper.RootMapper;
import com.sstec.qgql.model.entity.Application;
import com.sstec.qgql.model.gql.LeadGQL;
import com.sstec.qgql.model.gql.RootGQL;
import jakarta.inject.Inject;
import jakarta.validation.Valid;
import org.eclipse.microprofile.graphql.*;

@GraphQLApi
public class GQLResource {

    @Inject
    GraphService graphService;

    @Inject
    RootMapper rootMapper;

    @Inject
    LeadMapper leadMapper;

    @Query("getRoot")
    @Description("Get root state")
    public RootGQL getRoot(@Name("applicationId") Long applicationId) {
        return rootMapper.getRoot(applicationId);
    }


    @Query("getLeads")
    @Description("Get leads")
    public LeadGQL getLeads() {
        return leadMapper.getLeads();
    }

    @Mutation
    public Application createApplication(@Valid Application application) {
        return graphService.createApplication(application);
    }
}
