//Las clases siempre empiezan en Mayusculas. SIEMPRE

class Persona{
    constructor(identificacion, apellidos, nombres, edad, genero,estadoCivil){
        this.identificacion = identificacion
        this.apellido = apellidos
        this.nombre = nombres
        this.edad = edad
        this.genero = genero
        this.estadoCivil = estadoCivil
    }

    imprimirDatos(){
        console.log("++ Datos de la persons ++");
        console.log(`Identificacion --> ${this.identificacion}`);
        console.log(`Apellido --> ${this.apellido}`);
        console.log(`Nombres --> ${this.nombre}`);
        console.log(`Edad --> ${this.edad}`);
        console.log(`Genero --> ${this.genero}`);
        console.log(`Estado civil --> ${this.estadoCivil}`);
        console.log(`--------------------------------------->`);
    }
    cambiarEdad(nuevaEdad){
        this.edad=nuevaEdad

    }
}

export default Persona