import { Auto } from "./autos";
import { Moto} from "./motos";
import { Camion } from "./camiones";


export class RegistroAutomotor {
    private vehiculos: (Auto | Moto | Camion)[] = [];

   public agregarVehiculo(vehiculo: Auto | Moto | Camion): void {
        this.vehiculos.push(vehiculo);
    }

   public obtenerVehiculos(): (Auto | Moto | Camion)[] {
        return this.vehiculos;
    }

    //modificarVehiculo(i:number, modelo: string, anio: number): void {
      // if (i >= 0 && i < this.vehiculos.length) {
     //      const vehiculo = this.vehiculos[i];
     //       vehiculo.setModelo(modelo);
     //      vehiculo.setAnio(anio);
     //  } else {
    //       console.log("Índice no válido");
    //   }
        
    public modificarVehiculoPorPatente(patente: number, modelo: string, anio: number): void {
        const vehiculo = this.vehiculos.find(vehiculo => vehiculo.getPatente() === patente);
        
        if (vehiculo) {
            vehiculo.setModelo(modelo);
            vehiculo.setAnio(anio);
        } else {
            console.log("Vehículo no encontrado");
        }
    }
     
      
    
   public darDeBaja(modelo: string): void{ 
    this.vehiculos = this.vehiculos.filter(Moto => Moto.getModelo() !== modelo);
    }
}


