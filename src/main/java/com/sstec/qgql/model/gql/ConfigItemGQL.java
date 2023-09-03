package com.sstec.qgql.model.gql;

import com.sstec.qgql.model.generated.tables.pojos.ConfigItem;
import com.sstec.qgql.model.generated.tables.records.ConfigItemRecord;
import org.apache.commons.beanutils.PropertyUtilsBean;
import org.jboss.logging.Logger;


public class ConfigItemGQL extends ConfigItem {
    private static final Logger LOG = Logger.getLogger(ConfigItemGQL.class);

    public ConfigItemGQL(ConfigItemRecord configItemRecord) {
        try {
            new PropertyUtilsBean().copyProperties(this, configItemRecord);
        } catch (Exception e) {
            LOG.error("Exception while copying properties", e);
        }
    }
}
