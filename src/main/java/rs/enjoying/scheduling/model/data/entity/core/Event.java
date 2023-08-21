package rs.enjoying.scheduling.model.data.entity.core;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import rs.enjoying.scheduling.model.data.entity.base.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Set;

@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name = Event.TABLE_NAME)
public class Event extends BaseEntity {

    public static final String TABLE_NAME = "system_event";

    @Column(name = "type")
    private String type;

    @Column(name = "min_users")
    private Long minUsers;

    @Column(name = "max_users")
    private Long maxUsers;

    @Column(name = "location")
    private String location;

    //@JsonManagedReference
    @OneToMany(mappedBy = "event")
    @JsonIgnore
    private Set<Schedule> schedule;

}