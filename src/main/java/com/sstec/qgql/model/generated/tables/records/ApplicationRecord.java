/*
 * This file is generated by jOOQ.
 */
package com.sstec.qgql.model.generated.tables.records;


import com.sstec.qgql.model.generated.tables.Application;

import org.jooq.Field;
import org.jooq.Record1;
import org.jooq.Record4;
import org.jooq.Row4;
import org.jooq.impl.UpdatableRecordImpl;


/**
 * This class is generated by jOOQ.
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class ApplicationRecord extends UpdatableRecordImpl<ApplicationRecord> implements Record4<Integer, String, String, String> {

    private static final long serialVersionUID = 1L;

    /**
     * Setter for <code>public.application.id</code>.
     */
    public void setId(Integer value) {
        set(0, value);
    }

    /**
     * Getter for <code>public.application.id</code>.
     */
    public Integer getId() {
        return (Integer) get(0);
    }

    /**
     * Setter for <code>public.application.application_nr</code>.
     */
    public void setApplicationNr(String value) {
        set(1, value);
    }

    /**
     * Getter for <code>public.application.application_nr</code>.
     */
    public String getApplicationNr() {
        return (String) get(1);
    }

    /**
     * Setter for <code>public.application.contribution</code>.
     */
    public void setContribution(String value) {
        set(2, value);
    }

    /**
     * Getter for <code>public.application.contribution</code>.
     */
    public String getContribution() {
        return (String) get(2);
    }

    /**
     * Setter for <code>public.application.frequency</code>.
     */
    public void setFrequency(String value) {
        set(3, value);
    }

    /**
     * Getter for <code>public.application.frequency</code>.
     */
    public String getFrequency() {
        return (String) get(3);
    }

    // -------------------------------------------------------------------------
    // Primary key information
    // -------------------------------------------------------------------------

    @Override
    public Record1<Integer> key() {
        return (Record1) super.key();
    }

    // -------------------------------------------------------------------------
    // Record4 type implementation
    // -------------------------------------------------------------------------

    @Override
    public Row4<Integer, String, String, String> fieldsRow() {
        return (Row4) super.fieldsRow();
    }

    @Override
    public Row4<Integer, String, String, String> valuesRow() {
        return (Row4) super.valuesRow();
    }

    @Override
    public Field<Integer> field1() {
        return Application.APPLICATION.ID;
    }

    @Override
    public Field<String> field2() {
        return Application.APPLICATION.APPLICATION_NR;
    }

    @Override
    public Field<String> field3() {
        return Application.APPLICATION.CONTRIBUTION;
    }

    @Override
    public Field<String> field4() {
        return Application.APPLICATION.FREQUENCY;
    }

    @Override
    public Integer component1() {
        return getId();
    }

    @Override
    public String component2() {
        return getApplicationNr();
    }

    @Override
    public String component3() {
        return getContribution();
    }

    @Override
    public String component4() {
        return getFrequency();
    }

    @Override
    public Integer value1() {
        return getId();
    }

    @Override
    public String value2() {
        return getApplicationNr();
    }

    @Override
    public String value3() {
        return getContribution();
    }

    @Override
    public String value4() {
        return getFrequency();
    }

    @Override
    public ApplicationRecord value1(Integer value) {
        setId(value);
        return this;
    }

    @Override
    public ApplicationRecord value2(String value) {
        setApplicationNr(value);
        return this;
    }

    @Override
    public ApplicationRecord value3(String value) {
        setContribution(value);
        return this;
    }

    @Override
    public ApplicationRecord value4(String value) {
        setFrequency(value);
        return this;
    }

    @Override
    public ApplicationRecord values(Integer value1, String value2, String value3, String value4) {
        value1(value1);
        value2(value2);
        value3(value3);
        value4(value4);
        return this;
    }

    // -------------------------------------------------------------------------
    // Constructors
    // -------------------------------------------------------------------------

    /**
     * Create a detached ApplicationRecord
     */
    public ApplicationRecord() {
        super(Application.APPLICATION);
    }

    /**
     * Create a detached, initialised ApplicationRecord
     */
    public ApplicationRecord(Integer id, String applicationNr, String contribution, String frequency) {
        super(Application.APPLICATION);

        setId(id);
        setApplicationNr(applicationNr);
        setContribution(contribution);
        setFrequency(frequency);
        resetChangedOnNotNull();
    }
}
