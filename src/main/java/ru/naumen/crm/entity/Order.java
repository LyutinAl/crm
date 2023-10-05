package ru.naumen.crm.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private Status currentStatus;

    @OneToMany(mappedBy = "order")
    private List<StatusData> statusData;

    @ManyToOne
    @JoinColumn(name = "priority_id")
    private Priority priority;

    private Date create;

    private Date lastUpdate;

    private Date deadLine;

    private Date close;

    @ManyToOne
    @JoinColumn(name = "expert_id")
    private Expert expert;

    @ManyToOne
    @JoinColumn(name = "service_id")
    private Service service;

    @ManyToMany
    @JoinTable(
            name = "order_expenses",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "expense_id")
    )
    private Set<Expense> expenses = new HashSet<>();
}
