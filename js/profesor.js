import Persona from "./persona.js";

class Profesor extends Persona{
        constructor(identificacion, apellidos, nombres, edad, genero,estadoCivil,contratoLaboral,salario,nroGrupos){
        super(identificacion, apellidos, nombres, edad, genero,estadoCivil)

        this.contratoLaboral = contratoLaboral
        this.salario = salario
        this.nroGrupos = nroGrupos
    }
    modificarSalario(nuevoSalario){
        this.salario = nuevoSalario
    }

    valorDia(dias){
        return this.salario/dias
    }
    
    bonificacionClases(valorGrupo){
        return this.salario / valorGrupo
    }

    imprimirDatos(){
    super.imprimirDatos()
    console.log("++ Datos del Profesor ++");
    console.log(`Contrato laboral --> ${this.contratoLaboral}`);
    console.log(`Salario --> ${this.salario}`);
    console.log(`Numero de grupos --> ${this.nroGrupos}`);
    console.log(`--------------------------------------------`);
}
    
}

export default Profesor