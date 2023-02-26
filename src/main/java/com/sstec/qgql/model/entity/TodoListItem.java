package com.sstec.qgql.model.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity(name = "TODO_LIST_ITEM")
public class TodoListItem extends PanacheEntity {
    public String text;

    @ManyToOne
    @JoinColumn(name = "listid")
    public TodoList todoList;
}
