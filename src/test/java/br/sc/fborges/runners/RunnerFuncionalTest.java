package br.sc.fborges.runners;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/",
		glue = "br.sc.fborges.steps",
		tags = "@funcionais",
		plugin = {"pretty", "html:target/report.html", "json:target/report.json"},
		monochrome = true,
		snippets = SnippetType.CAMELCASE,
		dryRun = false
)

public class RunnerFuncionalTest {
	
	@BeforeClass
	public static void reset() {

		
		WebDriver driver = new ChromeDriver();
		driver.get("http://srbarriga.herokuapp.com/");
		driver.findElement(By.id("email")).sendKeys(java.util.Objects.requireNonNull(System.getenv("CUCUMBER_TEST_EMAIL"), "Set CUCUMBER_TEST_EMAIL"));
		driver.findElement(By.id("senha")).sendKeys(java.util.Objects.requireNonNull(System.getenv("CUCUMBER_TEST_PASSWORD"), "Set CUCUMBER_TEST_PASSWORD"));
		driver.findElement(By.tagName("button")).click();
		driver.findElement(By.linkText("reset")).click();
		driver.quit();
	}

}
