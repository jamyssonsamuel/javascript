function clicar(){
    // Obtém a entrada do usuário, substitui vírgula por ponto se necessário e converte para float
    let c = parseFloat(prompt('Digite uma temperatura em Graus Celsius (°C)').replace(',', '.'));

    // Calcula as conversões
    let k = (c + 273.15).toFixed(2);  // Kelvin
    let f = (c * 9/5 + 32).toFixed(2); // Fahrenheit

    // Seleciona o elemento com id 'res' e insere o conteúdo HTML
    let res = document.getElementById('res');
    res.innerHTML = `<p><strong>A Temperatura de ${c.toFixed(2)}°C corresponde a...</strong></p>`;
    res.innerHTML += `${k}K (Kelvin) <br>`;
    res.innerHTML += `${f}F (Fahrenheit)`;
}
