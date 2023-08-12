package com.sstec.qgql.repository;

import com.sstec.qgql.model.entity.Order;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;

import java.util.List;

@ApplicationScoped
public class OrderRepository {

    @Transactional
    public List<Order> listAll() {
        return Order.listAll();
    }

    @Transactional
    public void save(Order order) {
        Order.persist(order);
    }
}
