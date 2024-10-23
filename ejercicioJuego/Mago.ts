import { Personaje } from "./personaje";

export class Mago extends Personaje {
    private _hechizos: string[];

    constructor(nombre: string, nivel: number, puntosDeVida: number, hechizos: string[]) {
        super(nombre, nivel, puntosDeVida);
        this._hechizos = hechizos;
    }

    get hechizos(): string[] {
        return this._hechizos;
    }

    lanzarHechizo(): void {
        if (this._hechizos.length > 0) {
            console.log(`${this.nombre} lanza ${this._hechizos[0]}!`);
            this._hechizos.shift(); // Usar el primer hechizo
        } else {
            console.log(`${this.nombre} no tiene hechizos disponibles.`);
        }
}  

evolucionar(): void {
    this.nivel += 5;
    this.puntosDeVida += 30; // Usar el setter
    console.log(`${this.nombre} ha evolucionado a Hechicero! Nivel: ${this.nivel}, Puntos de Vida: ${this.puntosDeVida}`);
}
}