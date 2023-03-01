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
        TodoItem item1 = new TodoItem();
        item1.body = "item1-body";
        item1.headline = "item1-headline";

        TodoItem item2 = new TodoItem();
        item2.body = "item2-body";
        item2.headline = "item2-headline";

        TodoList l = new TodoList();
        l.name = UUID.randomUUID().toString();
        l.items.add(item1);
        l.items.add(item2);
        l.persist();

        return TodoList.listAll();
    }
}
