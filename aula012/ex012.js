var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas.`)
if(hora < 12){
    console.log(`Bom dia!`)
} else if (hora <= 18) {
    console.log("Boa tarde!")
} else{ 
    console.log("Boa noite!")
}
//Comparação de valores com o operador || (OU) e && (E  ).
/*let x = 0;  
let y = 10;

if(x == 0 || y == 0){
    console.log("Zero");
}else if(x > 0 && y > 0){   
    console.log("Positivo");
}else{
    console.log("Negativo ou Zero")
}
*/

