package com.sstec.qgql.model.gql;

import com.sstec.qgql.model.generated.tables.pojos.Config;
import com.sstec.qgql.model.generated.tables.pojos.ConfigItem;

import java.util.ArrayList;
import java.util.List;

public class ConfigGQL extends Config {
    public List<ConfigItemGQL> items = new ArrayList<>();

    public ConfigGQL(Config config, List<ConfigItemGQL> items) {
        super(config);
        this.items = items;
    }

    public ConfigGQL(Integer id, String configName, String contribution, String frequency) {
        super(id, configName, contribution, frequency);
    }
}
