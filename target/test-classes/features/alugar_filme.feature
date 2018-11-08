# language: pt
Funcionalidade: Alugar Filme
  Como um usuário
  Eu quero cadastrar aluguéis de filmes
  Para controlar preços e datas de entrega

  Cenário: Deve alugar um filme com sucesso
    Dado um filme com estoque de 2 unidades
    E que o preço do aluguel seja R$ 3
    Quando alugar
    Então o preço do aluguel será R$ 3
    E a data de entrega será em 1 dia
    E o estoque do filme será 1 unidade

  Cenário: Não deve alugar filme sem estoque
    Dado um filme com estoque de 0 unidades
    Quando alugar
    Então não será possível por falta de estoque
    E o estoque do filme será 0 unidade
    
Esquema do Cenário: Deve dar condições conforme tipo de aluguel
	 Dado um filme com estoque de 2 unidades
    E que o preço do aluguel seja R$ <preco>
    E que o tipo do aluguel seja <tipo>
    Quando alugar
    Então o preço do aluguel será R$ <valor>
    E a data de entrega será em 3 <qtdDias> dias
    E a pontuação será de <pontuacao> pontos
    
    | preco | tipo    | valor | qtdDias | pontucao |
    |	  4		|extendido| 8     | 3       | 2        |
    |   4   | comum   | 4     | 1       | 1        |     

