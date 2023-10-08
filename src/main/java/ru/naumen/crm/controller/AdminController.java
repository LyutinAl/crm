package ru.naumen.crm.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import ru.naumen.crm.entity.Customer;
import ru.naumen.crm.exception.ErrorResponse;
import ru.naumen.crm.service.CustomerServiceImpl;

import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@RestController
@AllArgsConstructor
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
@Tag(name = "Administrator Controller", description = "Create and retrieve Customers, create Orders")
public class AdminController {
    private CustomerServiceImpl customerService;
    private ObjectMapper objectMapper;

    @Operation(summary = "Get customer by Id", description = "Provides customer based on Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "404", description = "Customer doesn't exist",
                    content = @Content(schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "200", description = "Successful retrieval of customer",
                    content = @Content(schema = @Schema(implementation = Customer.class)))})
    @GetMapping("/getCustomer/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable int id) throws JsonProcessingException {
        Customer customer = customerService.getCustomerById(id);
        log.info("New query " + LocalDateTime.now() + " Get customer by dictionary id " +
                objectMapper.writeValueAsString(customer));
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    @Operation(summary = "Retrieves customers", description = "Provides a list of all customers")
    @ApiResponse(responseCode = "200", description = "Successful retrieval of contacts",
            content = @Content(array = @ArraySchema(schema = @Schema(implementation = Customer.class))))
    @GetMapping("/getCustomers")
    public ResponseEntity<List<Customer>> getCustomers() throws JsonProcessingException {
        List<Customer> customers = customerService.getCustomers();
        log.info("New query " + LocalDateTime.now() + "Get customers " + objectMapper.writeValueAsString(customers));
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @Operation(summary = "Update Customer", description = "Update a customer from the provided payload")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "404", description = "Customer doesn't exist",
                    content = @Content(schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "200", description = "Successful update of customer",
                    content = @Content(schema = @Schema(implementation = Customer.class)))})
    @PostMapping("/saveCustomer")
    public ResponseEntity<Customer> saveCustomer(@Validated @RequestBody Customer customer) throws JsonProcessingException {
        Customer savedCustomer = customerService.saveCustomer(customer);
        log.info("New query " + LocalDateTime.now() + " Saved customer " + objectMapper.writeValueAsString(savedCustomer));
        return new ResponseEntity<>(savedCustomer, HttpStatus.OK);
    }

    @Operation(summary = "Update Customer", description = "Update a customer from the provided payload")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "404", description = "Customer doesn't exist",
                    content = @Content(schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "200", description = "Successful update of customer",
                    content = @Content(schema = @Schema(implementation = Customer.class)))})
    @PutMapping("/updateCustomer")
    public ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer) throws JsonProcessingException {
        Customer updatedCustomer = customerService.updateCustomer(customer);
        log.info("New query " + LocalDateTime.now() + " Update customer from " + objectMapper.writeValueAsString(customer)
                + " to " + objectMapper.writeValueAsString(updatedCustomer));
        return new ResponseEntity<>(updatedCustomer, HttpStatus.OK);
    }

    @Operation(summary = "Update Customer", description = "Update a customer from the provided payload")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "404", description = "Customer doesn't exist",
                    content = @Content(schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "200", description = "Successful delete of customer")})
    @DeleteMapping("/deleteCustomer/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCustomer(@PathVariable int id) throws JsonProcessingException {
        log.info("New query " + LocalDateTime.now() + " Deleted customer "
                + objectMapper.writeValueAsString(customerService.getCustomerById(id)));
        customerService.deleteCustomerById(id);
    }
}
