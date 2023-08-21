package rs.enjoying.scheduling.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import rs.enjoying.scheduling.model.PasswordModel;
import rs.enjoying.scheduling.model.data.entity.core.ResetToken;
import rs.enjoying.scheduling.model.data.entity.core.User;
import rs.enjoying.scheduling.model.data.repository.core.ResetTokenRepository;
import rs.enjoying.scheduling.model.data.repository.core.UserRepository;
import rs.enjoying.scheduling.model.data.repository.exception.UserNotFoundException;
import rs.enjoying.scheduling.service.PasswordService;
import rs.enjoying.scheduling.util.OnPasswordResetEvent;

import javax.validation.Valid;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Controller
public class PasswordController {

    @Autowired
    private ApplicationEventPublisher eventPublisher;

    @Autowired
    private ResetTokenRepository resetTokenRepository;

    @Autowired
    private PasswordService passwordService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder encoder;


    @ResponseBody
    @PostMapping("password")
    public Map<String, String> sendEmailToReset(@Valid @ModelAttribute ("passwordModel")
                                                        PasswordModel passwordModel,
                                                BindingResult result) throws UserNotFoundException
    {
        Map<String, String> response = new HashMap<>();
        User user = userRepository.findByEmail(passwordModel.getEmail());

        //check for errors
        //should verify valid email address
        //verify email from database
        try{
            if (user == null)
                throw new UserNotFoundException(passwordModel.getEmail());
            if(!user.getRegistered())
            {
                response.put("msgResetPassword", "You cannot change password because you haven't verified your e-mail address.");
            }
            else {
                if (resetTokenRepository.findResetTokenByEmail(passwordModel.getEmail()) != null) {
                    response.put("msgResetPassword", "Reset password link is already sent to that e-mail address.");
                } else {
                    //fire off an event to reset email
                    eventPublisher.publishEvent(new OnPasswordResetEvent(passwordModel, ""));//conference_war WEB-INF/view
                    response.put("msgResetPassword", "Please check your email and click on the provided link to reset your password.");
                }
            }
        }

        catch (UserNotFoundException e)
        {
            response.put("msgResetPassword", "Account with that e-mail doesn't exist.");
        }

        return response;
    }

    @GetMapping("passwordReset")
    public ModelAndView getNewPassword(@RequestParam("token") String token) throws NullPointerException
    {
        //verify token
        PasswordModel passwordModel = new PasswordModel();
        ModelAndView model;
        Boolean tokenExpired = false;
        String msgType = "";
        try {
            ResetToken rt = resetTokenRepository.findByToken(token);

            if (rt.getExpiryDate().after(new Date())) {
                passwordModel.setToken(token);
                model = new ModelAndView("resetPassword", "passwordModel", passwordModel);

            } else {
                resetTokenRepository.delete(rt);

                model = new ModelAndView("/resetPassword");
                model.addObject("message", "Your reset token has expired. Please send new request for password reset.");
                tokenExpired=true;
                msgType="error";

            }
        }

        catch (NullPointerException e)
        {
            model = new ModelAndView("/resetPassword");
            model.addObject("message", "Your reset token has expired. Please send new request for password reset.");
            tokenExpired=true;
            msgType="error";

        }
        model.addObject("tokenExpired", tokenExpired);
        model.addObject("msgType", msgType);

        return model;
    }

    @PostMapping("passwordReset")
    public ModelAndView saveNewPassword(@RequestParam("token") String token,
                                        @ModelAttribute("passwordModel") PasswordModel passwordModel){
        ModelAndView model;
        String message;
        String msgType;

        ResetToken resetToken = resetTokenRepository.findByToken(token);
        passwordModel.setEmail(resetToken.getEmail());

        //should match the password
        if (!passwordModel.getPassword().equals(passwordModel.getMatchingPassword()))
        {
            //fire alert for password do not match
            model = new ModelAndView("resetPassword", "passwordModel", passwordModel);
            message = "Passwords don't match. Try again.";
            msgType = "error";
        }
        //fire alert for new password is the same as old password
        else if(encoder.matches(passwordModel.getPassword(), userRepository.findByEmail(passwordModel.getEmail()).getPassword()))
        {
            model = new ModelAndView("resetPassword", "passwordModel", passwordModel);
            message = "New password cannot be the same as your current password.";
            msgType = "error";
        }
        else
        {
            model = new ModelAndView("resetPassword", "passwordModel", passwordModel);
            message = "Your password has been changed successfully.";
            msgType = "success";


            //ResetToken resetToken = resetTokenRepository.findByToken(token);
            passwordModel.setPassword(encoder.encode(passwordModel.getPassword()));
            //passwordModel.setEmail(resetToken.getEmail());
            passwordService.update(passwordModel, resetToken.getEmail());
        }

        model.addObject("message", message);
        model.addObject("msgType", msgType);

        return model;

    }
}
