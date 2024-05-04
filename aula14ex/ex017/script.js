function tabuada(){
    let num = document.getElementById('num')
    let tab = document.getElementById('tab')
    if (num.value.length == 0){
        alert('Por favor insira um número!')
    }else{
        let n = Number(num.value)
        tab.innerHTML = '' //Limpa a tabela antes de gerar uma nova
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
       }
       
        /*let c = 1
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }*/
    }
}