import {Auto} from "./autos";
import { Moto} from "./motos";
import { Camion} from "./camiones";
import { RegistroAutomotor } from "./registroAutomotor";



// Crear vehículos
const auto1 = new Auto("Toyota", "Corolla", 2020);
const moto1 = new Moto("Yamaha", "MT-03", 2019);
const camion1 = new Camion("Mercedes", "Actros", 2021);

const registro= new RegistroAutomotor();

// Agregar vehículos al registro
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);

// Modificar un vehículo
registro.modificarVehiculo(0, "Etios", 2021); // Modificar auto1

// Dar de baja un vehículo
registro.darDeBaja("MT-03"); // Dar de baja moto1

// Obtener y mostrar vehículos
console.log(registro.obtenerVehiculos());