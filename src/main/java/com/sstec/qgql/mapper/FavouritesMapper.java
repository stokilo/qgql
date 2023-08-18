package com.sstec.qgql.mapper;

import com.sstec.qgql.model.entity.Favourites;
import com.sstec.qgql.model.entity.Movie;
import com.sstec.qgql.model.entity.TodoItem;
import com.sstec.qgql.model.entity.TodoList;
import graphql.schema.DataFetchingEnvironment;
import io.smallrye.graphql.api.Context;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.*;

import java.util.List;

@ApplicationScoped
public class FavouritesMapper {

    @Inject
    EntityManager entityManager;

    @Inject
    Context context;

    public  List<Favourites> getFavourites(Long userId) {
        DataFetchingEnvironment dfe = context.unwrap(DataFetchingEnvironment.class);
        boolean withDirector = dfe.getSelectionSet().contains("Favourites.movie/Movie.director");

        CriteriaQuery<TodoList> cq = entityManager.getCriteriaBuilder().createQuery(TodoList.class);
        Root<TodoList> todoList = cq.from(TodoList.class);
        Fetch<TodoList, TodoItem> ownersFetch = todoList.fetch("items");
        // nested fetch
//        ownersFetch.fetch("director", JoinType.LEFT);


        List<TodoList> todolist = entityManager.createQuery(cq).getResultList();



        TypedQuery<Favourites> query
                = entityManager.createQuery(
                "SELECT f FROM FAVOURITES f", Favourites.class);
        List<Favourites> resultList = query.getResultList();
        return resultList;
    }

    public Movie createMovie(Movie movie) {

        return new Movie();
    }

}
