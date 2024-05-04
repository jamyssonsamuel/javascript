let cot = parseFloat(prompt('Quanto está a cotação do dólar agora?'));

function clicou() {
    let real = parseFloat(prompt('Quantos reais(R$) você deseja converter?'));
    let dolar = real / cot;
    
    dolar = dolar.toLocaleString('en', {style: 'currency', currency: 'USD'});
   
    // Verifica se o elemento 'res' existe antes de tentar acessá-lo
    let res = document.getElementById("res");
    if (res) {
        res.innerHTML = `Aqui está o resultado da conversão:<br>${real.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} equivale a ${dolar} Dólares`;
    } else {
        console.error("Elemento 'res' não encontrado.");
    }
}
