const readline = require ("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout     
})

entradaDeDados.question("digite o primeiro numero: ", function(n1){
    let valor1 = Number(n1.replace(',', '.'));

    entradaDeDados.question("digite o segumdo numero: ", function(n2){
        let valor2 = Number(n2.replace(',', '.'));

        entradaDeDados.question("qual operação matematica você deseja fazer? (multiplicação, adição, subtração ou divisão): ", function(tipo){
            let operacao = tipo 
        
            let validar = require ("./modulo/validar.js")
            let calcular = require ("./modulo/calculos.js")

            let retorno = validar.validado(valor1, valor2, operacao)
            let calcullos = calcular.caucular(valor1, valor2, operacao)

          console.log(retorno)
          console.log(calcullos.replace('.', ','))

        })
    })                   
})