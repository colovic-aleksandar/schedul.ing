package rs.enjoying.scheduling.configuration;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.GenericFilterBean;
import rs.enjoying.scheduling.model.data.entity.core.User;
import rs.enjoying.scheduling.model.data.repository.core.UserRepository;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Base64;
import java.util.Date;
import java.util.Optional;

public class JwtTokenFilter extends GenericFilterBean {

    private final String secret;

    private static final String BEARER = "Bearer";

    private final UserRepository userRepository;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    public JwtTokenFilter(UserRepository userRepository, String secret) {
        this.userRepository = userRepository;
        this.secret = Base64.getEncoder().encodeToString(secret.getBytes());
    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain filterChain)
            throws IOException, ServletException, ExpiredJwtException {
        try {
            // Getting all cookies from request
            Cookie[] cookies = ((HttpServletRequest) req).getCookies();
            String jwttoken = "";
            if (cookies != null) {
                for (Cookie cookie : cookies) {
                    if (cookie.getName().equalsIgnoreCase("jwttoken")) {
                        jwttoken = cookie.getValue();
                    }
                }
            }

            // Checking if jwt exists in request cookies
            //if (jwttoken.equals("")) {
               // throw new Exception();
            //}

            // Decoding jwt token
            byte[] decodedBytes = Base64.getDecoder().decode(jwttoken);
            String decodedJwttoken = new String(decodedBytes);
            getBearerToken(decodedJwttoken).ifPresent(token -> {
                String email = getClaimFromToken(token.toString()).getSubject();
                User user = userRepository.findByEmail(email);

                // If there is no user with credentials from jwt token
                // We delete all cookies and return to /login
                if (user == null) {
                    try {
                        throw new Exception();
                    } catch (Exception e) {
                        Cookie cookie = new Cookie("jwttoken", "");
                        cookie.setMaxAge(0);
                        cookie.setHttpOnly(true);
                        ((HttpServletResponse) res).addCookie(cookie);

                        if (!((HttpServletRequest) req).getRequestURL().toString()
                                .equals("http://localhost:8080/login")) {
                            ((HttpServletResponse) res).setHeader("Location",
                                    "http://localhost:8080/login");
                            ((HttpServletResponse) res).setStatus(302);
                        }
                    }
                }

                // Defining user roles
                UserDetails userDetails;
                assert user != null;
                if (user.getRole()) {
                    userDetails = org.springframework.security.core.userdetails.User
                            .withDefaultPasswordEncoder()
                            .username(user.getEmail())
                            .password(user.getPassword())
                            .roles("ADMIN")
                            .build();
                } else {
                    userDetails = org.springframework.security.core.userdetails.User
                            .withDefaultPasswordEncoder()
                            .username(user.getEmail())
                            .password(user.getPassword())
                            .roles("USER")
                            .build();
                }

                // Checking authentication and authorization
                if (email.equals(user.getEmail()) && !isJwtExpired(token.toString())) {
                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                            new UsernamePasswordAuthenticationToken(userDetails, null,
                                    userDetails.getAuthorities());
                    usernamePasswordAuthenticationToken.setDetails(
                            new WebAuthenticationDetailsSource().buildDetails((HttpServletRequest) req));
                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                }
            });
        } catch (ExpiredJwtException ex) {
            req.setAttribute("expired",ex.getMessage());
        }
        filterChain.doFilter(req, res);
    }

    private Optional getBearerToken(String headerVal) {
        // Getting jwt token from string
        if (headerVal != null && headerVal.startsWith(BEARER)) {
            return Optional.of(headerVal.replace(BEARER, "").trim());
        }
        return Optional.empty();
    }

    private Claims getClaimFromToken(String token) {
        // Getting claims from jwt token
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
    }

    private Boolean isJwtExpired(String token) {
        // Checking if jwt token has expired
        Date expirationDate = getClaimFromToken(token).getExpiration();
        return expirationDate.before(new Date());
    }
}