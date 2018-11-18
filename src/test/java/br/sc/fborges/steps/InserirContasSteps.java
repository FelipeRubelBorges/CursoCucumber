package br.sc.fborges.steps;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import junit.framework.Assert;

public class InserirContasSteps {

	private WebDriver driver;

	@Dado("^que estou acessando a aplicação$")
	public void queEstouAcessandoAAplicação() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\ChromeDriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://srbarriga.herokuapp.com/");
	}

	@Quando("^informo o usuário \"([^\"]*)\"$")
	public void informoOUsuário(String arg1) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(arg1);

	}

	@Quando("^a senha \"([^\"]*)\"$")
	public void aSenha(String arg1) throws Throwable {
		driver.findElement(By.id("senha")).sendKeys(arg1);
	}

	@Quando("^seleciono entrar$")
	public void selecionoEntrar() throws Throwable {
		driver.findElement(By.tagName("button")).click();
	}

	@Então("^visualizo a página inicial$")
	public void visualizoAPáginaInicial() throws Throwable {
		String texto = driver.findElement(By.xpath("/html/body/div[1]")).getText();
		assertEquals("Bem vindo, felipe.rubel!", texto);
	}

	@Quando("^seleciono Contas$")
	public void selecionoContas() throws Throwable {

	}

	@Quando("^seleciono Adicionar$")
	public void selecionoAdicionar() throws Throwable {

	}

	@Quando("^informo a conta \"([^\"]*)\"$")
	public void informoAConta(String arg1) throws Throwable {

	}

	@Quando("^seleciono Salvar$")
	public void selecionoSalvar() throws Throwable {

	}

	@Então("^a conta é inserida com sucesso$")
	public void aContaÉInseridaComSucesso() throws Throwable {

	}

}
