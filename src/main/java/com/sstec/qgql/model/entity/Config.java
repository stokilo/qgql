package com.sstec.qgql.model.entity;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Config {

    private Long id;
    private String configId;
    private Set<ConfigItem> configItems = new HashSet<>();

    @Id
    @SequenceGenerator(name = "configSeq", sequenceName = "config_id_seq", allocationSize = 1, initialValue = 1)
    @GeneratedValue(generator = "configSeq")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    @OneToMany(mappedBy = "config", cascade = CascadeType.ALL, orphanRemoval = true)
    public Set<ConfigItem> getConfigItems() {
        return configItems;
    }

    public String getConfigId() {
        return configId;
    }

    public void setConfigId(String configId) {
        this.configId = configId;
    }
}
