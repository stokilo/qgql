package com.sstec.qgql.model.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "todo_list")
public class TodoList extends PanacheEntity {
    public String name;


    // inefficient
//    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
//    @JoinColumn(name = "list_id")
//    public List<TodoItem> items = new ArrayList<>();


    @OneToMany(
            mappedBy = "totoList",
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.EAGER
    )
    private List<TodoItem> items = new ArrayList<>();

    public void addItem(TodoItem item) {
        items.add(item);
        item.totoList = this;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<TodoItem> getItems() {
        return items;
    }

    public void setItems(List<TodoItem> items) {
        this.items = items;
    }
}
