package com.sstec.qgql.api;

import com.sstec.qgql.mapper.HouseMapper;
import com.sstec.qgql.model.entity.house.House;
import jakarta.inject.Inject;
import org.eclipse.microprofile.graphql.*;

@GraphQLApi
public class HouseResource {

    @Inject
    HouseMapper houseMapper;

    @Query("house")
    public House getHouse() {
        return houseMapper.getHouse();
    }

}
