package ru.naumen.crm.exception;

public class StatusNotFoundException extends RuntimeException {
    public StatusNotFoundException(int id) {
        super("Status with id: '" + id + "' does not exist in our records");
    }
}
