package com.sstec.qgql.model.gql;

import com.sstec.qgql.model.generated.tables.pojos.ConfigItem;
import com.sstec.qgql.model.generated.tables.records.ConfigItemRecord;


public class ConfigItemGQL extends ConfigItem {

    public ConfigItemGQL(ConfigItemRecord configItemRecord) {
        super(configItemRecord.getId(), configItemRecord.getConfigId(), configItemRecord.getConfigKey(), configItemRecord.getConfigValue());
    }

}
