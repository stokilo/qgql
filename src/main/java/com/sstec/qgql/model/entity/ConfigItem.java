package com.sstec.qgql.model.entity;

import jakarta.persistence.*;

@Entity
public class ConfigItem {

    private Long id;
    private String key;
    private String value;
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

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public void setConfig(Config config) {
        this.config = config;
    }
}
