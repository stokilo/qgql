package com.sstec.qgql.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Objects;

@Entity(name = "todo_item")
public class TodoItem extends PanacheEntity {
    public String headline;
    public String body;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "list_id")
    @JsonIgnore
    public TodoList totoList;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TodoItem todoItem)) return false;
        return id != null && id.equals(((TodoItem) o).id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
