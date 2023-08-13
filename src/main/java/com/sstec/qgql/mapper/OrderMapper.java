package com.sstec.qgql.mapper;


import com.sstec.qgql.model.entity.Order;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface OrderMapper {

    @Select("SELECT * FROM ORDERS WHERE id = #{id}")
    Order getOrder(Long id);

//    @Insert("INSERT INTO USERS (id, name) VALUES (#{id}, #{name})")
//    Integer createUser(@Param("id") Integer id, @Param("name") String name);
//
//    @Delete("DELETE FROM USERS WHERE id = #{id}")
//    Integer removeUser(Integer id);
}
