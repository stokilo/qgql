package com.sstec.qgql.api;

import com.sstec.qgql.mapper.LeadMapper;
import com.sstec.qgql.mapper.LeadService;
import com.sstec.qgql.model.entity.lead.Lead;
import com.sstec.qgql.model.gql.LeadGQL;
import jakarta.inject.Inject;
import jakarta.validation.Valid;
import org.eclipse.microprofile.graphql.Description;
import org.eclipse.microprofile.graphql.GraphQLApi;
import org.eclipse.microprofile.graphql.Mutation;
import org.eclipse.microprofile.graphql.Query;

@GraphQLApi
public class LeadGQLResource {

    @Inject
    LeadService leadService;

     @Inject
    LeadMapper leadMapper;

    @Query("getLeads")
    @Description("Get leads")
    public LeadGQL getLeads() {
        return leadMapper.getLeads();
    }

    @Mutation
    public Lead createLead(Lead lead) {
        return leadService.createLead(lead);
    }
}
