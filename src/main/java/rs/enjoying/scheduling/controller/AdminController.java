package rs.enjoying.scheduling.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import rs.enjoying.scheduling.model.data.entity.core.Event;
import rs.enjoying.scheduling.model.data.entity.core.Schedule;
import rs.enjoying.scheduling.model.data.entity.core.User;
import rs.enjoying.scheduling.model.data.repository.core.EventRepository;
import rs.enjoying.scheduling.model.data.repository.core.ScheduleRepository;
import rs.enjoying.scheduling.model.data.repository.core.UserRepository;
import rs.enjoying.scheduling.model.data.repository.exception.ResourceNotFoundException;

import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class AdminController {

    private UserRepository userRepository;
    private EventRepository eventRepository;
    private ScheduleRepository scheduleRepository;

    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public ModelAndView viewRegistration(HttpServletResponse res) {
        res.setHeader("Pragma", "No-cache");
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        res.setDateHeader("Expires",0);
        return new ModelAndView("templates/AdminPage");
    }

    @RequestMapping("/admin/users")
    @ResponseBody
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @DeleteMapping("/admin/users/{id}")
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long userId)
            throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));

        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @RequestMapping("/admin/events")
    @ResponseBody
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @DeleteMapping("/admin/events/{id}")
    public Map<String, Boolean> deleteEvent(@PathVariable(value = "id") Long eventId)
            throws ResourceNotFoundException {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found for this id :: " + eventId));

        eventRepository.delete(event);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @ResponseBody
    @PostMapping("/admin/events")
    public Event createEvent(@RequestBody Event event) {
        return eventRepository.save(event);
    }

    @RequestMapping("/admin/schedules")
    @ResponseBody
    public List<Schedule> getAllSchedules() {
        return scheduleRepository.findAll();
    }

    @ResponseBody
    @PostMapping("/admin/schedules")
    public Schedule createSchedule(@RequestBody Schedule schedule) {
        return scheduleRepository.save(schedule);
    }

    @DeleteMapping("/admin/schedules/{id}")
    public Map<String, Boolean> deleteSchedule(@PathVariable(value = "id") Long scheduleId)
            throws ResourceNotFoundException {
        Schedule schedule = scheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new ResourceNotFoundException("Schedule not found for this id :: " + scheduleId));

        scheduleRepository.deleteAllAttends(schedule.getEvent().getId(), schedule.getDateAndTime());
        scheduleRepository.delete(schedule);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @ResponseBody
    @RequestMapping(value = "/admin/schedules/event/{id}", method = RequestMethod.GET)
    public Long countAttendees(@PathVariable(value = "id") Long scheduleId)
    {
        return scheduleRepository.countAttendees(scheduleId);
    }

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Autowired
    public void setEventRepository(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Autowired
    public void setScheduleRepository(ScheduleRepository scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }
}
