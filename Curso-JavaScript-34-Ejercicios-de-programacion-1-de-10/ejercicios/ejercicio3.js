console.log("comienzo del ejercicio 3")

function dividirEnArrays(algo, separador) {
    let cualquiera = false
    let tipoDeDatoAlgo = typeof(algo)
    console.log(`El tipo de dato es: ${tipoDeDatoAlgo}`)
    let tipoDeDatoSeparador = typeof(separador)
    console.log(`El tipo de dato es: ${tipoDeDatoSeparador}`)
    if(tipoDeDatoAlgo === 'number' && tipoDeDatoSeparador === 'string'){
        let temp = tipoDeDatoAlgo
        tipoDeDatoAlgo = tipoDeDatoSeparador
        tipoDeDatoSeparador = temp
    }else if ((tipoDeDatoAlgo != 'string') && (tipoDeDatoSeparador != 'string')){
        console.log("Ninguno de los parametros es valido")
        cualquiera = true
    }
    switch (tipoDeDatoAlgo) {
        case "string":
            if(separador === null) console.log("No pasaste un numero para separar el string, diste un NULL")
            else if(typeof(separador) === 'function') console.log("Pasaste una función en ves de numero para cortar el string")
            else if(typeof(separador) === 'object') console.log("Pasaste un objeto en ves de numero para cortar el string")
            else if(typeof(separador) === 'string'){
                let algoString = new String(algo)
                let resultado = algoString.split(separador)
                console.log(resultado)      
            }
            break;
        case "number":
                console.log("Pasaste un numero y no un string")      
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

dividirEnArrays("Hola que tal", ' ')
dividirEnArrays(Date,null)
dividirEnArrays()
dividirEnArrays(null)
dividirEnArrays(null,Date)