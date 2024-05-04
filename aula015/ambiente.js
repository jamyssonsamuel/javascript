let num = [5, 8, 2, 9, 3];
num.push(1) //adicionar um elemento no final do vetor
num.sort() //organizar os elementos em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
let pos = num.indexOf(2); 
if (pos == -1){
    console.log('O valor  não foi encontrado!')
} else {
    console.log(`O valor ${num[pos]} está na ${pos}ª posição .`)
}

 