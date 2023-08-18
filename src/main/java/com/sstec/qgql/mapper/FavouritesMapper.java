package com.sstec.qgql.mapper;

import com.sstec.qgql.model.entity.Favourites;
import com.sstec.qgql.model.entity.Movie;
import com.sstec.qgql.model.entity.TodoItem;
import com.sstec.qgql.model.entity.TodoList;
import graphql.schema.DataFetchingEnvironment;
import io.quarkus.runtime.StartupEvent;
import io.smallrye.graphql.api.Context;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.*;
import org.jooq.DSLContext;
import org.jooq.codegen.GenerationTool;
import org.jooq.meta.jaxb.*;

import java.util.List;

@ApplicationScoped
public class FavouritesMapper {

    @Inject
    EntityManager entityManager;

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
                                    .withInputSchema("public"))
                            .withTarget(new Target()
                                    .withPackageName("com.sstec.qgql.generated")
                                    .withDirectory("src/main/java")));

            GenerationTool.generate(configuration);

        } catch (Throwable t) {
            t.printStackTrace();
        }
    }

    public  List<Favourites> getFavourites(Long userId) {
        DataFetchingEnvironment dfe = context.unwrap(DataFetchingEnvironment.class);
        boolean withDirector = dfe.getSelectionSet().contains("Favourites.movie/Movie.director");

        CriteriaQuery<TodoList> cq = entityManager.getCriteriaBuilder().createQuery(TodoList.class);
        Root<TodoList> todoList = cq.from(TodoList.class);
        Fetch<TodoList, TodoItem> ownersFetch = todoList.fetch("items");
        // nested fetch
//        ownersFetch.fetch("director", JoinType.LEFT);


        List<TodoList> todolist = entityManager.createQuery(cq).getResultList();

        //jooq




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
