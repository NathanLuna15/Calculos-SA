function validado (numero1, numero2, operacao){
    
    if(numero1 == "" || numero2 == ""){
        return false
    }else if (isNaN(numero1) || isNaN(numero2)){
        return false

    } 
    
    
    
    if(operacao == ""){
        return false
    } else if(operacao == "adição") {
        return true
    } else if(operacao == "subtração"){
        return true
    } else if(operacao == "multiplicação"){
        return true
    } else if(operacao == "divisão"){
        return true
    }else{
        return false
    }

}

module.exports = {
    validado
}