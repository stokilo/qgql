package com.sstec.qgql.api;

import com.sstec.qgql.mapper.FavoritiesMapper;
import com.sstec.qgql.model.entity.Favorities;
import jakarta.inject.Inject;
import org.eclipse.microprofile.graphql.*;

@GraphQLApi
public class GQLResource {

//    List<TodoItem> items = new ArrayList<>();
//
//    @Mutation
//    public TodoItem createTodoItem(TodoItem item) {
//        items.add(item);
//        return item;
//    }
//

    @Inject
    FavoritiesMapper favoritiesMapper;

    @Query("getFavoriteMovies")
    @Description("Get Favorite movies")
    public Favorities getFavoriteMovies() {
        Favorities f = favoritiesMapper.getFavorities();
        return f;
    }

//    @Query("getTodo")
//    @Description("Get Todo")
//    public TodoItem getTodo(@Name("id") int id) {
//
//        Order o1 =  orderMapper.getOrder(2L);
//
//
//        if (id == 0) {
//            TodoItem todoItem2 = new TodoItem();
//            todoItem2.body = "body2";
//            todoItem2.headline = "heading2";
//            return todoItem2;
//
//        }
//
//        TodoItem todoItem = new TodoItem();
//        todoItem.body = "body1";
//        todoItem.headline = "heading1";
//        return todoItem;
//    }
//
//    public List<Order> orders(@Source TodoItem todoItem) {
//        Order o1 = new Order();
//        o1.setName("o1");
//        Order o2 = new Order();
//        o2.setName("o2");
//
//        return List.of(o1, o2);
//    }

//    public List<List<Order>> orders(@Source List<TodoItem> todoItems) {
//        Order o1 = new Order();
//        o1.setName("o1");
//        Order o2 = new Order();
//        o2.setName("o2");
//
//        List<Order> l1 = List.of(o1,o2);
//        List<Order> l2 = List.of(o1,o2);
//
//        return List.of(l1, l2);
//    }

    // For nested relations use database join and model Order with nested fields
    // Avoid overfetching by using @Source annotation on top level field and fetch all nested data at once
    // Example
    // Order.Address
    // Order.PaymentInfo
    // Order.PaymentInfo.SecurityCheck
    // -> to fetch this execute select * from order o join order_address ... join order_payment_info ... join payment_info_sec...
    // and bind data to model
    // then use top level @Source annotation to allow fetching multiple orders
    // @Source<List<Order>> i.e. in TodoList entity
//    public List<List<SubOrder>> suborders(@Source List<Order> orders) {
//        SubOrder o1 = new SubOrder();
//        o1.setName("o1");
//        SubOrder o2 = new SubOrder();
//        o2.setName("o2");
//
//        List<SubOrder> l1 = List.of(o1,o2);
//        List<SubOrder> l2 = List.of(o1,o2);
//
//        return List.of(l1, l2);
//    }
}
