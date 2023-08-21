package rs.enjoying.scheduling.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rs.enjoying.scheduling.model.data.entity.core.User;
import rs.enjoying.scheduling.model.data.entity.core.VerificationToken;
import rs.enjoying.scheduling.model.data.repository.core.ScheduleRepository;
import rs.enjoying.scheduling.model.data.repository.core.UserRepository;
import rs.enjoying.scheduling.model.data.repository.core.VerificationTokenRepository;
import rs.enjoying.scheduling.model.data.repository.exception.ResourceNotFoundException;
import rs.enjoying.scheduling.model.data.repository.exception.UserNotFoundException;

import java.util.Date;
import java.util.UUID;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Autowired
    private UserRepository userRepository;

    private VerificationTokenRepository verificationTokenRepository;
    @Autowired
    public void setVerificationTokenRepository(VerificationTokenRepository verificationTokenRepository) {
        this.verificationTokenRepository = verificationTokenRepository;
    }


    @Override
    public User create(User user) throws UserNotFoundException {
        User savedUser = userRepository.save(user);
        User u = userRepository.findById(savedUser.getId())
                .orElseThrow(() -> new UserNotFoundException(savedUser.getId()));

        u.setFirstName(user.getFirstName());
        u.setLastName(user.getLastName());
        u.setEmail(user.getEmail());
        u.setPassword(user.getPassword());

        return u;
    }

    @Override
    public void createVerificationToken(User user, String token) throws ResourceNotFoundException {
        VerificationToken verificationToken = new VerificationToken();
        verificationToken.setToken(token);
        verificationToken.setUser(user);
        verificationToken.setExpiryDate(verificationToken.calculateExpiryDate(VerificationToken.EXPIRATION));

        verificationTokenRepository.save(verificationToken);
    }


    @Override
    public String resetVerificationToken(VerificationToken verificationToken) throws ResourceNotFoundException {
        String token = UUID.randomUUID().toString();
        verificationTokenRepository.updateTokenExpirationDate(verificationToken.calculateExpiryDate(VerificationToken.EXPIRATION), verificationToken.getToken());
        verificationTokenRepository.updateToken(token, verificationToken.getToken());
        return token;
    }

    private void saveToken(VerificationToken verificationToken) throws ResourceNotFoundException {

        VerificationToken savedVT = verificationTokenRepository.save(verificationToken);

    }

    @Override
    public Boolean confirmUser(String token)
            throws NullPointerException
    {
        VerificationToken verificationToken = verificationTokenRepository.findByToken(token);

        if (verificationToken.getExpiryDate().after(new Date())) {
            User user = userRepository.findByEmail(verificationToken.getUser().getEmail());
            this.createUserDetails(user);
            verificationTokenRepository.delete(verificationToken);

            return true;
        } else {
            return false;
        }
    }

    @Override
    public User setUserAttHosts(User u) throws UserNotFoundException {
            User user = userRepository.findById(u.getId())
                    .orElseThrow(() -> new UserNotFoundException(u.getId()));
            user.setAttends(scheduleRepository.findAllAttends(user.getId()));
            user.setHosts(scheduleRepository.findAllHosts(user.getId()));
            return user;
    }

    private void createUserDetails(User user) {
        userRepository.setUserEnableById(true, user.getId());
    }
}
