package com.online.cucumber.stepdefs;

import com.online.JhipsterOnlinegeneratedCodeApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = JhipsterOnlinegeneratedCodeApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
