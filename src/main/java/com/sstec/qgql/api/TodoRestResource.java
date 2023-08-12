package com.sstec.qgql.api;

import com.sstec.qgql.model.entity.TodoList;
import com.sstec.qgql.repository.TodoRepository;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import org.jboss.logging.Logger;

import java.util.List;

@Path("/todo")
public class TodoRestResource {

    private static final Logger log = Logger.getLogger(TodoRestResource.class);

    @Inject
    TodoRepository todoRepository;

    @GET
    public List<TodoList> listAll() {
        return todoRepository.newAndReturnAll();
    }

    @POST
    public TodoList create(TodoList item) {
        log.info("NAME " + item.name);
        return todoRepository.newAndReturnAll().get(0);
    }

    @PUT
    public TodoList update(TodoList item) {
        return todoRepository.newAndReturnAll().get(0);
    }

}
