package com.sstec.qgql.api;

import com.sstec.qgql.mapper.FavouritesMapper;
import com.sstec.qgql.model.gql.GlobalState;
import jakarta.inject.Inject;
import org.eclipse.microprofile.graphql.Description;
import org.eclipse.microprofile.graphql.GraphQLApi;
import org.eclipse.microprofile.graphql.Name;
import org.eclipse.microprofile.graphql.Query;

@GraphQLApi
public class GQLResource {
    @Inject
    FavouritesMapper favouritesMapper;


    @Query("getGlobalState")
    @Description("Get global state")
    public GlobalState getGlobalState(@Name("applicationId") Long applicationId) {
        return new GlobalState();
    }
//
//    @Mutation
//    public Movie createMovie(Movie movie) {
//        return null;
//    }

}
