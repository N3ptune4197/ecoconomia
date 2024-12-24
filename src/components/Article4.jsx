import CardsObjetos from "./componentsSimples/CardsObjetoDeEstudio";
import Obrero1 from './../assets/obrero1.png'
import Obrero2 from './../assets/obrero2.png'
import Sociedad from './../assets/sociedadJunta.jpg'



export default function ArticleN4() {






    return(
        <>
        
        <div className="flex flex-col w-full md:w-[49%] pt-3 mt-6">
            <div className="flex flex-col gap-4 md:gap-6 w-full">

                <div className="title">
                    <span className='px-3 py-1 text-red-500 border rounded-md border-red-600 font-semibold text-md md:text-2xl' id="objeto-de-estudio">V. Objeto de estudio</span>
                </div>

                <div className="body">
                    <p className="md:text-lg font-semibold">Son las <span className="text-blue-500 font-bold">actividades económicas o vida económica</span>, relacionadas a la existencia y desarrollo del ser humano.</p>
                </div>

                <div className="cardsObjetos flex flex-col gap-y-7">
                    <CardsObjetos imagen={Obrero1} titulo="¿Qué y cuánto producir?" punto1="Nivel económico" punto2="Se plantea asignación de recursos hacia fines alternativos" color="red"/>
                    <CardsObjetos imagen={Obrero2} titulo="¿Cómo producir?" punto1="Nivel tecnológico" punto2="Manejo eficiente y óptima elección de recursos" color="blue"/>
                    <CardsObjetos imagen={Sociedad} titulo="¿Para quién producir?" punto1="Nivel social" punto2="Correta distribución de la producción" color="green"/>
                </div>
            </div>
        </div>
        </>
    );
}