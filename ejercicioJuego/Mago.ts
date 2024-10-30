import { Personaje } from "./personaje";

export class Mago extends Personaje {
    protected _hechizos: string[];

    constructor(nombre: string, nivel: number, puntosDeVida: number, hechizos: string[]) {
        super(nombre, nivel, puntosDeVida);
        this._hechizos = hechizos;
    }

    public gethechizos(): string[] {
        return this._hechizos;
    }

    public lanzarHechizo(): void {
        if (this._hechizos.length > 0) {
            console.log(`${this.nombre} lanza ${this._hechizos[0]}!`);
            this._hechizos.shift(); // Usar el primer hechizo
        } else {
            console.log(`${this.nombre} no tiene hechizos disponibles.`);
        }
    }
}
