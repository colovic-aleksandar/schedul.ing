package rs.enjoying.scheduling.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import rs.enjoying.scheduling.model.data.repository.core.UserRepository;

import java.util.Arrays;
import java.util.Collections;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Value("${security.jwt.token.secret-key}")
    private String secret;

    private UserRepository userRepository;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .headers().disable()
                .csrf().disable()
                .authorizeRequests()

                //signup,signin,password reset... are routes permitted to all users
                .antMatchers("/signup").permitAll()
                .antMatchers("/accountConfirm*").permitAll()
                .antMatchers("/login").permitAll()
                .antMatchers("/register").permitAll()
                .antMatchers("/password").permitAll()
                .antMatchers("/password*").permitAll()
                .antMatchers("/passwordReset*").permitAll()

                //error pages are permitted to all users
                .antMatchers("/error").permitAll()
                .antMatchers("/error/*").permitAll()
                .antMatchers("/error*").permitAll()
                .antMatchers("error").permitAll()
                //.antMatchers("/users/*").permitAll()
                //.antMatchers("/users*").permitAll()

                //admin routes
                .antMatchers("/admin").hasRole("ADMIN")
                .antMatchers("/admin/*").hasRole("ADMIN")

                // all resources are permitted to all users
                .antMatchers("/templates/**").permitAll()
                .antMatchers("/css/**").permitAll()
                .antMatchers("/css/*").permitAll()
                .antMatchers("/js/**").permitAll()
                .antMatchers("/Resources/**").permitAll()
                .antMatchers("/assets/css/**", "assets/js/**", "/images/**").permitAll()

                //any other routes not listed above are available only to
                //authenticated users
                .anyRequest().authenticated()

                //logout configuration
                .and().logout()
                .logoutUrl("/logout")
                .logoutSuccessUrl("/login")
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID", "jwttoken", "userID")

                //custom exception handling
                .and()
                .exceptionHandling().accessDeniedPage("/error")

                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                //CORS configuration
                .and()
                .cors(withDefaults());

        //jwt token filter is executed for every http request
        http.addFilterBefore(new JwtTokenFilter(userRepository, secret), UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        //CORS configuration - all application routes are allowed
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Collections.singletonList("http://localhost:8080/*"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
