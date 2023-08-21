package rs.enjoying.scheduling.service;

import rs.enjoying.scheduling.model.PasswordModel;
import rs.enjoying.scheduling.model.data.entity.core.ResetToken;

public interface PasswordService {

    void createResetToken(PasswordModel passwordModel, String token);

    boolean confirmResetToken(ResetToken token);

    void update(PasswordModel passwordModel, String email);
}
