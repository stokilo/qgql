package com.sstec.qgql.mapper;

import org.jooq.codegen.DefaultGeneratorStrategy;
import org.jooq.meta.Definition;

public class CustomGeneratorStrategy extends DefaultGeneratorStrategy {
    @Override
    public String getJavaClassName(Definition definition, Mode mode) {
        if (mode == Mode.POJO) {
//            System.out.println("test");
        }
        return super.getJavaClassName(definition, mode);
    }
}
