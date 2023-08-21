package rs.enjoying.scheduling.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import rs.enjoying.scheduling.model.data.repository.core.CoreRepositoryPackage;

@Configuration
@EnableJpaRepositories(basePackageClasses = CoreRepositoryPackage.class)
public class DatabaseConfiguration {
}