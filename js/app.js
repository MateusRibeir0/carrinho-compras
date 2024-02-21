// Precisei por esta variável aqui em cima para não ficar acumulando a soma do montante total dentro da função.
// Ativar a função limpar apenas para a página começar sem nada, poderia mudar isso no html mas coloquei por aqui.
/*
let totalGeral;
limpar();
let produtosCarrinho = [];

function adicionar() {
    // Capturar valores separadamente do html
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    if(produtosCarrinho.includes(nomeProduto)){

    } else{
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
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}
*/

let totalGeral = 0;
let carrinhoProdutos = []; // Array para armazenar informações sobre os produtos no carrinho

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1].replace(',', '.'));
    let quantidade = parseInt(document.getElementById('quantidade').value);

    // Verificar se o produto já está no carrinho
    let produtoNoCarrinho = carrinhoProdutos.find(item => item.nome === nomeProduto);

    if (produtoNoCarrinho) {
        // Atualizar a quantidade e o preço do produto existente
        produtoNoCarrinho.quantidade += quantidade;
        produtoNoCarrinho.preco += quantidade * valorUnitario;
    } else {
        // Adicionar um novo produto ao carrinho
        carrinhoProdutos.push({
            nome: nomeProduto,
            quantidade: quantidade,
            preco: quantidade * valorUnitario
        });
    }

    // Atualizar o HTML do carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = '';

    carrinhoProdutos.forEach(item => {
        carrinho.innerHTML += `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${item.quantidade}x</span> ${item.nome} <span class="texto-azul">R$${item.preco.toFixed(2)}</span>
        </section>`;
    });

    // Atualizar o total geral
    totalGeral = carrinhoProdutos.reduce((total, item) => total + item.preco, 0);
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`;

    document.getElementById('quantidade').value = 0;
}

