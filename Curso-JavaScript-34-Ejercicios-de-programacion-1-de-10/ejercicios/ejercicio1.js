console.log("comienzo del ejercicio 1")

function cuentaStrings(algo) {
    let tipoDeDato = typeof(algo)
    console.log(`El tipo de dato es: ${tipoDeDato}`)
    switch (tipoDeDato) {
        case "string":
            let algoString = new String(algo)
            console.log(algoString.length)      
            break;
        case "number":
                let algoNumber = new Number(algo)
                console.log(algoNumber.toString().length)      
                break;
        case "undefined":
                console.log("No metiste nada como parametro, me diste un UNDEFINED")      
                break;
        case "object":
                if(algo === null){
                    console.log("Me pasaste un NULL")
                }else {
                console.log("Me pasaste un objeto")      
                }
                break;
        case "function":
                console.log("Me pasaste una funcion")      
                break;
        default:
            console.log("Tipo de dato no soportado")
            break;
    }
    
}

cuentaStrings("Hola Mundo")
cuentaStrings(123)
cuentaStrings()
cuentaStrings(null)
cuentaStrings(Date)