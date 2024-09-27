export class Moto {
    private marca: string;
    private modelo: string;
    private anio: number;

    constructor(marca: string, modelo: string, anio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    getMarca(): string {
        return this.marca;
    }

    getModelo(): string {
        return this.modelo;
    }

    getAnio(): number {
        return this.anio;
    }

    setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    setAnio(anio: number): void {
        this.anio = anio;
    }
}