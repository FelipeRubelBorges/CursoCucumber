package br.sc.fborges.servicos;

import br.sc.fborges.entidades.Filme;
import br.sc.fborges.entidades.NotaAluguel;
import br.sc.fborges.utils.DateUtils;

public class AluguelService {

	public NotaAluguel alugar(Filme filme, String tipo) {
		if (filme.getEstoque() == 0) {
			throw new RuntimeException("Filme sem Estoque");
		}
		NotaAluguel nota = new NotaAluguel();
		if ("extendido".equals(tipo)) {
			nota.setPreço(filme.getAluguel() * 2);
			nota.setDataEntrega(DateUtils.obterDataDiferencaDias(3));
			nota.setPontuacao(2);
		} else {
			nota.setPreço(filme.getAluguel());
			nota.setDataEntrega(DateUtils.obterDataDiferencaDias(1));
			nota.setPontuacao(1);

		}
		filme.setEstoque(filme.getEstoque() - 1);

		return nota;

	}

}
