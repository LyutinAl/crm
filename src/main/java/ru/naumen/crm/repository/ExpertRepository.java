package ru.naumen.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.naumen.crm.entity.Expert;

@Repository
public interface ExpertRepository extends JpaRepository<Expert, Integer> {
}
