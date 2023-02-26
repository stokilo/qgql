package com.sstec.qgql.model;



import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;


public class HeroCreationResult {

    public Hero hero;

    public boolean success;

    public String error;

}
