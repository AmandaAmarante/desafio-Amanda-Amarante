class CaixaDaLanchonete {
  cardapio = {
    cafe: 3.0,
    chantily: 1.5,
    suco: 6.2,
    sanduiche: 6.5,
    queijo: 2.0,
    salgado: 7.25,
    combo1: 9.5,
    combo2: 7.5,
  }

  fatorDinheiro = 0.95
  fatorCredito = 1.03
  fatorDebito = 1.0

  formaDePagamento = ['dinheiro', 'debito', 'credito'];

  emReais(valor) {
    return 'R$ ' + valor.toFixed(2).replace('.', ',')
  }

  aplicaDescontoOuAcrescimo(valorTotal, metodoDePagamento) {
    if (metodoDePagamento === 'dinheiro') {
      return this.emReais(valorTotal * this.fatorDinheiro)
    } else if (metodoDePagamento === 'credito') {
      return this.emReais(valorTotal * this.fatorCredito)
    }

    return this.emReais(valorTotal * this.fatorDebito)
  }



  calcularValorDaCompra(metodoDePagamento, itens) {

    if (!this.formaDePagamento.includes(metodoDePagamento)) {
      return 'Forma de pagamento inválida!'

    }

    if (itens.length == 0) {
      return 'Não há itens no carrinho de compra!'
    }

    let valorTotal = 0

    for (const produto of itens) {
      const [nome, quantidade] = produto.split(',')
      valorTotal += this.cardapio[nome] * quantidade;

      if (quantidade == 0) {
        return 'Quantidade inválida!'
      }
      else if (!this.cardapio[nome]) {
        return 'Item inválido!'
      }
      else if (nome === 'chantily' && !itens.some(item => item.includes('cafe'))) {
        return 'Item extra não pode ser pedido sem o principal';

      } else if (nome === 'queijo' && !itens.some(item => item.includes('sanduiche'))) {
        return 'Item extra não pode ser pedido sem o principal';
      }
      else if (nome === 'combo1' && itens.some(item => item.includes('chantily'))) {
        return 'Item extra não pode ser pedido sem o principal, pois combos não são considerados principais';

      } else if (nome === 'combo2' && itens.some(item => item.includes('queijo'))) {
        return 'Item extra não pode ser pedido sem o principal, pois combos não são considerados principais';
      }



    }

    return this.aplicaDescontoOuAcrescimo(valorTotal, metodoDePagamento)


  }
}


export { CaixaDaLanchonete };
