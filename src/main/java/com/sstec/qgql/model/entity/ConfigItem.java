package com.sstec.qgql.model.entity;

import jakarta.persistence.*;

@Entity
public class ConfigItem {

    private Long id;
    private String configName;
    public Config config;

    @Id
    @SequenceGenerator(name = "configItemSeq", sequenceName = "config_item_id_seq", allocationSize = 1, initialValue = 1)
    @GeneratedValue(generator = "configItemSeq")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @ManyToOne
    @JoinColumn(name = "config_id")
    public Config getConfig() {
        return config;
    }

    public String getConfigName() {
        return configName;
    }

    public void setConfigName(String configName) {
        this.configName = configName;
    }

    public void setConfig(Config config) {
        this.config = config;
    }
}
