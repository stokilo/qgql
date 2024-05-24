package com.sstec.qgql.api;

import com.sstec.qgql.mapper.LeadMapper;
import com.sstec.qgql.mapper.LeadService;
import com.sstec.qgql.model.entity.lead.Lead;
import com.sstec.qgql.model.gql.LeadGQL;
import jakarta.inject.Inject;
import org.eclipse.microprofile.graphql.*;

@GraphQLApi
public class LeadGQLResource {

    @Inject
    LeadService leadService;

     @Inject
    LeadMapper leadMapper;

    @Query("lead")
    @Description("Get a Films from a galaxy far far away")
    public LeadGQL getLeadGQL(@Name("order") @DefaultValue("asc") String order) {
        return leadMapper.getLeads(order);
    }

    @Mutation
    public Lead createLead(Lead lead) {
        return leadService.createLead(lead);
    }
}
