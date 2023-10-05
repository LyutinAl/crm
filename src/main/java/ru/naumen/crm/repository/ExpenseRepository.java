package ru.naumen.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.naumen.crm.entity.Expense;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Integer> {
}
