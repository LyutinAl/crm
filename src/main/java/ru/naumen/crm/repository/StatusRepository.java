package ru.naumen.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.naumen.crm.entity.Status;

@Repository
public interface StatusRepository extends JpaRepository<Status, Integer> {
}
