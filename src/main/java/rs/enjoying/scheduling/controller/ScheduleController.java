package rs.enjoying.scheduling.controller;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import rs.enjoying.scheduling.model.data.entity.core.Event;
import rs.enjoying.scheduling.model.data.entity.core.Schedule;
import rs.enjoying.scheduling.model.data.entity.core.User;
import rs.enjoying.scheduling.model.data.repository.core.EventRepository;
import rs.enjoying.scheduling.model.data.repository.core.ScheduleRepository;
import rs.enjoying.scheduling.model.data.repository.core.UserRepository;
import rs.enjoying.scheduling.model.data.repository.exception.ResourceNotFoundException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.*;

@Controller
public class ScheduleController {
    private ScheduleRepository scheduleRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EventRepository eventRepository;

    /**
     * /get  --> Return the string for testing purposes
     *
     * @return String message.
     */
    @RequestMapping("/schedules")
    @ResponseBody
    public List<Schedule> getAllSchedules() {
        return scheduleRepository.findAll();
    }

    @RequestMapping("/schedules/all")
    @ResponseBody
    public List<Schedule> getSchedulesAll() {
        return scheduleRepository.findByCreator(true);
    }

    @GetMapping("eventsPage")
    public String getEvents(HttpServletResponse res) {
        res.setHeader("Pragma", "No-cache");
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        res.setDateHeader("Expires",0);
        return "templates/eventsPage";
    }


    @RequestMapping("/schedules/date")
    @ResponseBody
    public List<Schedule> getSchedulesDate( ) {
        Event event = new Event();
        System.out.println("TASIC");
        event.setId((long) 1);
        LocalDateTime date = LocalDateTime.parse("2020-12-12T15:00:00.000");
//        Timestamp timestamp = Timestamp.valueOf(date);
        return scheduleRepository.findByDateAndTimeAndEvent(date, event );

    }


    @ResponseBody
    @PostMapping("/schedule")
    public String addSchedule(@RequestBody Map<String, Object> json )
            throws ResourceNotFoundException
    {

        Schedule schedule = new Schedule(
                LocalDateTime.parse(json.get("dateAndTime").toString()),
                LocalDateTime.parse(json.get("endTime").toString()),
                true,
                true
        );
        Long userId = Long.parseLong(json.get("user").toString());
        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
        Long eventId = Long.parseLong(json.get("event").toString());
        Event event = eventRepository.findById(eventId).orElseThrow(() -> new ResourceNotFoundException("Event not found for this id :: " + eventId));
        schedule.setEvent(event);
        schedule.setUser(user);
        Schedule returnSchedule = scheduleRepository.save(schedule);
        Map<String, String> map = (Map<String, String>) json.get("users");

//        map.forEach((fetchedUser, fetchedId) -> System.out.println((fetchedUser + ":" + fetchedId)));

        for (Map.Entry<String, String> entry : map.entrySet()) {
            System.out.println(entry.getKey() + ":" + entry.getValue());
            Schedule usersSchedule = new Schedule(
                    LocalDateTime.parse(json.get("dateAndTime").toString()),
                    LocalDateTime.parse(json.get("endTime").toString()),
                    false,
                    false
            );


            User scheduleUser = userRepository.findById(Long.parseLong(entry.getValue())).orElseThrow(() -> new ResourceNotFoundException("Schedule user not found for this id :: " + Long.parseLong(entry.getValue())));

            usersSchedule.setEvent(event);
            usersSchedule.setUser(scheduleUser);
            scheduleRepository.save(usersSchedule);

        }

        System.out.println(map.get("0"));
        System.out.println(schedule.getCreator());
        System.out.println(schedule.getEvent());
        return returnSchedule.getId().toString();
    }


    @ResponseBody
    @DeleteMapping(value ="/schedule")
    public Map<String, Boolean> deleteEvent(@RequestBody Map<String, Object> param)
//            throws ResourceNotFoundException
    {
        JSONObject jsonObject= new JSONObject(param);
        Event event = new Event();

        event.setId(Long.parseLong(jsonObject.get("id").toString()));

        LocalDateTime dateTime = LocalDateTime.parse(jsonObject.get("dateAndTime").toString());
        List<Schedule> schedules = scheduleRepository.findByDateAndTimeAndEvent(dateTime, event);
        schedules.forEach(schedule -> scheduleRepository.delete(schedule));

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }


