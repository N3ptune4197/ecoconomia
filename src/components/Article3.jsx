import AdamSmith from './../assets/AdamSmith.jpeg'
import NemotecniaMoco from './../assets/nemotecnia-MOCO.jpeg'



export default function ArticleN3() {
    



    return(
        <>
            <div className="flex flex-col w-full md:w-[49%] pt-3">
                <div className="flex flex-col gap-4 md:gap-6 w-full">

                    <div className="title">
                        <span className='px-3 py-1 text-red-500 border rounded-md border-red-600 font-semibold text-md md:text-2xl' id="economia-cientifica">III. Economía Científica</span>

                        <div className="img">
                            <img src={AdamSmith} alt="Adam Smith" className='mt-5 w-full md:w-[700px]' />
                        </div>
                    </div>

                    <div className="texto">
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                <span className="bg-primary text-primary-content flex items-center justify-center rounded-full p-1">
                                <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                                </span>
                                <span className="text-base-content/80 font-semibold md:text-lg"> La economía adquiere el carácter de <span className="text-blue-500 font-bold">ciencia</span> en el año de 1776 gracias a <span className="text-blue-500 font-bold">Adam Smith</span>. </span>
                            </li>
                            <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                <span className="bg-error text-error-content flex items-center justify-center rounded-full p-1">
                                <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                                </span>
                                <span className="text-base-content/80 font-semibold md:text-lg"><span className="text-red-500"> Obra: La Riqueza de las naciones. </span></span>
                            </li>
                            <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                <span className="bg-primary text-primary-content flex items-center justify-center rounded-full p-1">
                                <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                                </span>
                                <span className="text-base-content/80 font-semibold md:text-lg"> Fuente de riqueza: <span className='text-blue-500 font-bold'>La división del trabajo</span>. </span>
                            </li>
                            <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                <span className="bg-primary text-primary-content flex items-center justify-center rounded-full p-1">
                                <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                                </span>
                                <span className="text-base-content/80 font-semibold md:text-lg"> Padre de la economía científica. </span>
                            </li>
                            <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                <span className="bg-primary text-primary-content flex items-center justify-center rounded-full p-1">
                                <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                                </span>
                                <span className="text-base-content/80 font-semibold md:text-lg"> Padre del liberalismo económico. </span>
                            </li>
                        </ul>
                    </div>  


                    <div className="title mt-6">
                        <span className='px-3 py-1 text-red-500 border rounded-md border-red-600 font-semibold text-md md:text-2xl' id="concepto">IV. Concepto</span>
                    </div>
                    <div className="body">
                        <p className='md:text-lg font-semibold mb-3'>La economía es una <span className='text-blue-500 font-bold'>ciencia social</span> que estudia la <span className='text-blue-500 font-bold'>administración</span> de los <span className='text-blue-500 font-bold'>recursos escasos</span> para satisfacer múltiples necesidades, empleando los recursos entre usos alternativos.</p>

                        <p className='md:text-lg font-semibold mb-5'>Debido a la escasez de los medios también se le denomina <span className='text-red-500 font-bold'>"ciencia de elección".</span></p>

                        <p className='md:text-lg font-semibold mb-3'>La economía es ciencia porque tiene:</p>

                        <p className='flex items-center md:text-xl font-bold border-red-500 rounded-lg bg-red-200 border-l-4 mb-2 pl-5 pr-10 py-3' style={{width: "fit-content"}}><span className='text-black'>Nemotecnia</span> <span className='icon-[mingcute--arrow-right-fill] bg-black size-5 mx-3'></span>
                            <span className='icon-[mynaui--letter-m-solid] size-7 bg-red-500'></span>
                            <span className='icon-[mynaui--letter-o-solid] size-7 bg-red-500'></span>
                            <span className='icon-[mynaui--letter-c-solid] size-7 bg-red-500'></span>
                            <span className='icon-[mynaui--letter-o-solid] size-7 bg-red-500'></span>
                        </p>
                        <img src={NemotecniaMoco} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}