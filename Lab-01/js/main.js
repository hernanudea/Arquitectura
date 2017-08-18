function concatenador10aN(base10, baseN) {
    var res = base10.toString().split(".");
    var entero = convertirEntero10aN(res[0], baseN);
    var decimal = convertirDecimal10aN("0." + res[1], baseN);
    return entero + decimal;
}

function convertirEntero10aN(base10, baseN) {
    var respuesta = "";
    var base10Modificada = base10;
    while (base10Modificada >= baseN) {
        respuesta = (base10Modificada % baseN) + respuesta;
        base10Modificada = Math.floor(base10Modificada / baseN);
    }
    respuesta = base10Modificada + respuesta;
    return respuesta;
}

function convertirDecimal10aN(base10, baseN) {
    var respuesta = "";
    var ultimoDecinal = base10;

    do {
        var producto = ultimoDecinal * baseN;
        var arregloProducto = producto.toString().split(".")
        respuesta += arregloProducto[0];
        ultimoDecinal = "0." + arregloProducto[1];
    } while (respuesta.length < 10);
    if (respuesta.length === 0) {
        return "";
    } else {
        return "." + respuesta;
    }
}

function concatenarNa10(numero, baseN) {
	var res = numero.toString().split(".");
    var entero = convertirEnteroNa10(res[0], baseN);
    var decimal = convertirDecimalNa10("0." + res[1], baseN);
    return entero + decimal;
}

function convertirEnteroNa10(numero, baseN) {
	var respuesta = 0;
	var potencia = numero.length - 1;
	for (var i = 0; i = numero.length ; i++) {
		respuesta +=  numero[i] * Math.pow(baseN, potencia)
		potencia--;
	}
	return respuesta
}

function convertirDecimalNa10(numero, baseN) {
	var respuesta = 0;
	for (var i = 2; i = numero.length ; i++) {
		respuesta +=  numero[i] * Math.pow(baseN, -1 * (i-1)))
	}
	return respuesta;
}


/**
 * función anonima temporal de ejecución
 */
(function () {
    var num10 = 1000.51832;
    var base = 7;
    document.getElementById("resultado").innerHTML = "El numero " + num10 + " en base " + base + " es: " + concatenador10aN(num10, base);
}());
