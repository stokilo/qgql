package com.sstec.qgql.model.gql;

import com.sstec.qgql.model.generated.tables.pojos.Application;

import java.util.ArrayList;
import java.util.List;

public class ApplicationGQL extends Application {
    public List<BeneficiaryGQL> beneficiaries = new ArrayList<>();
}
