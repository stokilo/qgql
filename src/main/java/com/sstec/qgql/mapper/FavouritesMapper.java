package com.sstec.qgql.mapper;

import com.sstec.qgql.model.entity.Favourites;
import com.sstec.qgql.model.entity.Movie;
import jakarta.decorator.Decorator;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface FavouritesMapper {

    @Select(
            "select  " +
                    "m.title as movie_title,  " +
                    "m.year as movie_year,  " +
                    "d.id as director_id,  " +
                    "d.name as director_name,  " +
                    "m.id as movie_id,  " +
                    "f.user_id as user_id  " +
                    "from favourites f  " +
                    "join movie m on f.movie_id = m.id  " +
                    "join movie_director md on md.movie_id = m.id  " +
                    "join director d on md.director_id = d.id " +
                    "where f.user_id = #{userId}"
    )
    @Results(id = "favoriteResults", value = {
            @Result(property = "movie.id", column = "movie_id" ),
            @Result(property = "movie.title", column = "movie_title" ),
            @Result(property = "movie.year", column = "movie_year" ),
            @Result(property = "movie.director.id", column = "director_id" ),
            @Result(property = "movie.director.name", column = "director_name" )

    })
    List<Favourites> getFavourites(@Param("userId") Long userId);

    @SelectProvider(type = FavouritesMapperClass.class, method = "generateSql")
    @ResultMap("favoriteResults")
    List<Favourites> getFavouritesQueryBuilder(@Param("userId") Long userId);


    @Select("INSERT INTO MOVIE (id, title, year) VALUES(nextval('movies_sequence'), #{title}, #{year}) RETURNING *;")
    @Options(flushCache = Options.FlushCachePolicy.TRUE)
    Movie createMovie(Movie movie);
}
