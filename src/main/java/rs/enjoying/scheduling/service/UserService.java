package rs.enjoying.scheduling.service;

import rs.enjoying.scheduling.model.data.entity.core.User;
import rs.enjoying.scheduling.model.data.entity.core.VerificationToken;
import rs.enjoying.scheduling.model.data.repository.exception.ResourceNotFoundException;
import rs.enjoying.scheduling.model.data.repository.exception.UserNotFoundException;

public interface UserService {

    User create(User user) throws ResourceNotFoundException, UserNotFoundException;

    void createVerificationToken(User user, String token) throws ResourceNotFoundException;
    String resetVerificationToken(VerificationToken verificationToken) throws ResourceNotFoundException;

    Boolean confirmUser(String token);
    User setUserAttHosts(User user) throws UserNotFoundException;
}
