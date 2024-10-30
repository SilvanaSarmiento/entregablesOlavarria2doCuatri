import { Personaje } from "./personaje";
import { Luchador } from "./Luchador";
import { Mago } from "./Mago";
import { Arquero } from "./Arquero";
import { MagoLegendario } from "./MagoLegendario";

const mago = new Mago("Harry Potter", 10, 100, ["Expelliarmus"]);
const luchador = new Luchador("The Rock", 8, 150, ["Empuje"]);
const arquero = new Arquero("Hawkeye", 9, 90, 5);
const magoLegendario = new MagoLegendario("Harry Potter", 15, 150, ["Fuego",], ["Avada Kedavra"]);

mago.atacar();
mago.lanzarHechizo();
magoLegendario.evolucionar();
magoLegendario.lanzarHechizosLegendarios();

luchador.defender();
luchador.golpear();
luchador.evolucionar();

arquero.atacar();
arquero.disparar();
arquero.evolucionar();

