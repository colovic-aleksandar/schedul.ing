package rs.enjoying.scheduling.model.data.entity.core;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;
import rs.enjoying.scheduling.model.data.entity.base.BaseEntity;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 * This entity class also has primary key
 * because it represents ManyToMany relationship
 * with extra columns.
 */
@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name = Schedule.TABLE_NAME)
public class Schedule extends BaseEntity {

    public static final String TABLE_NAME = "schedule";

    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;

    @ManyToOne
    @JoinColumn(name = "id_event")
    private Event event;

    @Column(name = "date_and_time")
    private LocalDateTime dateAndTime;

    @Column(name = "end_time")
    private LocalDateTime endTime;

    @Column(name = "accepted")
    private Boolean accepted;

    @Column(name = "creator")
    private Boolean creator;

    public Schedule(LocalDateTime dateAndTime, LocalDateTime endTime,Boolean creator, Boolean accepted) {
        this.dateAndTime = dateAndTime;
        this.endTime = endTime;
        this.creator = creator;
        this.accepted = accepted;
    }

}
