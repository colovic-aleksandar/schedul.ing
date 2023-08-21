package rs.enjoying.scheduling.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rs.enjoying.scheduling.model.PasswordModel;
import rs.enjoying.scheduling.model.data.entity.core.ResetToken;
import rs.enjoying.scheduling.model.data.repository.core.ResetTokenRepository;
import rs.enjoying.scheduling.model.data.repository.core.UserRepository;

@Service
@Transactional
public class PasswordServiceImpl  implements PasswordService{

    @Autowired
    private ResetTokenRepository resetTokenRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public void createResetToken(PasswordModel passwordModel, String token) {
        ResetToken resetToken = new ResetToken();
        resetToken.setToken(token);
        resetToken.setEmail(passwordModel.getEmail());
        resetToken.setExpiryDate(resetToken.calculateExpiryDate(ResetToken.EXPIRATION));

        resetTokenRepository.save(resetToken);
    }

    @Override
    public boolean confirmResetToken(ResetToken token) {
        return false;
    }

    @Override
    public void update(PasswordModel passwordModel, String email) {
        userRepository.updateUserPassword(passwordModel.getPassword(),email);
        resetTokenRepository.delete(resetTokenRepository.findByToken(passwordModel.getToken()));

    }
}
