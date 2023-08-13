package com.sstec.qgql.mapper;


import com.sstec.qgql.model.entity.Favorities;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface FavoritiesMapper {

    @Select("SELECT * FROM FAVORITIES")
    Favorities getFavorities();

}
