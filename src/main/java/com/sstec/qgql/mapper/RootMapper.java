package com.sstec.qgql.mapper;

import io.smallrye.graphql.api.Context;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.jooq.DSLContext;

@ApplicationScoped
public class RootMapper {


    @Inject
    Context context;

    @Inject
    DSLContext dsl;


//    public  List<Favourites> getFavourites(Long userId) {
//        DataFetchingEnvironment dfe = context.unwrap(DataFetchingEnvironment.class);
//        boolean withDirector = dfe.getSelectionSet().contains("Favourites.movie/Movie.director");
//
//        CriteriaQuery<TodoList> cq = entityManager.getCriteriaBuilder().createQuery(TodoList.class);
//        Root<TodoList> todoList = cq.from(TodoList.class);
//        Fetch<TodoList, TodoItem> ownersFetch = todoList.fetch("items");
//        // nested fetch
//        List<TodoList> todolist = entityManager.createQuery(cq).getResultList();
//
//        //
//        // can you add multiset conditionally to the query? -> looks like yes -> must be tested
//
////        SelectQuery<?> query = dsl.selectFrom(Director.DIRECTOR).getQuery();
////        if (withDirector) {
////            query.addSelect(multiset(
////                    select(Movie.MOVIE.TITLE).from(Movie.MOVIE)
////            ).convertFrom(r -> r.map(Records.mapping(Movie::new))));
////        }
////
//        // is it possible to join multiple tables in this way (graphql) ?
//        query.union()
//
////
////        SelectSelectStep<Record2<String, Result<Record1<String>>>> s = dsl.select(
////                Director.DIRECTOR.NAME,
////                multiset(
////                        select(Movie.MOVIE.TITLE).from(Movie.MOVIE)
////                ).convertFrom(r -> r.map(Records.mapping(Movie::new)))
////        ).from(Director.DIRECTOR);
//
//        TypedQuery<Favourites> query
//                = entityManager.createQuery(
//                "SELECT f FROM FAVOURITES f", Favourites.class);
//        List<Favourites> resultList = query.getResultList();
//        return resultList;
//    }

//    public Movie createMovie(Movie movie) {
//
//        return new Movie();
//    }

}
