console.log("comienzo del ejercicio 4")

function repetirString(algo, numero) {
    let cualquiera = false
    let tipoDeDatoAlgo = typeof(algo)
    console.log(`El tipo de dato es: ${tipoDeDatoAlgo}`)
    let tipoDeDatoNumero = typeof(numero)
    console.log(`El tipo de dato es: ${tipoDeDatoNumero}`)
    if(tipoDeDatoAlgo === 'number' && tipoDeDatoNumero === 'string'){
        let temp = tipoDeDatoAlgo
        tipoDeDatoAlgo = tipoDeDatoNumero
        tipoDeDatoNumero = temp
    }else if ((tipoDeDatoAlgo != 'string') && (tipoDeDatoAlgo != 'number') && ((tipoDeDatoNumero != 'string')&& (tipoDeDatoNumero != 'number'))){
        console.log("Ninguno de los parametros es valido")
        cualquiera = true
    }
    switch (tipoDeDatoAlgo) {
        case "string":
            if(numero === null) console.log("No pasaste un numero para cortar el string, diste un NULL")
            else if(typeof(numero) === 'string') console.log("Pasaste un string en ves de un numero para cortar el string")
            else if(typeof(numero) === 'function') console.log("Pasaste una función en ves de numero para cortar el string")
            else if(typeof(numero) === 'object') console.log("Pasaste un objeto en ves de numero para cortar el string")
            else {
                let algoString = new String(algo)
                let ultimoCaracter = algoString.charAt(algoString.length - 1);
                let resultado
                if(ultimoCaracter === " "){
                    resultado = algoString.repeat(numero)
                    console.log(resultado)
                }else{
                    algoString = algoString + " "
                    resultado = algoString.repeat(numero)
                    console.log(resultado)
                }  
            }
            break;
        case "number":
                let algoNumber = new Number(algo)
                console.log(algoNumber.toString().length)      
                break;
        case "undefined":
                console.log("No metiste nada como parametro, me diste un UNDEFINED")      
                break;
        case "object":
                if(cualquiera){
                    break
                }else if(algo === null){
                    console.log("Me pasaste un NULL")
                }else {
                console.log("Me pasaste un objeto")      
                }
                break;
        case "function":
            if(!cualquiera)
                console.log("Me pasaste una funcion")      
                break;
        default:
            console.log("Tipo de dato no soportado")
            break;
    }
    
}

repetirString("Hola Mundo hhhh", 3)
repetirString(Date,null)
repetirString()
repetirString(null)
repetirString(null,Date)