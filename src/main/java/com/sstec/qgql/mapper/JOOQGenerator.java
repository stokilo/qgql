package com.sstec.qgql.mapper;

import io.quarkus.runtime.StartupEvent;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.event.Observes;
import org.jboss.logging.Logger;
import org.jooq.codegen.DefaultGeneratorStrategy;
import org.jooq.codegen.GenerationTool;
import org.jooq.meta.jaxb.*;

@ApplicationScoped
public class JOOQGenerator {

    private static final Logger LOG = Logger.getLogger(JOOQGenerator.class);

    void onStart(@Observes StartupEvent ev) {
        try {
            Configuration configuration = new Configuration()
                    .withJdbc(new Jdbc()
                            .withDriver("org.postgresql.Driver")
                            .withUrl("jdbc:postgresql://localhost:5432/quarkus")
                            .withUser("quarkus")
                            .withPassword("quarkus"))
                    .withGenerator(new Generator()
                            .withDatabase(new Database()
                                    .withName("org.jooq.meta.postgres.PostgresDatabase")
                                    .withIncludes(".*")
                                    .withExcludes("")
                                    .withIncludeIndexes(false)
                                    .withIncludeSystemTables(false)
                                    .withOutputCatalogToDefault(false)
                                    .withInputSchema("public"))
                            .withStrategy(new Strategy().withName("com.sstec.qgql.mapper.CustomGeneratorStrategy"))
                            .withGenerate(new Generate()
                                    .withPojos(true)
                                    .withRelations(true)
                                    .withRecords(true)
                            )
                            .withTarget(new Target()
                                    .withPackageName("com.sstec.qgql.model.generated")
                                    .withDirectory("src/main/java")));

            GenerationTool.generate(configuration);

        } catch (Throwable t) {
            LOG.error("JOOQ Generator exception", t);
        }
    }



}
