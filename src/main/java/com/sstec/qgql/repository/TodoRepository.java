package com.sstec.qgql.repository;

import com.sstec.qgql.model.entity.TodoList;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;

import java.util.List;

@ApplicationScoped
public class TodoRepository {

    @Transactional
    public List<TodoList> newAndReturnAll() {
        return TodoList.listAll();
    }
}
