package rs.enjoying.scheduling.model.data.repository.core;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import rs.enjoying.scheduling.model.data.entity.core.User;
import rs.enjoying.scheduling.model.data.repository.base.BaseRepository;

@Repository
public interface UserRepository extends BaseRepository<Long, User>
{
    User findByEmail(String email);

    @Modifying
    @Query(value = "update system_user set registered = ?1 where id = ?2", nativeQuery = true)
    void setUserEnableById(Boolean registered, Long userId);

    @Query(value = "update system_user set photo = ?1 where id = ?2", nativeQuery = true)
    void setUserPhoto(String photo, Long id);

    @Modifying
    @Query(value = "update system_user set password = ?1 where email = ?2", nativeQuery = true)
    void updateUserPassword(String  password, String email);

}
