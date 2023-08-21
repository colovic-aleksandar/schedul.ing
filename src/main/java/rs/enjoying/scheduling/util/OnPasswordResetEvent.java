package rs.enjoying.scheduling.util;

import lombok.Getter;
import lombok.Setter;
import org.springframework.context.ApplicationEvent;
import rs.enjoying.scheduling.model.PasswordModel;

@Getter
@Setter
public class OnPasswordResetEvent extends ApplicationEvent {
    private String appUrl;
    private PasswordModel passwordModel;

    public OnPasswordResetEvent(PasswordModel passwordModel, String appUrl) {
        super(passwordModel);
        this.appUrl = appUrl;
        this.passwordModel = passwordModel;
    }
}
