function clicar(){
    let c = parseFloat (prompt('Digite uma temperatura em Graus Celcios (°C)').toFixed(2).replace('.', ','))

    let k = c + 273
    let f = c*9/5 + 32
    res.innerHTML = `<p><strong>A Temperatura de ${c}°C corresponde a...</strong></p>`
    res.innerHTML += `${k}K (Kelvin) <br>
    ${f}F (Fahrenheit)`
}