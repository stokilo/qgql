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
    public List<TodoItem> items = new ArrayList<>();
}
