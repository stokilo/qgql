package com.sstec.qgql.model.gql;

import com.sstec.qgql.model.generated.tables.pojos.Beneficiary;
import com.sstec.qgql.model.generated.tables.records.BeneficiaryRecord;


public class BeneficiaryGQL extends Beneficiary {

    public BeneficiaryGQL(BeneficiaryRecord beneficiaryRecord) {
        super(beneficiaryRecord.getId(), beneficiaryRecord.getApplicationId(), beneficiaryRecord.getFirstName(),
                beneficiaryRecord.getLastName(), beneficiaryRecord.getAge());
    }

}
