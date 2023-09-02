package com.sstec.qgql.model.gql;

import com.sstec.qgql.model.generated.tables.pojos.Application;
import com.sstec.qgql.model.generated.tables.pojos.Beneficiary;

import java.util.List;

public class ApplicationGQL extends Application {
    List<Beneficiary> beneficiaries;
}
