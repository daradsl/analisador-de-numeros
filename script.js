
let dados = document.querySelector('select#dados');
let res = document.querySelector('div#res');
let valores = [];

function inRage(n){
    if(n >=1 && n <= 100){
        return true
    }
    return false
}

function inList(n, l){
    let encontrou = false;
    for(let i=0; i<l.length; i++){
        if(n === l[i]){
            encontrou = true;
        }
    }
    return encontrou;
}

function adicionar(){
    let num = document.querySelector('input#n');
    num = Number(num.value);
    if(num != 0){   
        if(inRage(num) && !inList(num, valores)){
            valores.push(num)
            let item = document.createElement('option');
            item.text = `valor ${num} adicionado!`;
            dados.appendChild(item);
            res.innerHTML = ''
        }else{
            alert("Entrada já adicionada ou inválida!");
        }
    }
    else{
        alert("Entrada vazia!");
    }
    document.querySelector('input#n').value='';
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!!!');
    } else{
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for(let i=0; i<valores.length; i++){
            if(valores[i]<menor){
                menor = valores[i];
            }
            if(valores[i]>maior){
                maior = valores[i];
            }
            soma += valores[i];
        }
        media = soma/valores.length;
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`;
        res.innerHTML += `<p>O maior valor informado foi: ${maior}. </p>`;
        res.innerHTML += `<p>O menor valor informado foi: ${menor}. </p>`;
        res.innerHTML += `<p>A soma total dos valores informados foi: ${soma}. </p>`;
        res.innerHTML += `<p>A media dos valores informados foi: ${media}. </p>`;
    }

}