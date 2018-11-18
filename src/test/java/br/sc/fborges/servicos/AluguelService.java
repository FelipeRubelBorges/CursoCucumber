package br.sc.fborges.servicos;

import br.sc.fborges.entidades.Filme;
import br.sc.fborges.entidades.NotaAluguel;
import br.sc.fborges.entidades.TipoAluguel;
import br.sc.fborges.utils.DateUtils;

public class AluguelService {

	public NotaAluguel alugar(Filme filme, TipoAluguel tipo) {
		if (filme.getEstoque() == 0) {
			throw new RuntimeException("Filme sem Estoque");
		}
		NotaAluguel nota = new NotaAluguel();

		switch (tipo) {
		case COMUM:
			nota.setPreço(filme.getAluguel());
			nota.setDataEntrega(DateUtils.obterDataDiferencaDias(1));
			nota.setPontuacao(1);
			break;
		case EXTENDIDO:
			nota.setPreço(filme.getAluguel() * 2);
			nota.setDataEntrega(DateUtils.obterDataDiferencaDias(3));
			nota.setPontuacao(2);
			break;
		case SEMANAL:
			nota.setPreço(filme.getAluguel() * 3);
			nota.setDataEntrega(DateUtils.obterDataDiferencaDias(7));
			nota.setPontuacao(3);
			break;
		default:

		}

		filme.setEstoque(filme.getEstoque() - 1);
		return nota;

	}

}
