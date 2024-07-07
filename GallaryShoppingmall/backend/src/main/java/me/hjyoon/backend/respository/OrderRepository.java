package me.hjyoon.backend.respository;

import me.hjyoon.backend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Integer> {
    List<Order> findByMemberIdOrderByIdDesc(int memberId);
}
