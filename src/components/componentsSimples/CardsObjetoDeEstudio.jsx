




export default function CardsObjetos(props) {



    return(
        <>
            <div className={`flex flex-col md:flex-row px-5 py-3 border rounded-xl border-dashed border-${props.color}-500 md:w-[800px]`}>    
                <div className="img">
                    <img src={props.imagen} alt="" className="w-52 md:w-72 mb-3 md:mb-0 mx-auto" />
                </div>
                <div className="texto ml-3 flex flex-col md:mr-12 md:ml-14">
                        <span className="font-bold text-xl md:text-3xl text-red-500 text-center md:mt-6 md:mb-4">{props.titulo}</span>

                    <ul className="list-outside list-disc ms-4 md:text-xl font-semibold mt-4">
                        <li className="mb-2 text-blue-500">{props.punto1}</li>
                        <li className="mb-2">{props.punto2}</li>
                    </ul>
                </div>
            </div>
        </>
    );
}