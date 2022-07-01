window.addEventListener("load", inicio);

//Declaracion de variables para el programa
let botonSeleccionado;
let x = "X";              //Declare los caracteres para usar para darle escabilidad al programa y si algun dia se quiere cambiar es mas facil
let o = "O";
let turno = 1;
let ganador;
let fichasDiferentes = false;

let mensaje ="";

//Metodo inicial
function inicio()
{
    //Obtengo el boton de las fichas
    document.querySelector("#botonFichas").addEventListener("click",cargarFichas);


    document.querySelector("#turno").innerHTML = turno;

    //Obtengo todos los botones por clase
    let buttons = document.querySelectorAll('.botones');
    for(var i = 0; i < buttons.length; i++) 
    {
        buttons[i].addEventListener('click', dibujar);
    }
}

//Metodo para cargar las fichas
function cargarFichas()
{
    let ficha1 = document.querySelector("#jugador1").value;
    let ficha2 = document.querySelector("#jugador2").value;

    if(ficha1 == ficha2)
    {
        alert("SELECCIONA DOS DIFERENTES PARA JUGAR! ! !");
    }
    else
    {
        jugador1 = ficha1;
        jugador2 = ficha2;
        alert("Fichas Cargadas correctamente , puede jugar");
        fichasDiferentes = true;
        const botonCargar = document.querySelector("#botonFichas");
        botonCargar.disabled = true;
        const select1 = document.querySelector("#jugador1");
        select1.disabled = true;
        const select2 = document.querySelector("#jugador2");
        select2.disabled = true;
    }

}

//Metodo de accion al presionar un boton
function dibujar(evento)
{
    //Inicializo variable con el id del boton que seleccione a traves de evento.target
    botonSeleccionado = evento.target.id;
    if(fichasDiferentes == true)
    {
        //Turno del equipo 2
        if (turno == 2)
        {
            //Ingreso el simbolo del quipo
            document.querySelector("#"+botonSeleccionado).value = jugador2;
            
            //Deshabilito boton luego de usarlo 
            const button = document.querySelector("#"+botonSeleccionado);
            button.disabled = true;

            //Inicio metodo para verificar si gano algun equipo
            verificadorGanador();
            //Si el retorno de la variable es diferente entondes imprimirla y reiniciar la pagina
            if (mensaje != "")
            {
                alert(mensaje);
                location.reload();
            }

            //Cambio el turno
            turno = 1;

            //Actualizo el turno
            document.querySelector("#turno").innerHTML = turno;
        }
        else //Turno del equipo 1
        {

            document.querySelector("#"+botonSeleccionado).value = jugador1;
            
            const button = document.querySelector("#"+botonSeleccionado);
            button.disabled = true;

            verificadorGanador();
            if (mensaje != "")
            {
                alert(mensaje);
                location.reload();
            }
            
            turno = 2 ;

            document.querySelector("#turno").innerHTML = turno;
        }
    }
    else
    {
        alert("SELECCIONA DOS DIFERENTES PARA JUGAR! ! !");
    }
   
}

//Metodo para verificar un ganador
function verificadorGanador()
{
    //Declaracion de variables respecto al valor que tienen los botones
    let boton1= document.querySelector("#boton1").value;
    let boton2= document.querySelector("#boton2").value;
    let boton3= document.querySelector("#boton3").value;
    let boton4= document.querySelector("#boton4").value;
    let boton5= document.querySelector("#boton5").value;
    let boton6= document.querySelector("#boton6").value;
    let boton7= document.querySelector("#boton7").value;
    let boton8= document.querySelector("#boton8").value;
    let boton9= document.querySelector("#boton9").value;

    //Variable para saber que equipo gano si "x" o "o"
    let tipoGanador = "";


    //IFs verificando todas las posibles combinaciones para ganar
    if(boton1 != "") 
    {
        if(boton1 == boton2 && boton1 == boton3) 
        {
            console.log("GANADOR");
            tipoGanador = boton1;
        }
        if(boton1 == boton4 && boton1 == boton7)
        {
            console.log("GANADOR");
            tipoGanador = boton1;
        }
    }
    if(boton5 != "")
    {
        if(boton5 == boton2 && boton5 == boton8)
        {
            console.log("GANADOR");
            tipoGanador = boton5;
        }
        if(boton5 == boton4 && boton5 == boton6)
        {
            console.log("GANADOR");
            tipoGanador = boton5;
        }
        if(boton5 == boton3 && boton5 == boton7)
        {
            console.log("GANADOR");
            tipoGanador = boton5;
        }
        if(boton5 == boton1 && boton5 == boton9)
        {
            console.log("GANADOR");
            tipoGanador = boton5;
        }
    }
    if(boton9 != "")
    {
        if(boton9 == boton6 && boton9 == boton3)
        {
            console.log("GANADOR");
            tipoGanador = boton9;
        }
        if(boton9 == boton8 && boton9 == boton7)
        {
            console.log("GANADOR");
            tipoGanador = boton9;
        }
    }

    //IFs anidados para saber si es empate o no
    if(boton1 != "" && boton2 != "" && boton3 != "" && boton4 != "" && boton5 != "" &&boton6 != "" &&boton7 != "" &&boton8 != "" && boton9 != "")
    {
        if(boton1 != boton9 || boton1 != boton5)
        {
            console.log("EMPATE");
            tipoGanador = "empate";
        }
    }
    
    //Verificador de mensaje segun el resultado
    if(tipoGanador == jugador1)
    {
        mensaje = "GANO EL EQUIPO 1";
    }
    else if (tipoGanador == jugador2)
    {
        mensaje = "GANO EL EQUIPO 2";
    }
    else if (tipoGanador == "empate")
    {
        mensaje = "EMPATE";
    }

    //Retornamos el mensaje
    return mensaje;
}