package rs.enjoying.scheduling.model.data.repository.exception;

import io.jsonwebtoken.ExpiredJwtException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.sql.SQLException;

@ControllerAdvice
public class ControllerAdvisor
{
    private static final Logger logger = (Logger) LoggerFactory.getLogger(ControllerAdvisor.class);

    public static final String DEFAULT_ERROR_VIEW = "error";
    @ExceptionHandler(value = Exception.class)
    public ModelAndView
    defaultErrorHandler(HttpServletRequest req, Exception e) throws Exception {
        // If the exception is annotated with @ResponseStatus rethrow it and let
        // the framework handle it - like the OrderNotFoundException example
        // at the start of this post.
        // AnnotationUtils is a Spring Framework utility class.
        if (AnnotationUtils.findAnnotation
                (e.getClass(), ResponseStatus.class) != null)
            throw e;

        // Otherwise setup and send the user to a default error-view.
        ModelAndView mav = new ModelAndView();
        mav.addObject("exception", e);
        mav.addObject("url", req.getRequestURL());
        mav.setViewName(DEFAULT_ERROR_VIEW);
        return mav;
    }

    @ExceptionHandler(SQLException.class)
    public String handleSQLException(HttpServletRequest request, Exception ex){
        logger.info("SQLException Occured:: URL="+request.getRequestURL());
        return "error"; //new jsp, HTTP status 200
    }

    @ResponseStatus(value= HttpStatus.NOT_FOUND, reason="IOException occurred")
    @ExceptionHandler(IOException.class)
    public void handleIOException(){
        logger.error("IOException handler executed");
        //returning 404 error code
    }

    @ResponseStatus(value= HttpStatus.UNAUTHORIZED, reason="JWT token has expired!")
    @ExceptionHandler(ExpiredJwtException.class)
    public void handleExpiredJwtException(){
        logger.error("ExpiredJwtException handler executed");
        //returning 401 error code
    }

    @ResponseStatus(value= HttpStatus.INTERNAL_SERVER_ERROR, reason="ServletException occurred!")
    @ExceptionHandler(ServletException.class)
    public void handleServletException(){
        logger.error("ServletException handler executed");
        //returning 500 error code
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ModelAndView handleUserNotFoundException(HttpServletRequest request, Exception ex){
        logger.error("Requested URL="+request.getRequestURL());
        logger.error("Exception Raised="+ex);

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("message", ex);
        //modelAndView.addObject("url", request.getRequestURL());

        modelAndView.setViewName("/error");
        return modelAndView;
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ModelAndView handleResourceNotFoundException(HttpServletRequest request, Exception ex){
        logger.error("Requested URL="+request.getRequestURL());
        logger.error("Exception Raised="+ex);

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("message", ex);
        modelAndView.addObject("url", request.getRequestURL());

        modelAndView.setViewName("/error");
        return modelAndView;
    }

}
