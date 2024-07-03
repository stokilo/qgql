package com.sstec.qgql.mapper;

import com.sstec.qgql.model.entity.house.House;
import com.sstec.qgql.model.entity.house.Room;
import com.sstec.qgql.model.entity.house.Window;
import io.smallrye.graphql.api.Context;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import org.eclipse.microprofile.graphql.Source;

import java.util.ArrayList;
import java.util.List;


@ApplicationScoped
public class HouseMapper {
    /**
     * jakarta.persistence.fetchgraph -> all relationships are fetched lazy regardless of annotation
     * and only provided attribute nodes are loaded
     * jakarta.persistence.loadgraph -> opposite, load all entities eagerly
     **/
    private static final String HINT_FETCH_GRAPH = "jakarta.persistence.fetchgraph";

    @Inject
    Context context;

    @Inject
    EntityManager em;

    public List<House> getHouses() {
        House h = new House();
        h.setHouseId(1L);
        h.setAddress("house address 1");
        h.setNumber(1);
        h.setOwner("slawomir stec");

        House h2 = new House();
        h2.setHouseId(2L);
        h2.setAddress("house address 2");
        h2.setNumber(2);
        h2.setOwner("kinga stec");

        List<House> houses = new ArrayList<>();
        houses.add(h);
        houses.add(h2);
        return houses;
    }

    public List<List<Room>> rooms(@Source List<House> house) {
        List<Room> l1 = new ArrayList<>();
        Room r1 = new Room();
        r1.setRoomId(1L);
        Room r2 = new Room();
        r2.setRoomId(2L);
        l1.add(r1);
        l1.add(r2);


        List<Room> l2 = new ArrayList<>();
        Room r3 = new Room();
        r3.setRoomId(3L);
        Room r4 = new Room();
        r4.setRoomId(4L);
        l2.add(r3);
        l2.add(r4);

        List<List<Room>> r = new ArrayList<>(new ArrayList<>());
        r.add(l1);
        r.add(l2);

        return r;
    }

    public List<List<Window>> windows(@Source List<Room> rooms) {
        List<Window> l1 = new ArrayList<>();
        Window w1 = new Window();
        w1.setWindowId(1L);
        Window w2 = new Window();
        w2.setWindowId(2L);
        l1.add(w1);
        l1.add(w2);

        List<Window> l2 = new ArrayList<>();
        Window w3 = new Window();
        w3.setWindowId(3L);
        Window w4 = new Window();
        w4.setWindowId(4L);
        l2.add(w3);
        l2.add(w4);

        List<List<Window>> w = new ArrayList<>(new ArrayList<>());
        w.add(l1);
        w.add(l2);

        return w;
    }


}
