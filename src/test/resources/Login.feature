@login
Feature: Login feature
This feature tests for positive and negative login scenarios
#This is comments
Background:
Given I am able to access magento web page
And I click on user icon

@magento @positive
Scenario: Positive Login Scenario
When I input the username as "natarajan.ramanathan93@gmail.com"
And I input the password as "Welcome123"
And I click on the login button
Then I should see the magento ID as "ID : MAG123123" 

@magento @negative
Scenario Outline: Negative login scenario
When I input the username as "<user>"
And I input the password as "<pwd>"
And I click on the login button
Then I should see the error message
Examples:
|user|pwd|
|user1@gmail.com|password1|
|user2@gmail.com|password2|
|user3@gmail.com|password3|

@maps 
Scenario: Passing multiple city into googlemaps
Given I am able to access maps web page
And I click on directions button
When I update the cities
|chennai|
|hyderabad|
|kolkatta|
|mumbai|
|pune|
Then I should get the total distance as 2500 kms
