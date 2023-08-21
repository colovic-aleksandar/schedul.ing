package rs.enjoying.scheduling.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import rs.enjoying.scheduling.model.data.entity.core.Schedule;
import rs.enjoying.scheduling.model.data.entity.core.User;
import rs.enjoying.scheduling.model.data.entity.core.VerificationToken;
import rs.enjoying.scheduling.model.data.repository.core.ScheduleRepository;
import rs.enjoying.scheduling.model.data.repository.core.UserRepository;
import rs.enjoying.scheduling.model.data.repository.core.VerificationTokenRepository;
import rs.enjoying.scheduling.model.data.repository.exception.ResourceNotFoundException;
import rs.enjoying.scheduling.model.data.repository.exception.UserAlreadyExistException;
import rs.enjoying.scheduling.model.data.repository.exception.UserNotFoundException;
import rs.enjoying.scheduling.service.UserService;
import rs.enjoying.scheduling.util.OnCreateAccount;
import rs.enjoying.scheduling.util.OnResendEmailVerification;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

@Controller
public class RegistrationController {

    private UserRepository userRepository;

    private ScheduleRepository scheduleRepository;

    private VerificationTokenRepository verificationTokenRepository;

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Autowired
    public void setScheduleRepository(ScheduleRepository scheduleRepository) { this.scheduleRepository = scheduleRepository; }

    @Autowired
    public void setVerificationTokenRepository(VerificationTokenRepository verificationTokenRepository) {
        this.verificationTokenRepository = verificationTokenRepository;
    }

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private ApplicationEventPublisher eventPublisher;




    @GetMapping("HomePage")
    public String getRegistration(@ModelAttribute("register") User user, ModelMap map, HttpServletResponse res) {
        res.setHeader("Pragma", "No-cache");
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        res.setDateHeader("Expires",0);

        List<Schedule> schedules = scheduleRepository.findByCreator(true);
        map.addAttribute("schedules", schedules);
        return "templates/HomePage";
    }

    User userDB;

    @ResponseBody
    @PostMapping("signup")
    public Map<String, String> addRegistration(User user, BindingResult result)
    {
        Map<String, String> response = new HashMap<>();

        try {
            userDB = userRepository.findByEmail(user.getEmail());
            if (userDB == null) {
                user.setPassword(encoder.encode(user.getPassword()));
                user = userService.create(user);

                eventPublisher.publishEvent(new OnCreateAccount(user, ""));
                response.put("msgSignup", "Please check your e-mail adress");

            } else {
                throw new UserAlreadyExistException("User already exists.");
            }

        } catch (UserAlreadyExistException | ResourceNotFoundException | UserNotFoundException e)
        {
            if (userDB.getRegistered()) {
                response.put("msgSignup", "User account already exists. Please sign in.");
            } else {
                response.put("msgSignup", "Verification e-mail is already sent.");
            }

        }
        return response;
    }

    @GetMapping("accountConfirm")
    public ModelAndView confirmAccount(@RequestParam("token") String token) {

        ModelAndView model = new ModelAndView("accountConfirmed", "token", token);
        VerificationToken vt = verificationTokenRepository.findByToken(token);

        if(vt == null)
        {
            model.addObject("message", "You already verified your email address.");
            model.addObject("msgType", "notice");
        }
        else if(userService.confirmUser(token)) {
            model.addObject("message", "Successful registration. Thank you for registering!");
            model.addObject("msgType", "success");

        } else {
            eventPublisher.publishEvent(new OnResendEmailVerification(vt, ""));
            model.addObject("message", "Your verification token has expired. New verification link is sent to your email");
            model.addObject("msgType", "error");
        }
        return model;
    }

}
