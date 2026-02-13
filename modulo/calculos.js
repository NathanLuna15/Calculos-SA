function caucular(valor1, valor2, operador){
    if(operador == "adição"){
        let soma = Number(valor1) + Number(valor2)
        return soma.toFixed(2)
    }else if(operador == "subtração"){
        let menos = Number(valor1) - Number(valor2)
        return menos.toFixed(2)
    }else if(operador == "multiplicação"){
        let vezes = Number(valor1) * Number(valor2)
        return vezes.toFixed(2)
    }else if(operador == "divisão"){
        let dividir = Number(valor1) / Number(valor2)
        if(valor1 == 0 || valor2 == 0){
            console.log("não é possivel dividir por zero!")
        }
        return dividir.toFixed(2)
    }else{
        return false
    }
}

module.exports = {
    caucular
}