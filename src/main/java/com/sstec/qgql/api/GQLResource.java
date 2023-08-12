package com.sstec.qgql.api;

import com.sstec.qgql.model.entity.TodoItem;
import org.eclipse.microprofile.graphql.Description;
import org.eclipse.microprofile.graphql.GraphQLApi;
import org.eclipse.microprofile.graphql.Query;

import java.util.List;

@GraphQLApi
public class GQLResource {

    @Query("allTodoItems")
    @Description("Get all todo items")
    public List<TodoItem> getAllTodoItems() {
        TodoItem todoItem = new TodoItem();
        todoItem.body = "body";
        todoItem.headline = "heading";

        TodoItem todoItem2 = new TodoItem();
        todoItem2.body = "body2";
        todoItem2.headline = "heading2";
        return List.of(todoItem, todoItem2);
    }
}
