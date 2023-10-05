package ru.naumen.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.naumen.crm.entity.StatusData;


@Repository
public interface StatusDataRepository extends JpaRepository<StatusData, Integer> {
}
