let jugador;
let maquina;

function aleatorio(){
    return Math.ceil(Math.random()*3);
}
jugador = prompt('Elegi: 1-Piedra  2-Papel  3-Tijera');
maquina = aleatorio(); 
alert('Tu elegiste: ' + eleccion(jugador));
alert('La maquina eligio: ' + eleccion(maquina));

function resultados(){
    switch (contador = ''){
        case jugador = maquina:{   
            alert("EMPATE");   
            break;
        }
        case console.log(jugador == 1 && maquina == 3):{ 
            alert("GANASTE");   
            break;
        }
        case console.log(jugador == 2 && maquina == 1):{  
            alert("GANASTE");   
            break;
        }
        case console.log(jugador == 3 && maquina == 2):{  
            alert("GANASTE");   
            break;
        }
        default:{
            alert(" PERDISTE");
            break;
        }
    }
    // Dejo este comentario porque no puedo definir bien el switch para que me de la opción correcta, porque solo funciona con el DEFAULT.
    // Puedo hacer un IF (que se que me funciona) antes de un SWITCH,  queria usar el ciclo.
}
resultados();

function eleccion(jugada){
    let resultado = '';
    if (jugada == 1){
        resultado = 'Piedra';        
    }else if (jugada == 2){
        resultado = 'Papel';
    }else if (jugada == 3){
        resultado = 'Tijera';
    }else{
        resultado = 'Tu eleción es incorrecta';
    }
    return resultado;
}




// DESDE UN PRINCIPIO QUERIA HACER TIPO UN PROGRAMA QUE TE DIGA QUE SIGNO ZODIACAL TENES CON TU DIA/MES
// PERO NO PUDE ENTENDER BIEN LOS COGIDOS PARA QUE ME QUEDEN BIEN


// let nombre = prompt("Ingrese su nombre");
// let dia = prompt("Ingrese el día de su cumpleaños" + " (Ej: 24)");
// let mes = prompt("Y ahora su mes" + " Ej: Marzo");

// let Enero = 1;
// let Febrero = 2
// let Marzo = 3;

// if((dia >= 21 && dia <=31) && mes == Enero){
//     alert(fecha1 = nombre + " es de Acuario");

// }else if( (dia >= 1 && dia <= 19) && mes == Febrero){
//     alert(fecha2 = nombre + " es de Acuario");
//     console.log(alert);
// }

// if((dia >= 20 && dia <=30) && mes == Febrero){
//     alert(fecha2 = nombre + " es de Picis");
//     console.log(alert);

// }else if( (dia >= 1 && dia <= 20) && mes == Marzo){
//     alert(fecha3 = nombre + " es de Picis");
//     console.log(alert);
// }








