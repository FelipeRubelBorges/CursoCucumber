$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Cadastro de contas",
  "description": "\nComo um usuário \nGostaria de cadastrar contas\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 32,
  "name": "Não deve inserir uma conta com nome já existente",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-com-nome-já-existente",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 33,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 34,
  "name": "informo o usuário \"felipe.rubel@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 35,
  "name": "a senha \"123456\"",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 38,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 39,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "sou notificado que já existe uma conta com esse nome",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 4336676023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "felipe.rubel@hotmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 194652353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 95475627,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1013177801,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 58786508,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 72112927,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 466513778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 116755202,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 416963391,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueJáExisteUmaContaComEsseNome()"
});
formatter.result({
  "duration": 37298785,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[sdf]!\u003e but was:\u003c[Já existe uma conta com esse nome]!\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat br.sc.fborges.steps.InserirContasSteps.souNotificadoQueJáExisteUmaContaComEsseNome(InserirContasSteps.java:84)\r\n\tat ✽.Então sou notificado que já existe uma conta com esse nome(src/test/resources/features/inserir_conta.feature:42)\r\n",
  "status": "failed"
});
});