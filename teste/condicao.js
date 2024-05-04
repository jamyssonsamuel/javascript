var n1 = 0; 
var n2 = 7;
var soma = n1 + n2;
var subtracao = n1 - n2;
var multi = n1 * n2;
if (n1 != 0){
    var div = n1 / n2;
    console.log(`o quociente de ${n1} e ${n2} é igual a ${div}`);
} else{
    console.log(`A divisão não pôde ser executada pois o primeiro membro da divisão (dividendo) é zero.`)
}
console.log(`A soma entre ${n1} e ${n2} é igual a ${soma}`);
console.log(`A subtracao entre ${n1} e ${n2} é igual a ${subtracao}`);
console.log(`O produto de ${n1} e ${n2} é igual a ${multi}`);
