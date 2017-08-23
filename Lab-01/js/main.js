var mostrarRespuesta = false;

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
    var respuestaBase10 = 0;
    var potencia = numero.length - 1;
    for (var i = 0; i < numero.length; i++) {
        var resultadoBaseExponente = Math.pow(baseN, potencia);
        var numeroIterado = numero[i];
        respuestaBase10 += numeroIterado * resultadoBaseExponente;
        potencia--;
    }
    return respuestaBase10;
}

function convertirDecimalNa10(numero, baseN) {
    var respuesta = 0;
    for (var i = 2; i < numero.length; i++) {
        respuesta += numero[i] * Math.pow(baseN, -1 * (i - 1));
    }
    return respuesta;
}

function esNumero(num) {
    if (!validarBase7()) {
        aplicarValidación();
    }

    if (isNaN(num)) {
        alert("No es un numero valido");
        document.getElementById("numero").value = "";
    }
}

function cambiarBaseDestino() {
    var baseOrigen = document.getElementById("baseOrigen");
    var baseDestino = document.getElementById("baseDestino");
    if (baseOrigen.value == 7) {
        baseDestino.selectedIndex = 2;
        if (!validarBase7()) {
            aplicarValidación();
        }
    } else if (baseOrigen.value == 10) {
        baseDestino.selectedIndex = 1;
    } else {
        baseDestino.selectedIndex = 0;
    }
}

function cambiarBaseDestino2() {
    var baseOrigen = document.getElementById("baseOrigen");
    var baseDestino = document.getElementById("baseDestino");
    if (baseDestino.value == 7) {
        baseOrigen.selectedIndex = 2;
    } else if (baseDestino.value == 10) {
        baseOrigen.selectedIndex = 1;
    } else {
        baseOrigen.selectedIndex = 0;
    }
}

function limpiar() {
    mostrarRespuesta = false;
    mostrarResultado();
}

function convertir() {
    var numero = document.getElementById("numero");
    var baseOrigen = document.getElementById("baseOrigen");
    var baseDestino = document.getElementById("baseDestino");

    var rNumero = document.getElementById("rNumero");
    var rBaseOrigen = document.getElementById("rBaseOrigen");
    var rBaseDestino = document.getElementById("rBaseDestino");
    var rRespuesta = document.getElementById("rRespuesta");
    if (numero.value === "" || baseOrigen.value == 0 || baseDestino.value == 0) {
        alert("Todos los campos son obligatorios, debe llenarlos")
    } else {
        mostrarRespuesta = true
        mostrarResultado();
        if (baseDestino.value == 7) {
            rNumero.innerHTML = numero.value;
            rBaseOrigen.innerHTML = baseOrigen.value;
            rRespuesta.innerHTML = concatenar10aN(numero.value, 7);
            rBaseDestino.innerHTML = baseDestino.value;
        }
        if (baseDestino.value == 10) {
            rNumero.innerHTML = numero.value;
            rBaseOrigen.innerHTML = baseOrigen.value;
            rRespuesta.innerHTML = concatenarNa10(numero.value, 7);
            rBaseDestino.innerHTML = baseDestino.value;
        }
    }

    var rBaseDestino = document.getElementById("rBaseDestino");
}

function mostrarResultado() {
    if (mostrarRespuesta) {
        document.getElementById("respuesta").style.display = 'block';
    } else {
        document.getElementById("respuesta").style.display = 'none';
    }
}

function validarBase7() {
    var numero = document.getElementById("numero").value;
    var baseOrigen = document.getElementById("baseOrigen");
    var arrayNumero = numero.toString().split(".");
    var numeroCorrecto = true;
    if (baseOrigen.value == 7) {
        for (var i = 0; i < arrayNumero[0].length; i++) {
            if (arrayNumero[0].toString()[i] >= 7) {
                numeroCorrecto = false;
            }
        }
    }
    return numeroCorrecto;
}

function aplicarValidación() {
    alert("Solo puede usar numeros de 0 a 6");
    document.getElementById("numero").value = "";
    document.getElementById("baseOrigen").selectedIndex = 0;
    document.getElementById("baseDestino").selectedIndex = 0;
}

