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
  "line": 8,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "cadastro-de-contas;deve-inserir-uma-conta-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuário \"felipe.rubel@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"123456\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "a conta é inserida com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 5966635136,
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
  "duration": 301482573,
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
  "duration": 231167115,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 700598087,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 73751337,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 21349,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 39002,
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
  "duration": 61993,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 20117,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.aContaÉInseridaComSucesso()"
});
formatter.result({
  "duration": 20938,
  "status": "passed"
});
});