!alert('Só é permitido nesse site fãs dos vingadores')

let fã;

do {
    fã= prompt("Você é um fã dos vingadores?")
    if(fã === 'sim'){
        !alert('Você pode acessar essa página')
    }
    else if(fã === 'não'){
        !alert('Você não pode acessar essa página')
    }
    else{
        !alert('Coloque uma resposta válida')
    }
}while(fã !== 'sim')



