package com.sstec.qgql.repository;

import com.sstec.qgql.model.entity.TodoItem;
import com.sstec.qgql.model.entity.TodoList;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@ApplicationScoped
public class TodoRepository {

    @Transactional
    public List<TodoList> newAndReturnAll() {
        return TodoList.listAll();
    }
}
