package rs.enjoying.scheduling.model.data.entity.core;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;
import rs.enjoying.scheduling.model.data.entity.base.BaseEntity;

import javax.persistence.*;
import java.math.BigInteger;
import java.sql.Date;
import java.util.Set;

@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name = User.TABLE_NAME)
public class User extends BaseEntity {

    public static final String TABLE_NAME = "system_user";


    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "date_of_birth")
    private Date dateOfBirth = Date.valueOf("2012-12-12");

    @Column(name = "company_location")
    private String companyLocation = "Nis";

    @Column(name = "job_title")
    private String jobTitle = "Fullstack developer";

    @Column(name = "seniority")
    private String seniority = "Junior";

    @Column(name = "phone_number")
    private String phoneNumber = "063123123";

    @Column(name = "photo")
    private String photo = "Resources/default_avatar.png";

    @Column(name = "role")
    private Boolean role = false;

    @Column(name = "registered")
    private Boolean registered = false;

    private Long attends;
    private Long hosts;
   // private MultipartFile imageFile;


    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private Set<Schedule> schedule;

}