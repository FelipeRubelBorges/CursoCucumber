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
formatter.before({
  "duration": 436823,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Não deve inserir uma conta sem nome",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-sem-nome",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 21,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 22,
  "name": "informo o usuário \"felipe.rubel@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "a senha \"123456\"",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 26,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 27,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "sou notificado que o nome da conta é obrigatório",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 5503262629,
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
  "duration": 230300037,
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
  "duration": 149185513,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1379254411,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 61454589,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 90979593,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 426522499,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 384313600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueONomeDaContaÉObrigatório()"
});
formatter.result({
  "duration": 39045212,
  "status": "passed"
});
formatter.after({
  "duration": 760518457,
  "status": "passed"
});
formatter.before({
  "duration": 103047,
  "status": "passed"
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
  "duration": 3999278256,
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
  "duration": 205305847,
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
  "duration": 109004724,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 823004344,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 50017531,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 80235539,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 463318315,
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
  "duration": 121829437,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 508454425,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueJáExisteUmaContaComEsseNome()"
});
formatter.result({
  "duration": 35319074,
  "status": "passed"
});
formatter.after({
  "duration": 699696522,
  "status": "passed"
});
});