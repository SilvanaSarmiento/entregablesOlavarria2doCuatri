import { Personaje } from "./personaje";


export class Luchador extends Personaje {
    protected golpe: string[];

    constructor(nombre: string, nivel: number, puntosDeVida: number, golpe: string[]) {
        super(nombre, nivel, puntosDeVida);
        this.golpe = golpe;
    }

    public golpear(): void {
        console.log(`${this.nombre} está golpeando`);
    }

    public evolucionar(): void {
        this.nivel += 5;
        this.puntosDeVida += 30; // Usar el setter
        console.log(`${this.nombre} ha evolucionado a Guerrero! Nivel: ${this.nivel}, Puntos de Vida: ${this.puntosDeVida}`);
    }
}
