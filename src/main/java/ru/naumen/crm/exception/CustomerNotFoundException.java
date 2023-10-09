package ru.naumen.crm.exception;

public class CustomerNotFoundException extends RuntimeException {
    public CustomerNotFoundException(int id) {
        super("Customer with id: '" + id + "' does not exist in our records");
    }
}
