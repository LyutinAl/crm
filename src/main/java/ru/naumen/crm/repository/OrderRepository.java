package ru.naumen.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.naumen.crm.entity.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
}
