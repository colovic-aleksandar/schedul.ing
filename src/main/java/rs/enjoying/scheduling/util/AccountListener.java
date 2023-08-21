package rs.enjoying.scheduling.util;

import lombok.SneakyThrows;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.EventListener;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Component;
import rs.enjoying.scheduling.model.data.entity.core.User;
import rs.enjoying.scheduling.model.data.entity.core.VerificationToken;
import rs.enjoying.scheduling.service.UserService;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.StringWriter;
import java.util.Properties;
import java.util.UUID;

/*
@Component
public class AccountListener
{

    private final String serverUrl;


    @Autowired
    private UserService userService;

    //TODO dynamic serverUrl
    public AccountListener() {
        serverUrl = "http://localhost:8080";
    }

    @EventListener
    public void handleOnCreateAccount(OnCreateAccount event) {
        this.confirmCreateAccount(event);
    }

    @EventListener
    public void handleOnResendVerificationEmail(OnResendEmailVerification event) {
        this.resendVerificationEmail(event);
    }

    @SneakyThrows
    private void resendVerificationEmail(OnResendEmailVerification event) {

        VerificationToken vt = event.getToken();
        User user = vt.getUser();
        vt.setToken(userService.resetVerificationToken(vt));

        Transport.send(constructEmail(user.getEmail(), vt.getToken(), event.getAppUrl()));

    }

    @SneakyThrows
    private void confirmCreateAccount(OnCreateAccount event) {

        User user = event.getUser();
        String token = UUID.randomUUID().toString();
        userService.createVerificationToken(user,token);

        Transport.send(constructEmail(user.getEmail(), token, event.getAppUrl()));
    }

    private Properties setMailProperties()
    {
        //TODO Try app properties
        Properties props = new Properties(); //prop for mail
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.starttls.enable", true);
        props.put("mail.smtp.auth", true);

        return props;
    }

    private Message constructEmail(String userEmail, String token, String appUrl) throws MessagingException {
        Session session = Session.getDefaultInstance(setMailProperties(), new Authenticator() {

            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(
                        "nevena.enjoying@gmail.com", "scheduling");// Specify the Username and the PassWord
            }

        });

        String recipient;
        recipient = userEmail;
        InternetAddress addressTo = new InternetAddress(recipient);
        String subject = "Account Confirmation";
        String confirmationUrl = appUrl + "/accountConfirm?token=" + token;
        String message = "Please confirm:";

        Message email = new MimeMessage(session);
        email.setRecipient(Message.RecipientType.TO, addressTo);
        email.setSubject(subject);
        email.setText(message + "\r\n" + serverUrl + confirmationUrl);

        return email;
    }


}
*/

@Component
public class AccountListener
{

    private final String serverUrl;


    @Autowired
    private UserService userService;

    private JavaMailSenderImpl mailSender;

    @Autowired
    private VelocityEngine velocityEngine;

    //TODO dynamic serverUrl
    public AccountListener() {
        serverUrl = "http://localhost:8080";
    }

    @EventListener
    public void handleOnCreateAccount(OnCreateAccount event) {
        this.confirmCreateAccount(event);
    }

    @EventListener
    public void handleOnResendVerificationEmail(OnResendEmailVerification event) {
        this.resendVerificationEmail(event);
    }

    @SneakyThrows
    private void resendVerificationEmail(OnResendEmailVerification event) {

        VerificationToken vt = event.getToken();
        User user = vt.getUser();
        vt.setToken(userService.resetVerificationToken(vt));

        mailSender = mailSender();
        constructEmail(user, vt.getToken(), event.getAppUrl());
    }

    @SneakyThrows
    private void confirmCreateAccount(OnCreateAccount event) {

        User user = event.getUser();
        String token = UUID.randomUUID().toString();
        userService.createVerificationToken(user,token);

        mailSender = mailSender();
        constructEmail(user, token, event.getAppUrl());
    }

    private void constructEmail(User user, String token, String appUrl) {
        MimeMessagePreparator preparator = new MimeMessagePreparator() {
            public void prepare(MimeMessage mimeMessage)
                    throws Exception
            {
                MimeMessageHelper message = new MimeMessageHelper(mimeMessage);
                message.setTo(user.getEmail());
                message.setFrom("noreplayscheduling@gmail.com");

                VelocityContext context = new VelocityContext();
                context.put("firstName", user.getFirstName());
                String verificationLink = serverUrl + "/accountConfirm?token=" + token;
                context.put("verificationLink",verificationLink);

                String html = getHtmlByTemplateAndContext("EmailTemplateConfirm.vm", context);
                message.setSubject("Confirm your email address");
                message.setText(html, true);
            }
        };
        this.mailSender.send(preparator);
        //System.out.println("Email sending complete.");
    }

    @Bean
    public VelocityEngine velocityEngine()
    {
        VelocityEngine engine = new VelocityEngine();

        engine.setProperty("resource.loader", "class");
        engine.setProperty("class.resource.loader.class",
                "org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader");

        return engine;
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