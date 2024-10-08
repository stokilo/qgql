package com.sstec.qgql.api;

import com.sstec.qgql.mapper.HouseMapper;
import com.sstec.qgql.model.entity.house.House;
import io.quarkus.security.Authenticated;
import jakarta.inject.Inject;
import org.eclipse.microprofile.graphql.*;

import java.util.List;

@GraphQLApi
@Authenticated
public class HouseResource {

    @Inject
    HouseMapper houseMapper;

    @Query("houses")
    public List<House> getHouses() {
        return houseMapper.getHouses();
    }

}
