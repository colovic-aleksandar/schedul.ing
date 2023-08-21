package rs.enjoying.scheduling.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(final ViewControllerRegistry registry) {
        registry.addViewController("/")
                .setViewName("index");
    }

    @Bean
    public ViewResolver viewResolver() {
        final InternalResourceViewResolver bean = new InternalResourceViewResolver();
        bean.setViewClass(JstlView.class);
        bean.setPrefix("/WEB-INF/view/");
        bean.setSuffix(".jsp");
        //bean.setOrder(2);
        return bean;
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {

        registry.addResourceHandler("/Resources/**")
                .addResourceLocations("/WEB-INF/Resources/");

        registry.addResourceHandler("/css/**")
                .addResourceLocations("/WEB-INF/css/");

       registry.addResourceHandler("/js/**")
               .addResourceLocations("/WEB-INF/js/");

    }


//    @Bean
//    public ViewResolver resourceBundleViewResolver() {
//        ResourceBundleViewResolver bean = new ResourceBundleViewResolver();
//        bean.setBasename("views");
//        return bean;
//    }
}