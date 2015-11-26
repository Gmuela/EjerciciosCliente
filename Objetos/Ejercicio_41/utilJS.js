function comprobarFechas(anio,mes,dia){
            
    var hoy=new Date();

    var fecha=new Date(anio,mes,dia);

    var validar=true;

    switch(true){

        case(Date.parse(fecha) > Date.parse(hoy)):

            document.getElementById("edad").value="Fecha errónea";
            validar=false;
            break;

        case(dia>31 || dia<1):

            document.getElementById("edad").value="Día incorrecto";
            validar=false;
            break;

        case(mes>11 || mes<0):

            document.getElementById("edad").value="Mes incorrecto";
            validar=false;
            break;

        case(mes==1 && dia>29):

            document.getElementById("edad").value="Día incorrecto.";
            validar=false;
            break;
    }

    return validar;
} 


function calcularEdad(){

    var edad=0;

    var dia=document.getElementById("dia").value;
    var mes=(document.getElementById("mes").value-1);
    var anio=document.getElementById("anio").value;

    var validar=comprobarFechas(anio,mes,dia);

    if(validar){

        var hoy=new Date();

        var hoyDia=hoy.getDate();                
        var hoyMes=hoy.getMonth();                
        var hoyAnio=hoy.getFullYear();

        var controla=0;

        for(var i=anio;i<hoyAnio;i++){

            if(anio%100==0 && anio%400==0){

                edad+=366;

            }

            else{

                edad+=365;

            }

        }

        if(edad/365<120){

            document.getElementById("edad").value=(edad/365);
        } 

        else{

            document.getElementById("edad").value=("");

        }
    }
}


function comprobarCurso(){

    var curso=document.getElementById("curso").value;

    if(curso>4 || curso<1){

        document.getElementById("oculto").innerHTML="Dato no válido";

    }

    else{

        document.getElementById("oculto").innerHTML="Cursos posibles: 1, 2, 3 y 4";

    }

}

function comprobarDatos(){   

    var nombre=document.getElementById("nombre").value;
    var apellido1=document.getElementById("apellido1").value;
    var apellido2=document.getElementById("apellido2").value;
    var dia=document.getElementById("dia").value;
    var mes=document.getElementById("mes").value;
    var anio=document.getElementById("anio").value;
    var curso=document.getElementById("curso").value;

    var fecha=new Date(anio,mes,dia);

    if(nombre=="" || apellido1=="" || curso=="" || dia=="" || mes=="" || anio==""){

        alert("No se han rellenado todos los campos obligatorios");

        return false;

    }

    else{

        return true;

    }

}


function limpiarFormulario(){
    
    document.getElementById("curso").value="";
    document.getElementById("nombre").value="";
    document.getElementById("apellido1").value="";
    document.getElementById("apellido2").value="";
    document.getElementById("dia").value="";
    document.getElementById("mes").value="";
    document.getElementById("anio").value="";
    document.getElementById("edad").value="";
    
    
}
