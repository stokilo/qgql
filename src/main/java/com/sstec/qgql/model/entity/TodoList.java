package com.sstec.qgql.model.entity;


import java.util.ArrayList;
import java.util.List;

public class TodoList{
    public Long id;
    public String name;


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
