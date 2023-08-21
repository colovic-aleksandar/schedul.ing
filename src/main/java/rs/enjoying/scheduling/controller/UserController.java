package rs.enjoying.scheduling.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import rs.enjoying.scheduling.model.data.entity.core.Schedule;
import rs.enjoying.scheduling.model.data.entity.core.User;
import rs.enjoying.scheduling.model.data.repository.core.EventRepository;
import rs.enjoying.scheduling.model.data.repository.core.ScheduleRepository;
import rs.enjoying.scheduling.model.data.repository.core.UserRepository;
import rs.enjoying.scheduling.model.data.repository.exception.ResourceNotFoundException;
import rs.enjoying.scheduling.model.data.repository.exception.UserNotFoundException;
import rs.enjoying.scheduling.service.UserService;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Controller
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @RequestMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long userId)
            throws UserNotFoundException
    {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));
        return ResponseEntity.ok().body(user);
    }


    @RequestMapping(value = "/UserPage", method = RequestMethod.GET)
    public ModelAndView viewUser(HttpServletResponse res) {
        res.setHeader("Pragma", "No-cache");
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        res.setDateHeader("Expires",0);
        return new ModelAndView("templates/UserPage");
    }


    @GetMapping("/UsersPage")
    @CrossOrigin
    public String showUsersForm(ModelMap model, HttpServletResponse res) throws UserNotFoundException {
        res.setHeader("Pragma", "No-cache");
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        res.setDateHeader("Expires",0);
        List<User> users = userRepository.findAll();
        for(int i = 0; i<users.size();i++) {
            userService.setUserAttHosts(users.get(i));
        }
        model.addAttribute("users", users);
        return "templates/UsersPage";
    }



    /**
     * /get  --> Return the string for testing purposes
     *
     * @return String message.
     */
    @RequestMapping("/users")
    @ResponseBody
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


    @ResponseBody
    @PutMapping("/uploadAvatar/{id}")
    public String fileUpload(@PathVariable(value = "id") Long userId, MultipartFile imageFile) throws IOException, UserNotFoundException {

            String folder = "/Users/alan2005/Desktop/prezentacija projekta/schedul.ing/src/main/webapp/WEB-INF/Resources/";
            byte[] bytes = imageFile.getBytes();
            Path path = Paths.get(folder + userId.toString() + ".png");
            Files.write(path,bytes);
            Path pathNew = Paths.get("Resources/" + userId.toString() + ".png");
            System.out.println(path.toString());
            userRepository.setUserPhoto(pathNew.toString(), userId);

            return "File uploaded!!";
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long userId,
                                                    @RequestBody User userDetails) throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));


        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setDateOfBirth(userDetails.getDateOfBirth());
        //moram da mu dodam putanju Resources/ + ...
        //user.setPhoto(userDetails.getPhoto());
        user.setCompanyLocation(userDetails.getCompanyLocation());
        user.setJobTitle(userDetails.getJobTitle());
        user.setSeniority(userDetails.getSeniority());
        user.setPhoneNumber(userDetails.getPhoneNumber());
        final User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }


}
