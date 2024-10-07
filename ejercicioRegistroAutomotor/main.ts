import {Auto} from "./autos";
import { Moto} from "./motos";
import { Camion} from "./camiones";
import { RegistroAutomotor } from "./registroAutomotor";
import { Vehículo } from "./vehiculo";


// Crear vehículos
const auto1 = new Auto("Toyota", "Corolla", 2020,  4, "gris",203473);
const moto1 = new Moto("Yamaha", "MT-03", 2019,  2, "roja", 543768);
const camion1 = new Camion("Mercedes", "Actros", 2021, 6, "verde", 453213);
const moto2= new Moto("Motomel","110", 2016, 2, "azul", 567832);
const registro= new RegistroAutomotor();

// Agregar vehículos al registro
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);
registro.agregarVehiculo(moto2);
// Modificar un vehículo
registro.modificarVehiculoPorPatente(203473, "Etios", 2021); 

// Dar de baja un vehículo
registro.darDeBaja(543768); // Dar de baja moto1 por patente

// Obtener y mostrar vehículos
console.log(registro.obtenerVehiculos());