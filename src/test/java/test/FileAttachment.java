package test;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class FileAttachment {

	public static void main(String[] args) throws IOException, InterruptedException {
		// TODO Auto-generated method stub
		WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get("http://naukri.com");
		driver.findElement(By.id("input_resumeParser")).click();
		Process p = Runtime.getRuntime().exec("C:\\Users\\User.DESKTOP-9BS028J.000\\Downloads\\attach.exe \"C:\\Resume.pdf\"");
		p.waitFor();
		
	}

}
