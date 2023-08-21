package rs.enjoying.scheduling.model.data.repository.core;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import rs.enjoying.scheduling.model.data.entity.core.VerificationToken;
import rs.enjoying.scheduling.model.data.repository.base.BaseRepository;

import java.util.Date;

@Repository("verificationTokenRepository")
public interface VerificationTokenRepository extends BaseRepository<Long, VerificationToken> {

    VerificationToken findByToken(String token);

    @Modifying
    @Query(value = "update verification_token set expiry_date = ?1 where token = ?2", nativeQuery = true)
    void updateTokenExpirationDate(Date expiry_date, String token);

    @Modifying
    @Query(value = "update verification_token set token = ?1 where token = ?2", nativeQuery = true)
    void updateToken(String newToken, String oldToken);

}
