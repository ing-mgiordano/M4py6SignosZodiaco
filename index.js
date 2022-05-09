function calcularSigno(){
    let dia, mes;
    dia = parseInt(document.getElementById('diaNac').value);
    mes = parseInt(document.getElementById('mesNac').value);
	

	switch (mes) {
        case 1: 
            if(dia <= 19){
                tuSigno = 'Capricornio'
            } else {
                tuSigno = 'Acuario'
            }
            break;
        case 2:
            if(dia <= 18){
                tuSigno = 'Acuario'
            } else {
                tuSigno = 'Piscis'
            }
            break;
        case 3:
            if(dia <= 20) {
                tuSigno = 'Piscis'
            } else {
                tuSigno = 'Aries'
            }
            break;
        case 4:
            if(dia <= 19) {
                tuSigno = 'Aries'
            } else {
                tuSigno = 'Tauro'
            }
            break;
        case 5:
            if(dia <= 20) {
                tuSigno = 'Tauro'
            } else {
                tuSigno = 'Geminis'
            }
            break;
        case 6:
            if(dia <= 20) {
                tuSigno = 'Geminis'
            } else {
                tuSigno = 'Cancer'
            }
            break;
        case 7:
            if(dia <= 22) {
                tuSigno = 'Cancer'
            } else {
                tuSigno = 'Leo'
            }
            break;
        case 8:
            if(dia <= 22) {
                tuSigno = 'Leo'
            } else {
                tuSigno = 'Virgo'
            }
            break;
        case 9:
            if(dia <= 22) {
                tuSigno = 'Virgo'
            } else {
                tuSigno = 'Libra'
            }
            break;
        case 10:
            if(dia <= 22) {
                tuSigno = 'Libra'
            } else {
                tuSigno = 'Escorpio'
            }
            break;
        case 11:
            if(dia <= 21) {
                tuSigno = 'Escorpio'
            } else {
                tuSigno = 'Sagitario'
            }
            break;
        case 12:
            if(dia <= 21) {
                tuSigno = 'Sagitario'
            } else {
                tuSigno = 'TauroCapricornio'
            }
            break;
	}
    document.getElementById('resultado-signo').innerHTML = `Eres de ${tuSigno}`

}

