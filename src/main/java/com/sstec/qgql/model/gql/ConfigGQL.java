package com.sstec.qgql.model.gql;

import com.sstec.qgql.model.generated.tables.pojos.Config;
import com.sstec.qgql.model.generated.tables.pojos.ConfigItem;

import java.util.ArrayList;
import java.util.List;

public class ConfigGQL extends Config {
    public List<ConfigItem> items = new ArrayList<>();

    public ConfigGQL(Config config, List<ConfigItem> items) {
        super(config);
        this.items = items;
    }

    public ConfigGQL(Integer id, String configName) {
        super(id, configName);
    }

    public ConfigGQL() {
        super();
    }

    public ConfigGQL(Config value) {
        super(value);
    }
}
