import Flork from './../assets/flork.png'
import Etimologia from './../assets/etimologia-economia.jpeg'
import EtimologiaPolitica from './../assets/etimologia-economia-politica.jpeg'

export default function ArticuloN1() {





    return(

        <>
            <div className='w-full md:w-[49%]'>
                
                <div className="flex gap-x-7 mb-3">
                    <div className="titulos mb-3">
                        <h1 className="text-red-500 text-4xl md:text-5xl px-4 py-1 border-[3px] rounded-xl border-red-600 font-semibold mb-5">Economía</h1>
                        <span className='px-3 py-1 text-red-500 border rounded-md border-red-600 font-semibold text-md md:text-2xl' id="etimologia">I. Etimología</span>
                    </div>
                    <div className="imagen">
                        <img src={Flork} alt="Flork Welcome" className='w-[100px] md:w-[140px] drop-shadow-xl' />
                    </div>

                    
                </div>

                <div className="economia-etimologia border px-5 py-4 border-dashed border-orange-500 rounded-lg flex flex-col mb-7 shadow-lg md:px-9" style={{width: "fit-content"}}>
                    <p className='text-sm md:text-lg font-semibold'>La <span className='text-red-500 font-bold'>economía</span> proviene de 2 vocablos griegos:</p>
                    <img src={Etimologia} alt="Etimologia" className='object-cover my-3 w-full md:w-[700px]' />
                    <p className='text-sky-600 text-center self-center font-bold'>"Administración de los recursos de la casa"</p>
                </div>

                <div className="economia-etimologia border px-5 py-4 border-dashed border-green-500 rounded-lg flex flex-col mb-5 shadow-lg md:px-9" style={{width: "fit-content"}}>
                    <p className='text-sm md:text-lg font-semibold'>La <span className='text-red-500 font-bold'>economía política</span> proviene de 2 vocablos griegos:</p>
                    <img src={EtimologiaPolitica} alt="Etimologia" className='object-cover my-3 w-full md:w-[700px]' />
                    <span className='text-sky-600 text-center self-center font-bold'>"Administración de la riqueza de la sociedad o Estado"</span>
                </div>


            </div>
        </>
    );
}