    @RequestMapping("/schedules/{id}")
    public ResponseEntity<Schedule> getScheduleById(@PathVariable(value = "id") Long scheduleId)
            throws ResourceNotFoundException {
        Schedule schedule = scheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new ResourceNotFoundException("Schedule not found for this id :: " + scheduleId));
        return ResponseEntity.ok().body(schedule);
    }

    @ResponseBody
    @PostMapping("/schedules")
    public Schedule createSchedule(@RequestBody Schedule schedule) {
        return scheduleRepository.save(schedule);
    }

    @PutMapping("/schedules/{id}")
    public ResponseEntity<Schedule> updateSchedule(@PathVariable(value = "id") Long scheduleId,
                                                   @RequestBody Schedule scheduleDetails) throws ResourceNotFoundException {
        Schedule schedule = scheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new ResourceNotFoundException("Schedule not found for this id :: " + scheduleId));

        schedule.setUser(scheduleDetails.getUser());
        schedule.setEvent(scheduleDetails.getEvent());
        schedule.setDateAndTime(scheduleDetails.getDateAndTime());
        schedule.setCreator(scheduleDetails.getCreator());

        final Schedule updatedSchedule = scheduleRepository.save(schedule);
        return ResponseEntity.ok(updatedSchedule);
    }

    @DeleteMapping("/schedules/{id}")
    public Map<String, Boolean> deleteSchedule(@PathVariable(value = "id") Long scheduleId)
            throws ResourceNotFoundException {
        Schedule schedule = scheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new ResourceNotFoundException("Schedule not found for this id :: " + scheduleId));

        scheduleRepository.delete(schedule);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @ResponseBody
    @GetMapping("/schedules/{user_id}")
    public ArrayList<Schedule> getScheduleByUserId(@PathVariable(value = "user_id") Long userId)
            throws ResourceNotFoundException {
       // System.out.println("Dosao sam");
        ArrayList<Schedule> userSchedules = new ArrayList<Schedule>();
        userSchedules = scheduleRepository.findAllUserSchedules(userId);
        ArrayList<Schedule> newList = new ArrayList<Schedule>();
        // newList.addAll(scheduleRepository.findAll());// = scheduleRepository.findAll();
        for (int i = 0; i < userSchedules.size(); i++) {
            ArrayList<Schedule>  newSchedule = scheduleRepository.findByEventCreator(userSchedules.get(i).getEvent().getId(), userSchedules.get(i).getDateAndTime());
            newList.addAll(newSchedule);
        }
        return newList;
    }


    @ResponseBody
    @PutMapping("/acceptButton/{schedule_id}")
    public ResponseEntity<Schedule> acceptEvent(@PathVariable(value = "schedule_id") Long schedule_id, @RequestBody User userDetails) throws ResourceNotFoundException {
        Schedule schedule = scheduleRepository.findById(schedule_id)
                .orElseThrow(() -> new ResourceNotFoundException("Schedule not found for this id :: " + schedule_id));

        scheduleRepository.updateAcceptedEvent(userDetails.getId() , schedule.getEvent().getId(), schedule.getDateAndTime());
        return ResponseEntity.ok(schedule);
    }

    @ResponseBody
    @PutMapping("/declineButton/{schedule_id}")
    public ResponseEntity<Schedule> declineEvent(@PathVariable(value = "schedule_id") Long schedule_id, @RequestBody User userDetails) throws ResourceNotFoundException {
        Schedule schedule = scheduleRepository.findById(schedule_id)
                .orElseThrow(() -> new ResourceNotFoundException("Schedule not found for this id :: " + schedule_id));

        scheduleRepository.deleteDeclinedEvent(userDetails.getId(), schedule.getEvent().getId(), schedule.getDateAndTime());
        return ResponseEntity.ok(schedule);
    }


    /**
     * Repository injected for testing purposes.
     * This is not a good way to go.
     * You should make services and inject repositories there.
     * Inject services inside controller layer.
     *
     * @param scheduleRepository
     */

    @Autowired
    public void setScheduleRepository(ScheduleRepository scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }
}
