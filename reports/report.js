$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature",
  "description": "This feature tests for positive and negative login scenarios",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 7806835624,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: failed to change window state to maximized, current state is normal\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-9BS028J\u0027, ip: \u0027192.168.0.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591088 (7b2b2dca23cca0..., userDataDir: C:\\Users\\USERDE~1.000\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59228}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: 47907b165da4acee49bc528489d96251\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\r\n\tat stepdefn.Steps.before_magento(Steps.java:24)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#This is comments"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am able to access magento web page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on user icon",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_am_able_to_access_magento_web_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.i_click_on_user_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Positive Login Scenario",
  "description": "",
  "id": "login-feature;positive-login-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@magento"
    },
    {
      "line": 9,
      "name": "@positive"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I input the username as \"natarajan.ramanathan93@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I input the password as \"Welcome123\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the magento ID as \"ID : MAG123123\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "natarajan.ramanathan93@gmail.com",
      "offset": 25
    }
  ],
  "location": "Steps.i_input_the_username_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome123",
      "offset": 25
    }
  ],
  "location": "Steps.i_input_the_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ID : MAG123123",
      "offset": 32
    }
  ],
  "location": "Steps.i_should_see_the_magento_ID_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 799349795,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Negative login scenario",
  "description": "",
  "id": "login-feature;negative-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@magento"
    },
    {
      "line": 16,
      "name": "@negative"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I input the username as \"\u003cuser\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I input the password as \"\u003cpwd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see the error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "login-feature;negative-login-scenario;",
  "rows": [
    {
      "cells": [
        "user",
        "pwd"
      ],
      "line": 23,
      "id": "login-feature;negative-login-scenario;;1"
    },
    {
      "cells": [
        "user1@gmail.com",
        "password1"
      ],
      "line": 24,
      "id": "login-feature;negative-login-scenario;;2"
    },
    {
      "cells": [
        "user2@gmail.com",
        "password2"
      ],
      "line": 25,
      "id": "login-feature;negative-login-scenario;;3"
    },
    {
      "cells": [
        "user3@gmail.com",
        "password3"
      ],
      "line": 26,
      "id": "login-feature;negative-login-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4468832992,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#This is comments"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am able to access magento web page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on user icon",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_am_able_to_access_magento_web_page()"
});
formatter.result({
  "duration": 8346649800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_user_icon()"
});
formatter.result({
  "duration": 170810037,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Negative login scenario",
  "description": "",
  "id": "login-feature;negative-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@magento"
    },
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 16,
      "name": "@negative"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I input the username as \"user1@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I input the password as \"password1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see the error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user1@gmail.com",
      "offset": 25
    }
  ],
  "location": "Steps.i_input_the_username_as(String)"
});
formatter.result({
  "duration": 6636573156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password1",
      "offset": 25
    }
  ],
  "location": "Steps.i_input_the_password_as(String)"
});
formatter.result({
  "duration": 143882193,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 158343234,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_should_see_the_error_message()"
});
formatter.result({
  "duration": 2887904999,
  "status": "passed"
});
formatter.after({
  "duration": 822201923,
  "status": "passed"
});
formatter.before({
  "duration": 4544449776,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#This is comments"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am able to access magento web page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on user icon",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_am_able_to_access_magento_web_page()"
});
formatter.result({
  "duration": 7158590589,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_user_icon()"
});
formatter.result({
  "duration": 193290106,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Negative login scenario",
  "description": "",
  "id": "login-feature;negative-login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@magento"
    },
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 16,
      "name": "@negative"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I input the username as \"user2@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I input the password as \"password2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see the error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user2@gmail.com",
      "offset": 25
    }
  ],
  "location": "Steps.i_input_the_username_as(String)"
});
formatter.result({
  "duration": 4584027117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password2",
      "offset": 25
    }
  ],
  "location": "Steps.i_input_the_password_as(String)"
});
formatter.result({
  "duration": 144389220,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 109032826,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_should_see_the_error_message()"
});
formatter.result({
  "duration": 5885154327,
  "status": "passed"
});
formatter.after({
  "duration": 861236827,
  "status": "passed"
});
formatter.before({
  "duration": 3739604796,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#This is comments"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am able to access magento web page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on user icon",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_am_able_to_access_magento_web_page()"
});
formatter.result({
  "duration": 35226634302,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_user_icon()"
});
formatter.result({
  "duration": 175007890,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Negative login scenario",
  "description": "",
  "id": "login-feature;negative-login-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@magento"
    },
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 16,
      "name": "@negative"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I input the username as \"user3@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I input the password as \"password3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see the error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user3@gmail.com",
      "offset": 25
    }
  ],
  "location": "Steps.i_input_the_username_as(String)"
});
formatter.result({
  "duration": 4860065226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password3",
      "offset": 25
    }
  ],
  "location": "Steps.i_input_the_password_as(String)"
});
formatter.result({
  "duration": 117608660,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 120354200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_should_see_the_error_message()"
});
formatter.result({
  "duration": 3539554504,
  "status": "passed"
});
formatter.after({
  "duration": 867457656,
  "status": "passed"
});
});