package com.sstec.qgql.model.gql;

import com.sstec.qgql.model.generated.tables.pojos.Application;
import com.sstec.qgql.model.generated.tables.pojos.Beneficiary;
import com.sstec.qgql.model.generated.tables.pojos.Config;
import com.sstec.qgql.model.generated.tables.pojos.ConfigItem;

import java.util.ArrayList;
import java.util.List;

public class ConfigGQL extends Config {
    public List<ConfigItem> items = new ArrayList<>();
}
