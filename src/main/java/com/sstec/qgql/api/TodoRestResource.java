package com.sstec.qgql.api;

import com.sstec.qgql.model.entity.TodoList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import java.util.List;
import java.util.Set;

@Path("/todo")
public class TodoRestResource {

    @GET
    public List<TodoList> listAll() {
        return TodoList.listAll();
    }

}
