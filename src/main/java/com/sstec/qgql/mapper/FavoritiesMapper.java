package com.sstec.qgql.mapper;


import com.sstec.qgql.model.entity.Favorities;
import jakarta.enterprise.context.ApplicationScoped;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface FavoritiesMapper {

    @Select("SELECT * FROM FAVORITIES")
    List<Favorities> getFavorities();

}
