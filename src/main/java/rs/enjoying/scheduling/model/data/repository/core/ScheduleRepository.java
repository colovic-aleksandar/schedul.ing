package rs.enjoying.scheduling.model.data.repository.core;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import rs.enjoying.scheduling.model.data.entity.core.Event;
import rs.enjoying.scheduling.model.data.entity.core.Schedule;
import rs.enjoying.scheduling.model.data.entity.core.User;
import rs.enjoying.scheduling.model.data.repository.base.BaseRepository;

import javax.transaction.Transactional;
import java.math.BigInteger;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ScheduleRepository extends BaseRepository<Long, Schedule> {

    Long countByUser(User user);

    @Query(value = "select count(*) from schedule where id_user = ?1 and accepted = true",nativeQuery = true)
    Long findAllAttends(Long userID);

    @Query(value = "select count(*) from schedule where id_user = ?1 and creator = true", nativeQuery = true)
    Long findAllHosts(Long userID);

    @Query(value = "select * from schedule where creator=true", nativeQuery = true)
    List<Schedule> findAllSchedules();

    @Query(value = "select * from schedule where id_user = ?1 and accepted=false", nativeQuery = true)
    ArrayList<Schedule> findAllUserSchedules(Long userID);

    @Query(value = "select * from schedule where id_event = ?1 and date_and_time = ?2 and creator=true", nativeQuery = true)
    ArrayList<Schedule> findByEventCreator(Long eventID, LocalDateTime startDate);

    @Query(value = "select * from schedule where id_user = ?1", nativeQuery = true)
    ArrayList<Schedule> findByUserId(Long userId);

    List<Schedule> findByCreator(boolean creator);


    @Modifying
    @Query(value = "select * from schedule where date_and_time = ?1 and id_event = ?2 and creator = true", nativeQuery = true)
    List<Schedule> findByDateAndTimeAndEvent(LocalDateTime localDateTime , Event event);



    @Query(value = "update schedule set accepted = true where id_user = ?1 and id_event = ?2 and date_and_time = ?3", nativeQuery = true)
    void updateAcceptedEvent(Long user_id, Long event_id, LocalDateTime startDate);

    @Query(value = "delete from schedule where id_user = ?1 and id_event = ?2 and date_and_time = ?3", nativeQuery = true)
    void deleteDeclinedEvent(Long user_id, Long event_id, LocalDateTime startDate);
    @Query(value = "select count(*) from schedule where id_event = ?1 and accepted = true", nativeQuery = true)
    Long countAttendees(Long eventID);

    @Query(value = "update schedule set accepted = ?1 where id = ?2", nativeQuery = true)
    void updateAcceptedEvent(Boolean accept, Long id);

    @Query(value = "delete from schedule where id_event = ?1 and date_and_time = ?2", nativeQuery = true)
    void deleteAllAttends(long eventID, LocalDateTime startDate);
}
