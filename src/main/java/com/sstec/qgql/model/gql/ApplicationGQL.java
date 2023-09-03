package com.sstec.qgql.model.gql;

import com.sstec.qgql.model.generated.tables.pojos.Application;
import org.jboss.logging.Logger;

import java.util.ArrayList;
import java.util.List;


public class ApplicationGQL extends Application {
    public List<BeneficiaryGQL> beneficiaries = new ArrayList<>();
    private static final Logger LOG = Logger.getLogger(ApplicationGQL.class);

    public ApplicationGQL(Application application, List<BeneficiaryGQL> beneficiaries) {
        super(application);
        this.beneficiaries = beneficiaries;
    }

    public ApplicationGQL(Integer id, String applicationNr, String contribution, String frequency) {
        super(id, applicationNr, contribution, frequency);
    }
}
