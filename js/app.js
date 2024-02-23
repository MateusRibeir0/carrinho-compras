let totalGeral = 0;
let carrinhoProdutos = []; // Array para armazenar informações sobre os produtos no carrinho
limpar();

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

function limpar() {
    let limpaCarrinho = document.getElementById('lista-produtos');
    limpaCarrinho.innerHTML = "";
    let limpaTotal = document.getElementById('valor-total');
    limpaTotal.textContent = `R$${0}`;
}
