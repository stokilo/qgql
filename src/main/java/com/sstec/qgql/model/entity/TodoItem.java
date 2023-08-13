package com.sstec.qgql.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class TodoItem {
    public Long id;
    public String headline;
    public String body;

    @JsonIgnore
    public TodoList totoList;

}
