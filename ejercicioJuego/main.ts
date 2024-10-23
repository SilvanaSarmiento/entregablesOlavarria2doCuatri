import { Personaje } from "./personaje";
import { Luchador } from "./Luchador";
import { Mago } from "./Mago";
import { Arquero } from "./Arquero";



const mago = new Mago("Harry Potter", 10, 100, ["Expelliarmus"]);
const luchador = new Luchador("The Rock", 8, 150, [ "Empuje"]);
const arquero = new Arquero("Hawkeye", 9, 90, 5);

mago.atacar();
mago.lanzarHechizo();
mago.evolucionar();

luchador.defender();
luchador.golpear();
luchador.evolucionar();

arquero.atacar();
arquero.disparar();
arquero.evolucionar();
