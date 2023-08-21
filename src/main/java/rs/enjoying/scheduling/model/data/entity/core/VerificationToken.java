package rs.enjoying.scheduling.model.data.entity.core;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import rs.enjoying.scheduling.model.data.entity.base.BaseEntity;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name = VerificationToken.TABLE_NAME)
public class VerificationToken extends BaseEntity {

    public static final String TABLE_NAME = "verification_token";
    public static final int EXPIRATION = 60 * 24;


    @OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "id_user")
    private User user;

    @Column(name = "token", nullable = false, unique = true)
    private String token;

    @Column(name = "expiry_date")
    private Date expiryDate;

    public Date calculateExpiryDate(int expiryTimeInMinutes) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Timestamp(cal.getTime().getTime()));
        cal.add(Calendar.MINUTE, expiryTimeInMinutes);
        return new Date(cal.getTime().getTime());
    }
}
