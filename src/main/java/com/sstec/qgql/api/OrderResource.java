package com.sstec.qgql.api;

import com.sstec.qgql.model.entity.Order;
import com.sstec.qgql.model.entity.TodoList;
import com.sstec.qgql.repository.OrderRepository;
import org.jboss.logging.Logger;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import java.util.List;

@Path("/orders")
public class OrderResource {

    private static final Logger log = Logger.getLogger(OrderResource.class);

    @Inject
    OrderRepository orderRepository;

    @GET
    public List<Order> listAll() {
        try {
            Thread.sleep(1000);
        }catch (Exception e) {
            e.printStackTrace();
        }
        return orderRepository.listAll();
    }

    @POST
    public void save(Order item) {
        orderRepository.save(item);
    }
}
