package rs.enjoying.scheduling.util;

import lombok.Getter;
import org.springframework.context.ApplicationEvent;
import rs.enjoying.scheduling.model.data.entity.core.User;

@Getter
public class OnCreateAccount extends ApplicationEvent {

    private final String appUrl;
    private final User user;

    public OnCreateAccount(User user, String appUrl) {
        super(user);

        this.appUrl=appUrl;
        this.user=user;
    }
}
