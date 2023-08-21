package rs.enjoying.scheduling.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import rs.enjoying.scheduling.configuration.JwtTokenProvider;
import rs.enjoying.scheduling.model.data.entity.core.Login;
import rs.enjoying.scheduling.model.data.entity.core.User;
import rs.enjoying.scheduling.model.data.repository.core.UserRepository;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;


@Controller
public class LoginController {

    private static final String BEARER = "Bearer";
    @Value("${security.jwt.token.expiration}")
    long milliseconds;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private PasswordEncoder passwordEncoder;

    private UserRepository userRepository;

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @ResponseBody
    @RequestMapping(value = "/login", method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, String> login(Login login, HttpServletResponse res){

        Map<String, String> response = new HashMap<>();

        User user = userRepository.findByEmail(login.getUsername());
        if (userRepository.findByEmail(login.getUsername()) != null) {
            if (!passwordEncoder.matches(login.getPassword(),
                    userRepository.findByEmail(login.getUsername()).getPassword())){
                response.put("message", "Invalid password");
                response.put("msgType", "error");
                return response;
            }
        } else {
            response.put("message", "Invalid username");
            response.put("msgType", "error");
            return response;
        }
        if(user.getRegistered()) {
            String token = BEARER + " " + jwtTokenProvider.createToken(login.getUsername());
            String encodedToken = Base64.getEncoder().encodeToString(token.getBytes());

            Cookie cookie = new Cookie("jwttoken", encodedToken);
            cookie.setMaxAge((int) milliseconds);
            cookie.setHttpOnly(true);
            res.addCookie(cookie);

            Cookie UserIdCookie = new Cookie("userID",
                    userRepository.findByEmail(login.getUsername()).getId().toString());
            cookie.setMaxAge((int) milliseconds);
            res.addCookie(UserIdCookie);
            response.put("msgType", "success");
        }
        else {
            response.put("message", "Please confirm your registration");
            response.put("msgType", "error");
        }
        return response;
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ModelAndView viewRegistration() {
        return new ModelAndView("templates/Form");
    }
}