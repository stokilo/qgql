package com.sstec.qgql.mapper;

import io.smallrye.graphql.api.ErrorCode;

@ErrorCode("LEAD_CREATION_FAILED")
public class LeadCreationException extends RuntimeException {

    public LeadCreationException(String msg) {
        super(msg);
    }
}
