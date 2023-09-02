package com.sstec.qgql.api;

import com.sstec.qgql.mapper.FavouritesMapper;
import com.sstec.qgql.model.gql.RootGQL;
import jakarta.inject.Inject;
import org.eclipse.microprofile.graphql.Description;
import org.eclipse.microprofile.graphql.GraphQLApi;
import org.eclipse.microprofile.graphql.Name;
import org.eclipse.microprofile.graphql.Query;

@GraphQLApi
public class GQLResource {
    @Inject
    FavouritesMapper favouritesMapper;


    @Query("getRoot")
    @Description("Get root state")
    public RootGQL getRoot(@Name("applicationId") Long applicationId) {
        return new RootGQL();
    }
//
//    @Mutation
//    public Movie createMovie(Movie movie) {
//        return null;
//    }

}
