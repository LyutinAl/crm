package ru.naumen.crm.service;

import ru.naumen.crm.entity.Customer;

import java.util.List;

public interface CustomerService {
    public Customer getCustomerById(int id);
    public List<Customer> getCustomers();
    public Customer saveCustomer(Customer customer);
    public Customer updateCustomer(Customer customer);
    public void deleteCustomerById(int id);
}
