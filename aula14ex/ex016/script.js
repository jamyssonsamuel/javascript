function contar(){
    let n1 =  document.getElementById("n1")
    let n2 = document.getElementById("n2")
    let cont = document.getElementById('cont')
    let res = document.getElementById('res')
    if(n1.value.length == 0 || n2.value.length == 0 || cont.value.length == 0){
        //alert('[ERROR] Por favor insira os dados corretamente!')
        res.innerHTML = 'Impossivel Contar!'
    } else{
        res.innerHTML='Contando: <br>'
        //Passando  os valores para as variaveis númericas
        let  i = Number(n1.value)
        let v = Number(n2.value)
        let p = Number(cont.value)
        if(p <= 0 ){
            window.alert ('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < v){
            // Contagem  crescente
            for(let c = i; c <= v; c+=p){
                res.innerHTML += `${c} \u{1F449}` // \u{1F449} emoji
        }        
        res.innerHTML += `\u{1F3C1}`
    }else{
        //Contagem decrescente
        for(let c = i; c >= v; c-=p) {
        res.innerHTML += `${c} \u{1F449}`    
    }    
    res.innerHTML += ` \u{1F3C1}`
}
 
    }
}
 