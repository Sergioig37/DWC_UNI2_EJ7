var partidos = new Array();
partidos[0] = [" ", "Ayuntamiento", "Polideportivo", "Instituto", "Mercado", "Colegio"];
partidos[1] = ["PV", " "," ", " ", " ", " "];
partidos[2] = ["0V", " "," ", " ", " ", " "];
partidos[3] = ["VpSI", " "," ", " ", " ", " "];
partidos[4] = ["UPV", " "," ", " ", " ", " "];

function votacion(partidos){
    for(var i=1;i<partidos.length; i++){
        for(var j=1;j<partidos[i].length;j++){
            partidos[i][j] = Math.floor(Math.random()*(10-5)+5);
        }
    }
}

votacion(partidos);
console.table(partidos);
