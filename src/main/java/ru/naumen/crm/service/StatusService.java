package ru.naumen.crm.service;

import ru.naumen.crm.entity.Status;

import java.util.List;

public interface StatusService {
    public Status getStatusById(int id);
    public List<Status> getStatuses();
    public Status saveStatus(Status status);
    public Status updateStatus(Status status);
    public void deleteStatus(Status status);
}
