export abstract class Personaje {
    protected nombre: string;
    protected nivel: number;
    protected puntosDeVida: number;

    constructor(nombre: string, nivel: number, puntosDeVida: number) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
    }

    public getNombre(): string {
        return this.nombre
    }

    public getNivel(): number {
        return this.nivel
    }

    public getPuntosDeVida(): number {
        return this.puntosDeVida
    }

    public setpuntosDeVida(valor: number) {
        if (valor < 0)
            this.puntosDeVida = valor;
    }

    public atacar(): void {
        console.log(`${this.nombre} ataca!`);
    }

    public defender(): void {
        console.log(`${this.nombre} se defiende!`);
    }

    abstract evolucionar(): void; 
}