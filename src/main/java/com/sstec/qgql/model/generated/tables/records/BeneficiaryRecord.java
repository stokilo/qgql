/*
 * This file is generated by jOOQ.
 */
package com.sstec.qgql.model.generated.tables.records;


import com.sstec.qgql.model.generated.tables.Beneficiary;

import org.jooq.Field;
import org.jooq.Record1;
import org.jooq.Record5;
import org.jooq.Row5;
import org.jooq.impl.UpdatableRecordImpl;


/**
 * This class is generated by jOOQ.
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class BeneficiaryRecord extends UpdatableRecordImpl<BeneficiaryRecord> implements Record5<Integer, Long, String, String, String> {

    private static final long serialVersionUID = 1L;

    /**
     * Setter for <code>public.beneficiary.id</code>.
     */
    public void setId(Integer value) {
        set(0, value);
    }

    /**
     * Getter for <code>public.beneficiary.id</code>.
     */
    public Integer getId() {
        return (Integer) get(0);
    }

    /**
     * Setter for <code>public.beneficiary.application_id</code>.
     */
    public void setApplicationId(Long value) {
        set(1, value);
    }

    /**
     * Getter for <code>public.beneficiary.application_id</code>.
     */
    public Long getApplicationId() {
        return (Long) get(1);
    }

    /**
     * Setter for <code>public.beneficiary.first_name</code>.
     */
    public void setFirstName(String value) {
        set(2, value);
    }

    /**
     * Getter for <code>public.beneficiary.first_name</code>.
     */
    public String getFirstName() {
        return (String) get(2);
    }

    /**
     * Setter for <code>public.beneficiary.last_name</code>.
     */
    public void setLastName(String value) {
        set(3, value);
    }

    /**
     * Getter for <code>public.beneficiary.last_name</code>.
     */
    public String getLastName() {
        return (String) get(3);
    }

    /**
     * Setter for <code>public.beneficiary.age</code>.
     */
    public void setAge(String value) {
        set(4, value);
    }

    /**
     * Getter for <code>public.beneficiary.age</code>.
     */
    public String getAge() {
        return (String) get(4);
    }

    // -------------------------------------------------------------------------
    // Primary key information
    // -------------------------------------------------------------------------

    @Override
    public Record1<Integer> key() {
        return (Record1) super.key();
    }

    // -------------------------------------------------------------------------
    // Record5 type implementation
    // -------------------------------------------------------------------------

    @Override
    public Row5<Integer, Long, String, String, String> fieldsRow() {
        return (Row5) super.fieldsRow();
    }

    @Override
    public Row5<Integer, Long, String, String, String> valuesRow() {
        return (Row5) super.valuesRow();
    }

    @Override
    public Field<Integer> field1() {
        return Beneficiary.BENEFICIARY.ID;
    }

    @Override
    public Field<Long> field2() {
        return Beneficiary.BENEFICIARY.APPLICATION_ID;
    }

    @Override
    public Field<String> field3() {
        return Beneficiary.BENEFICIARY.FIRST_NAME;
    }

    @Override
    public Field<String> field4() {
        return Beneficiary.BENEFICIARY.LAST_NAME;
    }

    @Override
    public Field<String> field5() {
        return Beneficiary.BENEFICIARY.AGE;
    }

    @Override
    public Integer component1() {
        return getId();
    }

    @Override
    public Long component2() {
        return getApplicationId();
    }

    @Override
    public String component3() {
        return getFirstName();
    }

    @Override
    public String component4() {
        return getLastName();
    }

    @Override
    public String component5() {
        return getAge();
    }

    @Override
    public Integer value1() {
        return getId();
    }

    @Override
    public Long value2() {
        return getApplicationId();
    }

    @Override
    public String value3() {
        return getFirstName();
    }

    @Override
    public String value4() {
        return getLastName();
    }

    @Override
    public String value5() {
        return getAge();
    }

    @Override
    public BeneficiaryRecord value1(Integer value) {
        setId(value);
        return this;
    }

    @Override
    public BeneficiaryRecord value2(Long value) {
        setApplicationId(value);
        return this;
    }

    @Override
    public BeneficiaryRecord value3(String value) {
        setFirstName(value);
        return this;
    }

    @Override
    public BeneficiaryRecord value4(String value) {
        setLastName(value);
        return this;
    }

    @Override
    public BeneficiaryRecord value5(String value) {
        setAge(value);
        return this;
    }

    @Override
    public BeneficiaryRecord values(Integer value1, Long value2, String value3, String value4, String value5) {
        value1(value1);
        value2(value2);
        value3(value3);
        value4(value4);
        value5(value5);
        return this;
    }

    // -------------------------------------------------------------------------
    // Constructors
    // -------------------------------------------------------------------------

    /**
     * Create a detached BeneficiaryRecord
     */
    public BeneficiaryRecord() {
        super(Beneficiary.BENEFICIARY);
    }

    /**
     * Create a detached, initialised BeneficiaryRecord
     */
    public BeneficiaryRecord(Integer id, Long applicationId, String firstName, String lastName, String age) {
        super(Beneficiary.BENEFICIARY);

        setId(id);
        setApplicationId(applicationId);
        setFirstName(firstName);
        setLastName(lastName);
        setAge(age);
        resetChangedOnNotNull();
    }

    /**
     * Create a detached, initialised BeneficiaryRecord
     */
    public BeneficiaryRecord(com.sstec.qgql.model.generated.tables.pojos.Beneficiary value) {
        super(Beneficiary.BENEFICIARY);

        if (value != null) {
            setId(value.getId());
            setApplicationId(value.getApplicationId());
            setFirstName(value.getFirstName());
            setLastName(value.getLastName());
            setAge(value.getAge());
            resetChangedOnNotNull();
        }
    }
}
