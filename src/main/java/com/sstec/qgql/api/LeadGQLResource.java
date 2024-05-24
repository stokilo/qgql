package com.sstec.qgql.api;

import com.sstec.qgql.mapper.LeadMapper;
import com.sstec.qgql.mapper.LeadService;
import com.sstec.qgql.model.entity.lead.Lead;
import com.sstec.qgql.model.gql.LeadGQL;
import jakarta.inject.Inject;
import org.eclipse.microprofile.graphql.Description;
import org.eclipse.microprofile.graphql.GraphQLApi;
import org.eclipse.microprofile.graphql.Mutation;
import org.eclipse.microprofile.graphql.Name;
import org.eclipse.microprofile.graphql.Query;

@GraphQLApi
public class LeadGQLResource {

    @Inject
    LeadService leadService;

     @Inject
    LeadMapper leadMapper;

    @Query("lead")
    @Description("Get lead gql root object")
    public LeadGQL getLeadGQL() {
        return leadMapper.getLeads();
    }

//    @Query
//    @Description("Get a Films from a galaxy far far away")
//    public LeadGQL getLeadGQL(@Name("order") int order) {
//        return leadMapper.getLeads(order);
//    }
//
    @Mutation
    public Lead createLead(Lead lead) {
        return leadService.createLead(lead);
    }
}
