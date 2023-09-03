package com.sstec.qgql.model.gql;

import com.sstec.qgql.model.generated.tables.pojos.Beneficiary;
import com.sstec.qgql.model.generated.tables.records.BeneficiaryRecord;
import org.apache.commons.beanutils.PropertyUtilsBean;
import org.jboss.logging.Logger;


public class BeneficiaryGQL extends Beneficiary {

    private static final Logger LOG = Logger.getLogger(BeneficiaryGQL.class);

    public BeneficiaryGQL(BeneficiaryRecord beneficiaryRecord) {
        try {
            new PropertyUtilsBean().copyProperties(this, beneficiaryRecord);
        } catch (Exception e) {
            LOG.error("Exception while copying properties", e);
        }
    }

}
