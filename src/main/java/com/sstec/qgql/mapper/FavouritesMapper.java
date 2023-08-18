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
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Root;

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
        Root<TodoList> items = cq.from(TodoList.class);
        Join<TodoList, TodoItem> owners = items.join("items");

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
