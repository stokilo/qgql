package com.sstec.qgql.config;

import com.sstec.qgql.App;
import jakarta.enterprise.context.ApplicationScoped;
import org.eclipse.microprofile.health.HealthCheck;
import org.eclipse.microprofile.health.HealthCheckResponse;
import org.eclipse.microprofile.health.Readiness;
import org.jboss.logging.Logger;


@Readiness
@ApplicationScoped
public class GraphqlHealthCheck implements HealthCheck {

    private static final Logger log = Logger.getLogger(App.class);

    @Override
    public HealthCheckResponse call() {
        return HealthCheckResponse.up("Up");
    }
}
