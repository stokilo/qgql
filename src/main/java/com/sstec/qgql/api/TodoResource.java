package com.sstec.qgql.api;

import com.sstec.qgql.model.entity.TodoList;
import org.eclipse.microprofile.graphql.Description;
import org.eclipse.microprofile.graphql.GraphQLApi;
import org.eclipse.microprofile.graphql.Query;
import org.jboss.logging.Logger;

import java.util.List;


@GraphQLApi
public class TodoResource {

    private static final Logger log = Logger.getLogger(TodoResource.class);

    @Query("allTodos")
    @Description("Get all Todos")
    public List<TodoList> getAllTodos() {
        return TodoList.listAll();
    }

//    @Query
//    @Description("Get a Films from a galaxy far far away")
//    public Film getFilm(@Name("filmId") List<Integer> ids) {
//        Film f = null;
//        try {
//            f = service.getFilm(ids.get(0));
//        } catch (Exception e) {
//            e.printStackTrace();
//            throw new SomeBusinessException("failed to fetch");
//        }
//        return f;
//    }
//
//    public List<Hero> heroes(@Source Film film) {
//        return service.getHeroesByFilm(film);
//    }
//


}
