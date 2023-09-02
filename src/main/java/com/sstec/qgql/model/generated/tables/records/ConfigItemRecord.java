/*
 * This file is generated by jOOQ.
 */
package com.sstec.qgql.model.generated.tables.records;


import com.sstec.qgql.model.generated.tables.ConfigItem;

import org.jooq.Field;
import org.jooq.Record1;
import org.jooq.Record4;
import org.jooq.Row4;
import org.jooq.impl.UpdatableRecordImpl;


/**
 * This class is generated by jOOQ.
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class ConfigItemRecord extends UpdatableRecordImpl<ConfigItemRecord> implements Record4<Integer, Integer, String, String> {

    private static final long serialVersionUID = 1L;

    /**
     * Setter for <code>public.config_item.id</code>.
     */
    public void setId(Integer value) {
        set(0, value);
    }

    /**
     * Getter for <code>public.config_item.id</code>.
     */
    public Integer getId() {
        return (Integer) get(0);
    }

    /**
     * Setter for <code>public.config_item.config_id</code>.
     */
    public void setConfigId(Integer value) {
        set(1, value);
    }

    /**
     * Getter for <code>public.config_item.config_id</code>.
     */
    public Integer getConfigId() {
        return (Integer) get(1);
    }

    /**
     * Setter for <code>public.config_item.config_key</code>.
     */
    public void setConfigKey(String value) {
        set(2, value);
    }

    /**
     * Getter for <code>public.config_item.config_key</code>.
     */
    public String getConfigKey() {
        return (String) get(2);
    }

    /**
     * Setter for <code>public.config_item.config_value</code>.
     */
    public void setConfigValue(String value) {
        set(3, value);
    }

    /**
     * Getter for <code>public.config_item.config_value</code>.
     */
    public String getConfigValue() {
        return (String) get(3);
    }

    // -------------------------------------------------------------------------
    // Primary key information
    // -------------------------------------------------------------------------

    @Override
    public Record1<Integer> key() {
        return (Record1) super.key();
    }

    // -------------------------------------------------------------------------
    // Record4 type implementation
    // -------------------------------------------------------------------------

    @Override
    public Row4<Integer, Integer, String, String> fieldsRow() {
        return (Row4) super.fieldsRow();
    }

    @Override
    public Row4<Integer, Integer, String, String> valuesRow() {
        return (Row4) super.valuesRow();
    }

    @Override
    public Field<Integer> field1() {
        return ConfigItem.CONFIG_ITEM.ID;
    }

    @Override
    public Field<Integer> field2() {
        return ConfigItem.CONFIG_ITEM.CONFIG_ID;
    }

    @Override
    public Field<String> field3() {
        return ConfigItem.CONFIG_ITEM.CONFIG_KEY;
    }

    @Override
    public Field<String> field4() {
        return ConfigItem.CONFIG_ITEM.CONFIG_VALUE;
    }

    @Override
    public Integer component1() {
        return getId();
    }

    @Override
    public Integer component2() {
        return getConfigId();
    }

    @Override
    public String component3() {
        return getConfigKey();
    }

    @Override
    public String component4() {
        return getConfigValue();
    }

    @Override
    public Integer value1() {
        return getId();
    }

    @Override
    public Integer value2() {
        return getConfigId();
    }

    @Override
    public String value3() {
        return getConfigKey();
    }

    @Override
    public String value4() {
        return getConfigValue();
    }

    @Override
    public ConfigItemRecord value1(Integer value) {
        setId(value);
        return this;
    }

    @Override
    public ConfigItemRecord value2(Integer value) {
        setConfigId(value);
        return this;
    }

    @Override
    public ConfigItemRecord value3(String value) {
        setConfigKey(value);
        return this;
    }

    @Override
    public ConfigItemRecord value4(String value) {
        setConfigValue(value);
        return this;
    }

    @Override
    public ConfigItemRecord values(Integer value1, Integer value2, String value3, String value4) {
        value1(value1);
        value2(value2);
        value3(value3);
        value4(value4);
        return this;
    }

    // -------------------------------------------------------------------------
    // Constructors
    // -------------------------------------------------------------------------

    /**
     * Create a detached ConfigItemRecord
     */
    public ConfigItemRecord() {
        super(ConfigItem.CONFIG_ITEM);
    }

    /**
     * Create a detached, initialised ConfigItemRecord
     */
    public ConfigItemRecord(Integer id, Integer configId, String configKey, String configValue) {
        super(ConfigItem.CONFIG_ITEM);

        setId(id);
        setConfigId(configId);
        setConfigKey(configKey);
        setConfigValue(configValue);
        resetChangedOnNotNull();
    }

    /**
     * Create a detached, initialised ConfigItemRecord
     */
    public ConfigItemRecord(com.sstec.qgql.model.generated.tables.pojos.ConfigItem value) {
        super(ConfigItem.CONFIG_ITEM);

        if (value != null) {
            setId(value.getId());
            setConfigId(value.getConfigId());
            setConfigKey(value.getConfigKey());
            setConfigValue(value.getConfigValue());
            resetChangedOnNotNull();
        }
    }
}
