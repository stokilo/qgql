package com.sstec.qgql.repository;

import com.sstec.qgql.model.entity.Order;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import java.util.List;

@ApplicationScoped
public class OrderRepository {

    @Transactional
    public List<Order> listAll() {
        return Order.listAll();
    }
}
