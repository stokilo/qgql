package com.sstec.qgql;

import io.quarkus.runtime.StartupEvent;
import io.quarkus.runtime.configuration.ProfileManager;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.event.Observes;
import org.buildobjects.process.ProcBuilder;
import org.buildobjects.process.ProcResult;
import org.jboss.logging.Logger;

import java.io.File;
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
                                log.info("Generate schema under web/generated dir");
                                ProcResult schema = new ProcBuilder("curl", "" +
                                        "http://localhost:8080/graphql/schema.graphql").run();
                                Files.write(Paths.get("web/gql/schema.gql"), schema.getOutputBytes());

                                log.info("Start conversion from gql to ts");
                                ProcResult output = new ProcBuilder("yarn", "codegen")
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
