function Persona(matricula, curso, nombre, apellido1, apellido2, fecha){
    
    this.matricula=matricula;
    this.curso=curso;
    this.nombre=nombre;
    this.apellido1=apellido1;
    this.apellido2=apellido2;
    this.fecha=fecha;

    this.getNombre=function(){return this.nombre;}
    
    this.getInfo=function(){
        
        var arrayInfo=[
            this.matricula,
            this.curso,
            this.nombre,
            this.apellido1,
            this.apellido2,
            this.fecha
        ];
        
        return arrayInfo;
        
    }
    
}