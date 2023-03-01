package com.sstec.qgql;

import io.quarkus.runtime.ApplicationLifecycleManager;
import io.quarkus.runtime.ShutdownEvent;
import io.quarkus.runtime.StartupEvent;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.event.Observes;

import io.quarkus.runtime.configuration.ProfileManager;
import org.buildobjects.process.ProcBuilder;
import org.buildobjects.process.ProcResult;
import org.jboss.logging.Logger;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@ApplicationScoped
public class App {
    private static final Logger log = Logger.getLogger(App.class);

    void onStart(@Observes StartupEvent ev) {
        if (ProfileManager.getLaunchMode().isDevOrTest()) {
            new java.util.Timer().schedule(
                    new java.util.TimerTask() {
                        @Override
                        public void run() {
                            try {
                                log.info("Generate schmea under web/generated dir");
                                ProcResult schema = new ProcBuilder("curl", "" +
                                        "http://localhost:8080/q/openapi").run();
                                Files.write(Paths.get("web/generated/schema.yaml"), schema.getOutputBytes());

                                log.info("Start conversion from gql to ts");
                                ProcResult output = new ProcBuilder("yarn", "generate-api")
                                        .withWorkingDirectory(new File("web")).run();
                                log.info(output.getOutputString());
                            } catch (Exception e) {
                                log.error(e.getMessage(), e);
                            }
                        }
                    },
                    1000
            );
        }
    }

}
