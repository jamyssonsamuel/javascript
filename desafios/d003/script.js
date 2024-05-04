let d = window.document.getElementById("box");
d.addEventListener('click', clicou)


function clicou(){  
        let num = prompt('Digite um número inteiro qualquer');
        let sucessor = parseInt(num) + 1; // Incrementa o valor de num em 1
        let antecessor = parseInt(num) - 1; // Decrementa o valor de num em 1
        alert(`O número digitado foi ${num}\n Seu sucessor é ${sucessor}\nSeu Antecessor é ${antecessor}`); 
}
