package com.sstec.qgql.model;

import io.smallrye.graphql.api.ErrorCode;

@ErrorCode("some-business-error-code")
public class SomeBusinessException extends RuntimeException {
    public SomeBusinessException(String message) {
        super(message);
    }
}
