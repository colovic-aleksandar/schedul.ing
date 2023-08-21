package rs.enjoying.scheduling.model.data.repository.core;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import rs.enjoying.scheduling.model.data.entity.core.ResetToken;
import rs.enjoying.scheduling.model.data.repository.base.BaseRepository;

@Repository("resetTokenRepository")
public interface ResetTokenRepository extends BaseRepository<Long, ResetToken> {

    ResetToken findByToken(String token);

    @Query(value = "select * from reset_token where email = ?1", nativeQuery = true)
    ResetToken findResetTokenByEmail(String email);
}
