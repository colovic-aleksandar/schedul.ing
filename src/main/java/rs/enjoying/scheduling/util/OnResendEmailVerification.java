package rs.enjoying.scheduling.util;

import lombok.Getter;
import org.springframework.context.ApplicationEvent;
import rs.enjoying.scheduling.model.data.entity.core.VerificationToken;

@Getter
public class OnResendEmailVerification extends ApplicationEvent {

    private final String appUrl;
    private final VerificationToken token;

    public OnResendEmailVerification(VerificationToken token, String appUrl) {
        super(token);

        this.appUrl=appUrl;
        this.token=token;
    }

}