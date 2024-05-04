function clicou() {
    let prod = prompt('Qual é o produto que você está comprando?');
    let preco = parseFloat(prompt(`Qual é o preço do ${prod}?`));
    let desconto = preco * (10/100);
    let tot = preco - desconto;

    res.innerHTML = `<p><strong>Calculando desconto de 10% para ${prod}</strong></p>`;
    res.innerHTML += `O preço original era ${preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}<br>`;
    res.innerHTML += `Você acaba de ganhar ${desconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} de desconto (-10%)<br>`;
    res.innerHTML += `No fim, você vai pagar ${tot.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} no produto ${prod}`;
}
