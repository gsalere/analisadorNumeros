//adicionar valor
let total = []
let res = document.getElementById('res')
let somaTotal
let n = document.getElementById('add')

function adicionar(){

    res.innerHTML = ''
    
    let n1 = n.value
    let caixa = document.getElementById('caixa')
    let optionAdd = document.createElement('option')

    if(n1.length === 0 || n1 <= 0 || n1 >100){
        alert("Adicione um valor válido!")
    }else{
        if(total.indexOf(n1) >=0){
            alert("Esse valor já foi adicionado!")
            console.log("O número já existe")
        }else{
            total.push(Number(n1))
            optionAdd.innerHTML = `O valor ${n1} foi adicionado`
            caixa.appendChild(optionAdd)
            
        }  
    }
    n.focus()
    n.value = ''
}

function fim(){
//texto
//1 - Numeros cadastrados
    if(total.length == 0){
        alert("Insira algum valor!")
        n.focus()
        n.value = ''
    }else{
        let maior = Math.max.apply(null, total );
        let menor = Math.min.apply(null, total)
        
        res.innerHTML += `Números cadastrados: ${total.length}<br>`
    //2 - Maior valor

        res.innerHTML += `Maior valor: ${maior}<br>`
    //3 - menor valor
        res.innerHTML += `Menor valor: ${menor}<br>`
    //4 - Soma de valores

        let soma = 0
        let media = 0
        for(let pos in total){
            soma += total[pos]
        }
        res.innerHTML += `Soma dos valores: ${soma}<br>`
    //5 - Média dos valores
        media = soma / total.length
        res.innerHTML += `Média dos valores: ${media}<br>`
    }
    
}

