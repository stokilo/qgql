package com.sstec.qgql.api;

import com.sstec.qgql.mapper.FavouritesMapper;
import jakarta.inject.Inject;
import org.eclipse.microprofile.graphql.GraphQLApi;

@GraphQLApi
public class GQLResource {
    @Inject
    FavouritesMapper favouritesMapper;

//    @Query("getFavouriteMovies")
//    @Description("Get Favourites movies")
//    public List<Favourites> getFavouriteMovies(@Name("userId") Long userId) {
//        return favouritesMapper.getFavourites(userId);
//    }
//
//    @Mutation
//    public Movie createMovie(Movie movie) {
//        return null;
//    }

}
