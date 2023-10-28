package com.sstec.qgql.model.gql;


import com.sstec.qgql.model.entity.lead.Lead;
import com.sstec.qgql.model.entity.lead.LeadCategory;
import com.sstec.qgql.model.entity.lead.LeadStatus;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class LeadGQL {
    public List<Lead> leads = new ArrayList<>();
    public List<String> statusList = Arrays.stream(LeadStatus.values()).map(Enum::toString).toList();
    public List<String> categoryList = Arrays.stream(LeadCategory.values()).map(Enum::toString).toList();
}
