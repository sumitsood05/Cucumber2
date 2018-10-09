package test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(dryRun=false,
features= {"src/test/resources/Login.feature"},
glue="stepdefn",
tags= {"~@maps , @positive"},
monochrome=true,
format= {"pretty",
		"html:reports",
		"junit:reports/junit.xml",
		"json:reports/output.json"})
public class Runner {

}
