package com.sstec.qgql.mapper;

import io.quarkus.runtime.StartupEvent;
import io.smallrye.graphql.api.Context;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;
import org.jooq.DSLContext;
import org.jooq.codegen.GenerationTool;
import org.jooq.meta.jaxb.*;

@ApplicationScoped
public class FavouritesMapper {


    @Inject
    Context context;

    @Inject
    DSLContext dsl;

    void onStart(@Observes StartupEvent ev) {
        try {
            Configuration configuration = new Configuration()
                    .withJdbc(new Jdbc()
                            .withDriver("org.postgresql.Driver")
                            .withUrl("jdbc:postgresql://localhost:5432/quarkus")
                            .withUser("quarkus")
                            .withPassword("quarkus"))
                    .withGenerator(new Generator()
                            .withDatabase(new Database()
                                    .withName("org.jooq.meta.postgres.PostgresDatabase")
                                    .withIncludes(".*")
                                    .withExcludes("")
                                    .withIncludeIndexes(false)
                                    .withIncludeSystemTables(false)
                                    .withOutputCatalogToDefault(false)
                                    .withInputSchema("public"))
                            .withGenerate(new Generate()
                                    .withSerializablePojos(true)
                            )
                            .withTarget(new Target()
                                    .withPackageName("com.sstec.qgql.model.generated")
                                    .withDirectory("src/main/java")));

            GenerationTool.generate(configuration);

        } catch (Throwable t) {
            t.printStackTrace();
        }
    }

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
