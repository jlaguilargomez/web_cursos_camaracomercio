function ValidarYAcceder(){
    var passworddescargas = "alvaroeselmejor"; //Contraseña acceso a las descargas, cambiala a tu gusto

    var validasion = document.getElementById("inputpass").value; //Guarda el texto del input en una variable

    if(passworddescargas==validasion){ //valida la contraseña
        document.getElementById("formlog").style.display="none"; //cambia la estructura de la web
        document.getElementById("contdesc").style.display="inline-block";
    }
    else
    {
        alert("Error de pass"); //Error de contraseña
    }

}

function AbrirFormadores(){

    if(document.getElementById("contactform").style.display=="flex"){

    }
    else
    {
        document.getElementById("descargar").style.display="none";
        document.getElementById("principal").style.display="none";
        document.getElementById("contactform").style.display="flex";
    }
    
}


function Restablecer(){
    document.getElementById("formlog").style.display="none"; //cambia la estructura de la web
    document.getElementById("contdesc").style.display="none";
    document.getElementById("descargar").style.display="none";
    document.getElementById("principal").style.display="flex";
    document.getElementById("contactform").style.display="none";

}

function AbrirDescargas(){
    if(document.getElementById("descargar").style.display=="inline"){

    }
    else{
    document.getElementById("contactform").style.display="none";
    document.getElementById("principal").style.display="none";
    document.getElementById("descargar").style.display="inline";
    document.getElementById("formlog").style.display="inline";
    }
}