package com.sstec.qgql.model.gql;


import com.sstec.qgql.model.entity.Application;
import com.sstec.qgql.model.entity.Config;

import java.util.ArrayList;
import java.util.List;

public class RootGQL {

    public String test;
    public List<Application> applications = new ArrayList<>();
    public Config config;
}
