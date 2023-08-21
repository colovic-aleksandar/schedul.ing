package rs.enjoying.scheduling.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@RestController
public class IndexController implements ErrorController {

    private static final String PATH = "/error";

    @RequestMapping(value = PATH)
    public ModelAndView error(HttpServletRequest req) {
            ModelAndView model = new ModelAndView("templates/Form");
            model.addObject("message","Your session has expired! If you want to continue, please Sign In.");
            return model;
    }

    @Override
    public String getErrorPath() {
        return PATH;
    }
}
