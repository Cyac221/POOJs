import Persona from "./persona.js";
import Estudiante from "./estudiante.js"
import Profesor from "./profesor.js";

const profesor1 = new Profesor(123,"yepes","Carlos",23,"Masculino","Soltero","Indefinido",200,4)

profesor1.modificarSalario(100)

profesor1.imprimirDatos()

console.log("Valor dia: "+profesor1.valorDia(100))

console.log("Bonificacion: " + profesor1.bonificacionClases(4));




/*  const estudiante1 = new Estudiante(123,"yepes","Carlos","23","Masculino","Casado",200,"mañana","ingenieria","backend 1")

estudiante1.imprimirDatos()
 
//new es instanciar o crear un objeto de la clase Persona

const person1 = new Persona(102030,"Disney","Paco",20,"Hombre","Soltero")
const juniorTuPapa = new Persona(1234567,"lucmi mosquera pri pra","Junior jose",200,"Hombre","Con moza y casca a la esposa cuando pierde el junior")

//Los objetos con forma de Cubos son metodos
console.log("Identificacion: "+ person1.identificacion);
console.log("Nombre: "+ person1.nombre);
console.log("Apellidos: "+ person1.apellido);
console.log("----------------------------------------");
console.log("Identificacion: "+ juniorTuPapa.identificacion);
console.log("Nombre: "+ juniorTuPapa.nombre);
console.log("Apellidos: "+ juniorTuPapa.apellido);



console.log("-----------------------------------------");
juniorTuPapa.cambiarEdad(995)

juniorTuPapa.imprimirDatos()  */
