function carregar(){
    var msg = window.document.getElementById( 'msg' )
    var foto = window.document.getElementById('imagem')
    var saudacao = window.document.getElementById('saudacao')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas  e ${minutos} minutos.`
    if(hora >= 0 && hora < 4){
        saudacao.innerHTML = `Boa madrugada!`
        foto.src = 'madrugada.png'
        document.body.style.background = '#191828'
    } else if (hora >= 4 && hora <= 12) {
        saudacao.innerHTML = `Bom dia!`
        foto.src =  'fotodia.png'
        document.body.style.background  = '#667044'
    }
    
    else if (hora >= 12 && hora <= 18) {
        saudacao.innerHTML = `Boa Tarde!`
        foto.src =  'fotottarde.png'
        document.body.style.background  = '#8b2f04'
    }else{
        saudacao.innerHTML = `Boa Noite!`
        foto.src = 'fotonoite.png'
        document.body.style.background  = '#172844'
    }
}
