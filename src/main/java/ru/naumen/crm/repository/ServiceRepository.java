package ru.naumen.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.naumen.crm.entity.Service;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Integer> {
}
