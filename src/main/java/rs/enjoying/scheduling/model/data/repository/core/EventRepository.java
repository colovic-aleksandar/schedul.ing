package rs.enjoying.scheduling.model.data.repository.core;

import org.springframework.stereotype.Repository;
import rs.enjoying.scheduling.model.data.entity.core.Event;
import rs.enjoying.scheduling.model.data.repository.base.BaseRepository;

@Repository
public interface EventRepository extends BaseRepository<Long, Event> {
}
