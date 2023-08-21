package rs.enjoying.scheduling.model.data.entity.core;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

@Getter
@Setter
public class ConferenceUserDetails extends org.springframework.security.core.userdetails.User {

    private String email;
    private String firstName;
    private String lastName;

    public ConferenceUserDetails(String username, String password, String firstName, String lastName, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);

        this.firstName = firstName;
        this.lastName = lastName;

    }
}
