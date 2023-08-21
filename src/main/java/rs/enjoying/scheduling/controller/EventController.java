package rs.enjoying.scheduling.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import rs.enjoying.scheduling.model.data.entity.core.Event;
import rs.enjoying.scheduling.model.data.repository.core.EventRepository;
import rs.enjoying.scheduling.model.data.repository.exception.ResourceNotFoundException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class EventController {
    private EventRepository eventRepository;

    /**
     * /get  --> Return the string for testing purposes
     *
     * @return String message.
     */
    @RequestMapping("/events")
    @ResponseBody
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @RequestMapping("/events/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable(value = "id") Long eventId)
            throws ResourceNotFoundException {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found for this id :: " + eventId));
        return ResponseEntity.ok().body(event);
    }

    @ResponseBody
    @PostMapping("/events")
    public Event createEvent(@RequestBody Event event) {
        return eventRepository.save(event);
    }

    @PutMapping("/events/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable(value = "id") Long eventId,
                                             @RequestBody Event eventDetails) throws ResourceNotFoundException {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found for this id :: " + eventId));

        event.setType(eventDetails.getType());
        event.setMinUsers(eventDetails.getMinUsers());
        event.setMaxUsers(eventDetails.getMaxUsers());
        event.setLocation(eventDetails.getLocation());
        event.setSchedule(eventDetails.getSchedule());

        final Event updatedEvent = eventRepository.save(event);
        return ResponseEntity.ok(updatedEvent);
    }

    @DeleteMapping("/events/{id}")
    public Map<String, Boolean> deleteEvent(@PathVariable(value = "id") Long eventId)
            throws ResourceNotFoundException {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found for this id :: " + eventId));

        eventRepository.delete(event);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    /**
     * Repository injected for testing purposes.
     * This is not a good way to go.
     * You should make services and inject repositories there.
     * Inject services inside controller layer.
     *
     * @param eventRepository
     */

    @Autowired
    public void setEventRepository(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }
}
