package com.sstec.qgql.mapper;

import com.sstec.qgql.model.entity.Favourites;
import jakarta.enterprise.context.ApplicationScoped;
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
    @Results(value = {
            @Result(property = "movie.id", column = "movie_id" ),
            @Result(property = "movie.title", column = "movie_title" ),
            @Result(property = "movie.year", column = "movie_year" ),
            @Result(property = "movie.director.id", column = "director_id" ),
            @Result(property = "movie.director.name", column = "director_name" )

    })
    List<Favourites> getFavourites(@Param("userId") Long userId);

}
