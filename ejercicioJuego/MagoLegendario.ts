import { Personaje } from "./personaje";
import { Mago } from "./Mago";


export class MagoLegendario extends Mago {
    private hechizosLegendarios: string[];

    constructor(nombre: string, nivel: number, puntosDeVida: number, hechizos: string[], hechizosLegendarios: string[]) {
        super(nombre, nivel, puntosDeVida, hechizos);
        this.hechizosLegendarios = hechizosLegendarios;
    }

    public gethechizosLegendarios(): string[] {
        return this.hechizosLegendarios;
    }

    public evolucionar(): void {
        this.nivel += 5;
        this.puntosDeVida += 30;
        console.log(`${this.nombre} ha evolucionado a MagoLegendario Nivel: ${this.nivel}, Puntos de Vida: ${this.puntosDeVida}`);
    }

    public lanzarHechizosLegendarios(): void {
        if (this.hechizosLegendarios.length > 0) {
            console.log(`${this.nombre} lanza un hechizo legendario: ${this.hechizosLegendarios[0]}!`);
            this.hechizosLegendarios.shift(); // Usar el primer hechizo legendario
        } else {
            console.log(`${this.nombre} no tiene hechizos legendarios disponibles.`);
        }
    }

}
