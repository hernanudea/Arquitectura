function concatenar10aN(numBase10, baseN) {

    var arrayNum = numBase10.toString().split(".");
    var entero = convertirEntero10aN(arrayNum[0], baseN);
    if (isNaN(arrayNum[1])) {
        decimal = "";
    } else {
        var decimal = convertirDecimal10aN("0." + arrayNum[1], baseN);
    }
    return entero + decimal;
}

function convertirEntero10aN(numBase10, baseN) {
    var respuesta = "";
    var base10Modificada = numBase10;
    while (base10Modificada >= baseN) {
        respuesta = (base10Modificada % baseN) + respuesta;
        base10Modificada = Math.floor(base10Modificada / baseN);
    }
    respuesta = base10Modificada + respuesta;
    return respuesta;
}

function convertirDecimal10aN(numBase10, baseN) {
    var arregloDecinales = new Array;
    var respuesta = "";
    var ultimoDecimal = numBase10;
    do {
        var producto = ultimoDecimal * baseN;
        var arregloProducto = producto.toString().split(".");
        ultimoDecimal = "0." + arregloProducto[1];
        if (arregloDecinales.indexOf(ultimoDecimal) === (-1)) {
            respuesta += arregloProducto[0];
            arregloDecinales[respuesta.length] = ultimoDecimal;
        } else {
            return "." + respuesta;
        }
    } while (respuesta.length < 10);
    if (respuesta.length === 0) {
        return "";
    } else {
        return "." + respuesta;
    }
}

function concatenarNa10(numero, baseN) {
    var arregloNum = numero.toString().split(".");
    var entero = convertirEnteroNa10(arregloNum[0], baseN);
    if (isNaN(arregloNum[1])) {
        decimal = "";
    } else {
        var decimal = convertirDecimalNa10("0." + arregloNum[1], baseN);
    }
    return entero + decimal;
}

function convertirEnteroNa10(numero, baseN) {
    var respuesta = 0;
    var potencia = numero.length - 1;
    for (var i = 0; i < numero.length; i++) {
        respuesta += numero[i] * Math.pow(baseN, potencia);
        potencia--;
    }
    return respuesta
}

function convertirDecimalNa10(numero, baseN) {
    var respuesta = 0;
    for (var i = 2; i < numero.length; i++) {
        respuesta += numero[i] * Math.pow(baseN, -1 * (i - 1));
    }
    return respuesta;
}

function esNumero(num) {
    if (isNaN(num)) {
        alert("No es un numero valido");
        document.getElementById("numero").value = "";
    }
}

function cambiarBaseDestino(){
    var baseOrigen = document.getElementById("baseOrigen");
    var baseDestino = document.getElementById("baseDestino");

    if(baseOrigen.value == 7){
        baseDestino.selectedIndex = 2;
    } else if(baseOrigen.value == 10) {
        baseDestino.selectedIndex = 1;
    }else{
        baseDestino.selectedIndex = 0;
    }

}