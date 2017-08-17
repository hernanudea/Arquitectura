

function convertir10aN(base10, baseN) {
    var respuesta = "";
    var base10Modificada = base10;
    while (base10Modificada >= baseN){
        respuesta = (base10Modificada % baseN) + respuesta;
        base10Modificada = Math.floor(base10Modificada / baseN);
    }
    respuesta = base10Modificada + respuesta;
    return respuesta;
}

(function () {
    console.log("La respuesta es: " + convertir10aN(54545, 7));
    // console.log("La respuesta es: " + 7/2);
}());

/**
 * base10 =               7
 * baseN =                2
 * respuesta =            1
 * base10Modificada =     7,
 */