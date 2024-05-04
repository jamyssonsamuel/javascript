//Recursividade
function fatorial (n){
    if (n == 1){
        return 1
    } else{
        return n * fatorial (n-1)
    }
}

console.log(fatorial(5))//Exibirá o resultado do fatorial de 5, que é igual a 1120


/* 5! = 5*4*3*2*1
   5! = 5*4!
   
   n! = n * (n-1)!
   1! = 1
*/