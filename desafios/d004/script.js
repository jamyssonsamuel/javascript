var box = window.document.getElementById('box');
box.addEventListener('click', clicou);

function clicou(){
   let produto = prompt('Qual o produto você está comprando?', 'Digite aqui');
   let valor = parseFloat(prompt(`Quanto custa ${produto} que você deseja comprar?`, 'Informe aqui').replace(',', '.'));
   let pago = parseFloat(prompt(`Quanto você pagou para comprar ${produto}?`, 'Informe aqui').replace(',', '.'));
   let troco = pago - valor;

   // Formatação dos valores como dinheiro do Brasil (R$)
   valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
   pago = pago.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
   troco = troco.toFixed(2).replace('.', ',');
   troco = troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

   alert(`Você comprou um(a) ${produto} que custou ${valor}.\nPagou ${pago} em dinheiro e vai receber ${troco} de troco.\nVolte Sempre!`);
}
