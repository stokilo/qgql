package com.sstec.qgql.model.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity(name = "todo_item")
public class TodoItem extends PanacheEntity {
//    public String text;
    public String headline;
    public String body;

//    @ManyToOne
//    @JoinColumn(name = "list_id")
//    public TodoList todoList;
}
