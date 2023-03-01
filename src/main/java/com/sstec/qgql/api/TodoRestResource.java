package com.sstec.qgql.api;

import com.sstec.qgql.model.entity.TodoList;
import com.sstec.qgql.repository.TodoRepository;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import java.util.List;

@Path("/todo")
public class TodoRestResource {

    @Inject
    TodoRepository todoRepository;

    @GET
    public List<TodoList> listAll() {
        return todoRepository.newAndReturnAll();
    }

    @POST
    public TodoList create(TodoList item) {
        return TodoList.findById(0);
    }

}
