import { Personaje } from "./personaje";

export class Arquero extends Personaje {
    private _flechas: number;

    constructor(nombre: string, nivel: number, puntosDeVida: number, flechas: number) {
        super(nombre, nivel, puntosDeVida);
        this._flechas = flechas;
    }

    disparar(): void {
        if (this._flechas > 0) {
            console.log(`${this.nombre} dispara una flecha!`);
            this._flechas--; // Disminuir el número de flechas
        } else {
            console.log(`${this.nombre} no tiene flechas!`);
        }
    }
    evolucionar(): void {
        this.nivel += 5;
        this.puntosDeVida += 30; // Usar el setter
        this._flechas += 10;
        console.log(`${this.nombre} ha evolucionado a Maestro Arquero! Nivel: ${this.nivel}, Puntos de Vida: ${this.puntosDeVida}, Flechas: ${this._flechas}`);
    }
}     
