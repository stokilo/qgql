package com.sstec.qgql.mapper;

import graphql.schema.DataFetchingEnvironment;
import io.smallrye.graphql.api.Context;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.jdbc.SQL;
import org.jboss.logging.Logger;

@ApplicationScoped
public class FavouritesMapperClass {

    @Inject
    Logger log;

    @Inject
    Context context;

    public String generateSql(@Param("userId") Long userId) {
//        DataFetchingEnvironment dfe = context.unwrap(DataFetchingEnvironment.class);
//        boolean withDirector = dfe.getSelectionSet().contains("Favourites.movie/Movie.director");
        boolean withDirector = true;

        SQL sql = new SQL().
                SELECT("m.title as movie_title").
                SELECT("m.year as movie_year");

        if (withDirector) {
            sql.SELECT("d.id as director_id").
            SELECT("d.name as director_name");
        }

        sql.
        SELECT("m.id as movie_id").
        SELECT("f.user_id as user_id").
        FROM("favourites f").
        JOIN("movie m on f.movie_id = m.id");

        if (withDirector) {
            sql.JOIN("movie_director md on md.movie_id = m.id");
        }

        sql.WHERE("f.user_id = #{userId}");

        log.info(sql.toString());
        return sql.toString();
    }


}
