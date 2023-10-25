package com.sstec.qgql.model.gql;


import com.sstec.qgql.model.entity.Application;
import com.sstec.qgql.model.entity.Config;
import com.sstec.qgql.model.entity.lead.Lead;

import java.util.ArrayList;
import java.util.List;

public class RootGQL {
    public List<Application> applications = new ArrayList<>();
    public Config config;

    public List<Lead> leads = new ArrayList();
}
