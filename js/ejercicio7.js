var partidos = new Array();
partidos[0] = [" ", "Ayuntamiento", "Polideportivo", "Instituto", "Mercado", "Colegio"];
partidos[1] = ["PV", " "," ", " ", " ", " "];
partidos[2] = ["OV", " "," ", " ", " ", " "];
partidos[3] = ["VpSI", " "," ", " ", " ", " "];
partidos[4] = ["UPV", " "," ", " ", " ", " "];

function votacion(partidos){
    for(var i=1;i<partidos.length; i++){
        for(var j=1;j<partidos[i].length;j++){
            partidos[i][j] = Math.floor(Math.random()*(10-5)+5);
        }
    }
}


function calcularVotos(partidos){

    var partido = "";
    var votos;
    for(var i=1; i<partidos.length;i++){
        votos = parseInt(0);
        partido = partidos[i][0];
        for(var j=1; j<partidos[i].length;j++){
            votos += partidos[i][j];
        }
        console.log(partido+" obtuvo " + votos + " votos ");
    }
}

function recuentodeVotos(partidos){

    var recuentoVotos = [];
    var partido = "";
    var votos;
    for(var i=1; i<partidos.length;i++){
        partido = partidos[i][0];
        recuentoVotos = [];
        for(var j=1; j<partidos[i].length;j++){
            recuentoVotos.push(partidos[i][j]);
        }
        console.log(partido+":" +recuentoVotos);
    }
}

votacion(partidos);
console.table(partidos);
calcularVotos(partidos);
recuentodeVotos(partidos);



