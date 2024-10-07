export class Vehículo{
   protected ruedas: number;
   protected color: string;
   protected patente: number;

    constructor(pRuedas:number,pColor:string, pPatente:number ){
        this.ruedas= pRuedas;
        this.color= pColor;
        this.patente= pPatente;
}
    public getRuedas(): number{
        return this.ruedas;
    }
    public getColor(): string{
        return this.color;
    }
    public getPatente(): number{
        return this.patente
    }

    public setRuedas(ruedas:number): void{
         if(ruedas>0)
            this.ruedas= ruedas;
    }
    public setColor(color:string): void{
        this.color =color;
    }
    public setPatente( patente: number): void{
        this.patente= patente;
    }
}