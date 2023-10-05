package ru.naumen.crm.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Expense {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String sku;

    private BigDecimal price;

    private String provider;

    @ManyToMany(mappedBy = "expenses")
    private Set<Order> orders = new HashSet<>();

}
