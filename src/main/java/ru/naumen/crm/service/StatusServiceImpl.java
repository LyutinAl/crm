package ru.naumen.crm.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ru.naumen.crm.entity.Status;
import ru.naumen.crm.exception.StatusNotFoundException;
import ru.naumen.crm.repository.StatusRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class StatusServiceImpl implements StatusService {

    private StatusRepository statusRepository;
    @Override
    public Status getStatusById(int id) {
            return statusRepository.findById(id).orElseThrow(() -> new StatusNotFoundException(id));
    }

    @Override
    public List<Status> getStatuses() {
        return statusRepository.findAll();
    }

    @Override
    public Status saveStatus(Status status) {
        if (statusRepository.existsById(status.getId())) {
            return statusRepository.save(status);
        } else {
            throw new StatusNotFoundException(status.getId());
        }
    }

    @Override
    public Status updateStatus(Status status) {
        if (statusRepository.existsById(status.getId())) {
            return statusRepository.save(status);
        } else {
            throw new StatusNotFoundException(status.getId());
        }
    }

    @Override
    public void deleteStatus(Status status) {
        if (statusRepository.existsById(status.getId())) {
            statusRepository.deleteById(status.getId());
        } else {
            throw new StatusNotFoundException(status.getId());
        }
    }
}
