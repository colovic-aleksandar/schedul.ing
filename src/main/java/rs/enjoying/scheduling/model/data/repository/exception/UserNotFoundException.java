package rs.enjoying.scheduling.model.data.repository.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND, reason="User Not Found") //404
public class UserNotFoundException extends Exception {

    private static final long serialVersionUID = -3332292346834265371L;

    public UserNotFoundException(Long id){
        super("UserNotFoundException with id="+id);
    }

    public UserNotFoundException(String email){
        super("UserNotFoundException with e-mail="+email);
    }

}
