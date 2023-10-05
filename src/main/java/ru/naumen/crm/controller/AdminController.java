package ru.naumen.crm.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.naumen.crm.entity.Customer;
import ru.naumen.crm.service.CustomerServiceImpl;

import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@RestController
@AllArgsConstructor
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {
    private CustomerServiceImpl customerService;
    private ObjectMapper objectMapper;

    @GetMapping("/getCustomer/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable int id) throws JsonProcessingException {
        Customer customer = customerService.getCustomerById(id);
        log.info("New query " + LocalDateTime.now() + " Get customer by dictionary id " +
                objectMapper.writeValueAsString(customer));
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    @GetMapping("/getCustomers")
    public ResponseEntity<List<Customer>> getCustomers() throws JsonProcessingException {
        List<Customer> customers = customerService.getCustomers();
        log.info("New query " + LocalDateTime.now() + "Get customers " + objectMapper.writeValueAsString(customers));
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @PostMapping("/saveCustomer")
    public ResponseEntity<Customer> saveCustomer(@RequestBody Customer customer) throws JsonProcessingException {
        Customer savedCustomer = customerService.saveCustomer(customer);
        log.info("New query " + LocalDateTime.now() + " Saved customer " + objectMapper.writeValueAsString(savedCustomer));
        return new ResponseEntity<>(savedCustomer, HttpStatus.OK);
    }

    @PutMapping("/updateCustomer")
    public ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer) throws JsonProcessingException {
        Customer updatedCustomer = customerService.updateCustomer(customer);
        log.info("New query " + LocalDateTime.now() + " Update customer from " + objectMapper.writeValueAsString(customer)
                + " to " + objectMapper.writeValueAsString(updatedCustomer));
        return new ResponseEntity<>(updatedCustomer, HttpStatus.OK);
    }

    @DeleteMapping("/deleteCustomer/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCustomer(@PathVariable int id) throws JsonProcessingException {
        log.info("New query " + LocalDateTime.now() + " Deleted customer "
                + objectMapper.writeValueAsString(customerService.getCustomerById(id)));
        customerService.deleteCustomerById(id);
    }

}
