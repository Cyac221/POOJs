import Persona from "./persona.js";


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