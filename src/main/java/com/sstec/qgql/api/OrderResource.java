package com.sstec.qgql.api;

import com.sstec.qgql.model.entity.Order;
import com.sstec.qgql.repository.OrderRepository;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import org.jboss.logging.Logger;

import java.util.List;

@Path("/orders")
public class OrderResource {

    private static final Logger log = Logger.getLogger(OrderResource.class);

    @Inject
    OrderRepository orderRepository;

    @GET
    public List<Order> listAll() {
        try {
            Thread.sleep(500);
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
