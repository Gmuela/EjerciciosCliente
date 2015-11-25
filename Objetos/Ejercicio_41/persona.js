function Persona(matricula, curso, nombre, apellido1, apellido2, fecha){
    
    this.matricula=matricula;
    this.curso=curso;
    this.nombre=nombre;
    this.apellido1=apellido1;
    this.apellido2=apellido2;
    this.fecha=new Date(fecha);

    this.getNombre()=function{
        
        return this.nombre;
    }
    
}