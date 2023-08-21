package rs.enjoying.scheduling.model.data.repository.base;

import org.springframework.data.jpa.repository.JpaRepository;
import rs.enjoying.scheduling.model.data.entity.base.BaseEntity;

import java.io.Serializable;

/**
 * We make our own generic repository over JpaRepository
 * in order to make our application more framework independent.
 *
 * @param <K> primary key of our repository
 * @param <T> entity type of our repository
 */
public interface BaseRepository<K extends Serializable, T extends BaseEntity> extends JpaRepository<T, K> {
}
