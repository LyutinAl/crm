package ru.naumen.crm.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.validation.annotation.Validated;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    @NotBlank(message = "Name can not be blank")
    private String name;

    @Column(nullable = false, unique = true)
    @NotBlank(message = "Phone number can not be blank")
    private String phone;

    @Email
    @Column(nullable = false, unique = true)
    @NotBlank(message = "Email can not be blank")
    private String email;
}
