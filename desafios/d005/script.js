    let box = window.document.getElementById('box')
    let res = window.document.getElementById("res")
    box.addEventListener("click", clicou) 
function clicou(){
    let val = prompt('Digite uma distância em metros (m)')
    if(val != 0){
        let km = (Number(val)/1000).toFixed(3)
        let hm = (Number(val)/100).toFixed(2)
        let dam = (Number(val)/10).toFixed(1)
        let dm =  (Number(val) * 10).toFixed(1)
        let cm = (Number(val) * 100).toFixed(2)
        let mm = (Number(val) * 1000).toFixed(3)   
        //Resposta
        res.innerHTML = res.innerHTML = `<strong>A medida de ${val} m corresponde a</strong><br>
        ${km} quilômetros (Km)<br>
        ${hm} hectômetros (Hm)<br>
        ${dam} Decâmetros (Dam)<br>
        ${dm} Decímetros (dm)<br>
        ${cm} Centímetros (cm)<br>
        ${mm} Milímetros (mm)`

    }else{
        alert('Valor inválido!')
    }
    
}  