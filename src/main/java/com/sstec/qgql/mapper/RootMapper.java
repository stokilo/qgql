package com.sstec.qgql.mapper;

import com.sstec.qgql.model.generated.tables.Application;
import com.sstec.qgql.model.generated.tables.Beneficiary;
import com.sstec.qgql.model.gql.ApplicationGQL;
import com.sstec.qgql.model.gql.BeneficiaryGQL;
import com.sstec.qgql.model.gql.RootGQL;
import graphql.schema.DataFetchingEnvironment;
import io.smallrye.graphql.api.Context;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.jooq.DSLContext;
import org.jooq.Record1;
import org.jooq.Select;

import java.util.List;

import static org.jooq.Records.mapping;
import static org.jooq.impl.DSL.multiset;
import static org.jooq.impl.DSL.select;


@ApplicationScoped
public class RootMapper {


    @Inject
    Context context;

    @Inject
    DSLContext dsl;


    public RootGQL getRoot(Long applicationId) {
        DataFetchingEnvironment dfe = context.unwrap(DataFetchingEnvironment.class);
        boolean withBeneficiaries = dfe.getSelectionSet().contains("RootGQL.applications/ApplicationGQL.beneficiaries");

        List<ApplicationGQL> applications = dsl.select(Application.APPLICATION,
                        multiset(select(Beneficiary.BENEFICIARY)
                                .from(Beneficiary.BENEFICIARY)
                                .where(Beneficiary.BENEFICIARY.APPLICATION_ID.eq(Application.APPLICATION.ID))
                        ).as("beneficiaries").convertFrom(r -> r.map(mapping(BeneficiaryGQL::new))))
                .from(Application.APPLICATION)
                .fetch().into(ApplicationGQL.class);

        // This works with constructor that takes ActorRecord as parameter
//        List<Film> result =
//                dsl.select(
//                                FILM.TITLE,
//                                multiset(
//                                        select(
//                                                FILM_ACTOR.actor()
//                                        )
//                                                .from(FILM_ACTOR)
//                                                .where(FILM_ACTOR.FILM_ID.eq(FILM.FILM_ID))
//                                ).as("actors").convertFrom(r -> r.map(mapping(Actor::new)))
//                        )
//                        .from(FILM)
//                        .orderBy(FILM.TITLE)
//                        .fetch(mapping(Film::new));

//        SelectQuery<?> queryApp = dsl.selectFrom(APPLICATION).getQuery();
//        if (withBeneficiaries) {
//            queryApp.addSelect(multiset(
//                    select().from(BENEFICIARY).where(BENEFICIARY.APPLICATION_ID.eq(APPLICATION.ID))
//                            .as("beneficiaries"));
//        }
//
//        List<ApplicationGQL> applications = queryApp.fetch().into(ApplicationGQL.class);
//
        RootGQL rootGQL = new RootGQL();
        rootGQL.applications = applications;
        return rootGQL;
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
