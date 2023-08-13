package com.sstec.qgql.mapper;

import com.sstec.qgql.model.entity.Favourites;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

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
    List<Favourites> getFavourites(@Param("userId") Long userId);

}
