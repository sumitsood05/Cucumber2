package stepdefn;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {
	WebDriver driver;
	@Before("@magento")
	public void before_magento() {
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	@Before("@maps")
	public void before_maps() {
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	@After
	public void after() {
		driver.quit();
	}
	@Given("^I am able to access magento web page$")
	public void i_am_able_to_access_magento_web_page(){
	    // Write code here that turns the phrase above into concrete actions
		driver.get("http://magento.com");
	}

	@Given("^I click on user icon$")
	public void i_click_on_user_icon() {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.className("fa-user")).click();
	}

	@When("^I input the username as \"([^\"]*)\"$")
	public void i_input_the_username_as(String arg1) {
	    // Write code here that turns the phrase above into concrete actions
	   driver.findElement(By.id("email")).sendKeys(arg1);
	}

	@When("^I input the password as \"([^\"]*)\"$")
	public void i_input_the_password_as(String arg1)  {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("pass")).sendKeys(arg1);
	}

	@When("^I click on the login button$")
	public void i_click_on_the_login_button() {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("send2")).click();
	}

	@Then("^I should see the magento ID as \"([^\"]*)\"$")
	public void i_should_see_the_magento_ID_as(String arg1) {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.linkText("Log Out")).click();
	}
	
	@Then("^I should see the error message$")
	public void i_should_see_the_error_message(){
	    // Write code here that turns the phrase above into concrete actions
	    Assert.assertTrue(driver.findElement(By.className("error-msg")).isDisplayed());
	}
	
	@Given("^I am able to access maps web page$")
	public void i_am_able_to_access_maps_web_page(){
	    // Write code here that turns the phrase above into concrete actions
	   driver = new ChromeDriver();
	   driver.manage().window().maximize();
	   driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	   driver.get("http://maps.google.com");
	}

	@Given("^I click on directions button$")
	public void i_click_on_directions_button(){
	    // Write code here that turns the phrase above into concrete actions
	   driver.findElement(By.id("searchbox-directions")).click();
	}

	@When("^I update the cities$")
	public void i_update_the_cities(DataTable arg1){
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
	    List<List<String>> cities = arg1.raw();
	    int count = cities.size();
	    for(int i=1;i<=count;i++)
	    {
	    	driver.findElement(By.id("sb_ifc"+(50+i))).findElement(By.tagName("input")).sendKeys(cities.get(i-1).get(0)+Keys.ENTER);
	    	if(i==1 || i==count)
	    		continue;
	    	driver.findElement(By.className("waypoint-add")).click();
	    }
	}

	@Then("^I should get the total distance as (\\d+) kms$")
	public void i_should_get_the_total_distance_as_kms(int arg1){
	    // Write code here that turns the phrase above into concrete actions
	}

}
