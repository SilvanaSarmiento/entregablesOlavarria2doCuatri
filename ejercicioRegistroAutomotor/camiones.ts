export class Camion {
    private marca: string;
    private modelo: string;
    private anio: number;
    private patente: number;

    constructor(marca: string, modelo: string, anio: number, patente: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.patente= patente;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public getAnio(): number {
        return this.anio;
    }

    public getPatente(): number{
        return this.patente
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public setAnio(anio: number): void {
        this.anio = anio;
    }

   public setPatente(patente: number): void{
        this.patente= patente
    }
}
