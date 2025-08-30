
import Persona from "./persona.js";

class Estudiante extends Persona{
    constructor(identificacion, apellidos, nombres, edad, genero,estadoCivil,vlrMatricula,horario,facultad,asignatura){
        super(identificacion, apellidos, nombres, edad, genero,estadoCivil)

        this.vlrMatricula = vlrMatricula
        this.horario = horario
        this.facultad = facultad
        this.asignatura = asignatura
    }
    aumentoValorMaticula(porcentaje){
        return this.vlrMatricula * porcentaje

    }
    beca(porcentaje){
        return this.vlrMatricula*-porcentaje
    }

    imprimirDatos(){
        super.imprimirDatos()
        console.log("++ Datos del estudiante ++");
        console.log(`Facultad --> ${this.facultad}`);
        console.log(`Horario --> ${this.horario}`);
        console.log(`Asignatura --> ${this.asignatura}`);
        console.log(`Vlr matricula --> ${this.vlrMatricula}`);
        console.log(`--------------------------------------------`);
    }
}

export default Estudiante