package ru.naumen.crm.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ru.naumen.crm.entity.Customer;
import ru.naumen.crm.exception.CustomerNotFoundException;
import ru.naumen.crm.repository.CustomerRepository;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CustomerServiceImpl implements CustomerService{
    private CustomerRepository customerRepository;

    @Override
    public Customer getCustomerById(int id) {
        return customerRepository.findById(id).orElseThrow(() -> new CustomerNotFoundException(id));
    }

    @Override
    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer saveCustomer(Customer customer) {
        if (customerRepository.existsById(customer.getId())) {
            return customerRepository.save(customer);
        } else {
            throw new CustomerNotFoundException(customer.getId());
        }
    }

    @Override
    public Customer updateCustomer(Customer customer) {
        if (customerRepository.existsById(customer.getId())) {
            return customerRepository.save(customer);
        } else {
            throw new CustomerNotFoundException(customer.getId());
        }
    }

    @Override
    public void deleteCustomerById(int id) {
        if (customerRepository.existsById(id)) {
            customerRepository.deleteById(id);
        } else {
            throw new CustomerNotFoundException(id);
        }
    }
}


