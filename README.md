# Descrição do Código - Desafio Lanchonete

Olá!

Gostaria de compartilhar uma breve explicação sobre o código que desenvolvi para o desafio lanchonete. O objetivo do desafio era criar uma classe chamada `CaixaDaLanchonete` que calcula o valor total de uma compra com base nos itens selecionados e no método de pagamento escolhido.

## Organização e Estrutura

O código está estruturado da seguinte forma:

- A classe `CaixaDaLanchonete` contém as informações do cardápio, formas de pagamento, e métodos para calcular o valor da compra.
- Os preços dos itens são definidos em um objeto `cardapio`.
- As formas de pagamento são armazenadas em um array `formaDePagamento`.
- O código utiliza uma função auxiliar `emReais` para formatar o valor total em reais com duas casas decimais.
- O desconto/acréscimo para diferentes métodos de pagamento é aplicado através da função `aplicaDescontoOuAcrescimo`.

## Funcionamento

1. O método `calcularValorDaCompra` recebe o método de pagamento e a lista de itens selecionados.
2. Ele verifica se o método de pagamento é válido.
3. Em seguida, itera sobre os itens selecionados, somando os valores de acordo com o cardápio.
4. Se a quantidade de um item for 0, retorna "Quantidade inválida".
5. Se o item não existir no cardápio, retorna "Item inválido".
6. Verifica se itens extras (chantily, queijo, etc.) foram pedidos sem seus respectivos itens principais.
7. Verifica se os combos foram pedidos sem os itens extras correspondentes.
8. Aplica o desconto/acréscimo no valor total de acordo com o método de pagamento selecionado.

## Como Usar

1. Instale o Git e o Node.js em sua máquina.
2. Clone este repositório utilizando o comando: git clone git@github.com:AmandaAmarante/desafio-Amanda-Amarante.git
3. Navegue até o diretório do projeto: cd desafio-Amanda-Amarante 
4. Execute os testes para verificar a funcionalidade: npm install,
npm test.







