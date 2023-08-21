package rs.enjoying.scheduling.model.data.entity.core;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import rs.enjoying.scheduling.model.data.entity.base.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Calendar;
import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name = ResetToken.TABLE_NAME)
public class ResetToken extends BaseEntity {

    public static final String TABLE_NAME = "reset_token";
    public  static final int EXPIRATION = 60 * 24;

    @Column(name = "token", nullable = false, unique = true)
    private String token;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "expiry_date")
    private Date expiryDate;

    public Date calculateExpiryDate(int expiryTimeInMinutes) {
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.MINUTE, expiryTimeInMinutes);
        return cal.getTime();
    }
}
