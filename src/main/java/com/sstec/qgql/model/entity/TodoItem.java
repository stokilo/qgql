package com.sstec.qgql.model.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

@Entity(name = "todo_item")
public class TodoItem extends PanacheEntity {
    public String headline;
    public String body;

//    @ManyToOne(fetch = FetchType.LAZY)
//    public TodoList list;
}
