// Precisei por esta variável aqui em cima para não ficar acumulando a soma do montante total dentro da função.
// Ativar a função limpar apenas para a página começar sem nada, poderia mudar isso no html mas coloquei por aqui.

let totalGeral;
limpar();

function adicionar() {
    // Capturar valores separadamente do html
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    // Fazer o subtotal.
    let preco = quantidade * valorUnitario;
    // Colocar as informações de cada compra no carrinho na direita
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;
    // Calcular total geral, somando o montante e expor no html
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}

