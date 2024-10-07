import { Vehículo } from "./vehiculo";

export class Auto extends Vehículo{
    private marca: string;
    private modelo: string;
    private anio: number;
    

constructor( marca: string, modelo: string, anio:number, ruedas: number, color:string, patente:number ){
    super(ruedas, color, patente)
    this.marca= marca;
    this.modelo= modelo;
    this.anio= anio;    
}
public getMarca(): string{
    return this.marca;
}
public getModelo(): string{
    return this.modelo;
}
public getAnio(): number{
    return this.anio;
}

public setModelo(modelo:string): void{
    this.modelo= modelo;
}
public setAnio(anio: number): void{
    this.anio=anio;
}

}
