package rs.enjoying.scheduling.util;

import lombok.SneakyThrows;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Component;
import rs.enjoying.scheduling.model.PasswordModel;
import rs.enjoying.scheduling.model.data.entity.core.User;
import rs.enjoying.scheduling.model.data.repository.core.UserRepository;
import rs.enjoying.scheduling.service.PasswordService;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.StringWriter;
import java.util.Properties;
import java.util.UUID;

@Component
public class PasswordListener implements ApplicationListener<OnPasswordResetEvent> {

    private static final String SERVER_URL = "http://localhost:8080/";


    @Autowired
    private PasswordService passwordService;

    private JavaMailSenderImpl mailSender;

    @Autowired
    private VelocityEngine velocityEngine;

    @Autowired
    private UserRepository userRepository;

    @SneakyThrows
    @Override
    public void onApplicationEvent(OnPasswordResetEvent event) {
        this.resetPassword(event);
    }

    private void resetPassword(OnPasswordResetEvent event) throws MessagingException {

        PasswordModel passwordModel = event.getPasswordModel();
        String token = UUID.randomUUID().toString();
        passwordService.createResetToken(passwordModel,token);
        mailSender = mailSender();

        User user = userRepository.findByEmail(passwordModel.getEmail());
        constructEmail(user, token);
    }

    private void constructEmail(User user, String token) {
        MimeMessagePreparator preparator = new MimeMessagePreparator() {
            public void prepare(MimeMessage mimeMessage)
                    throws Exception
            {
                MimeMessageHelper message = new MimeMessageHelper(mimeMessage);
                message.setTo(user.getEmail());
                message.setFrom("noreplayscheduling@gmail.com");

                VelocityContext context = new VelocityContext();
                context.put("firstName", user.getFirstName());
                String resetPasswordLink = SERVER_URL + "passwordReset?token=" + token;
                context.put("resetPasswordLink",resetPasswordLink);

                String html = getHtmlByTemplateAndContext("EmailTemplateReset.vm", context);
                message.setSubject("Reset your password");
                message.setText(html, true);
            }
        };
        this.mailSender.send(preparator);
        //System.out.println("Email sending complete.");
    }

    public String getHtmlByTemplateAndContext(String templateName, VelocityContext context)
    {
        StringWriter writer = new StringWriter();
        velocityEngine.mergeTemplate(templateName, "UTF-8", context, writer);
        return writer.toString();
    }

    public JavaMailSenderImpl mailSender() {
        if(mailSender == null)
        {
            mailSender = new JavaMailSenderImpl();
            mailSender.setHost("smtp.gmail.com");
            mailSender.setPort(587);
            mailSender.setProtocol("smtp");

            mailSender.setUsername("noreplayscheduling@gmail.com");
            mailSender.setPassword("adminroot");

            Properties props = mailSender.getJavaMailProperties();
            props.put("mail.transport.protocol", "smtp");
            props.put("mail.smtp.host", "smtp.gmail.com");
            props.put("mail.smtp.auth", true);
            props.put("mail.smtp.starttls.enable", true);
            props.put("mail.debug", true);

            mailSender.setJavaMailProperties(props);
        }

        return mailSender;
    }
}
