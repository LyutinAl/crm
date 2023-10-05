package ru.naumen.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.naumen.crm.entity.Priority;

@Repository
public interface PriorityRepository extends JpaRepository<Priority, Integer> {
}
