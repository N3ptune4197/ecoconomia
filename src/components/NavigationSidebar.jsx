import React from "react";



export default function NavSide() {



    return(
        <>
            <button type="button" className="btn btn-primary fixed top-[80%] right-5 md:right-10 md:top-[73%] z-10" aria-haspopup="dialog" aria-expanded="false" aria-controls="overlay-responsive-example" data-overlay="#overlay-responsive-example"><span className="icon-[mi--book] size-6"></span>Temario</button>

                <div id="overlay-responsive-example" className="overlay overlay-open:translate-x-0 drawer drawer-end lg:drawer-start hidden" role="dialog" tabIndex="-1" >
                <div className="drawer-header">
                    <h3 className="drawer-title flex items-center align-middle"><span className="icon-[ic--outline-book] mr-2"></span> Temas Economía</h3>
                    <button type="button" className="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-responsive-example">
                    <span className="icon-[tabler--x] size-5"></span>
                    </button>
                </div>
                <div className="drawer-body">
                    <ul className="list-inside list-decimal marker:text-purple-500 mt-5">
                        <li className="mb-3"><a href="#etimologia">Etimologia</a></li>
                        <li className="mb-3"><a href="#evolucion-cronologica-de-la-economia">Evolución Cronológica de la Economía</a></li>
                        <li className="mb-3"><a href="#economia-cientifica">Economía Científica</a></li>
                        <li className="mb-3"><a href="#concepto">Concepto</a></li>
                        <li className="mb-3"><a href="#objeto-de-estudio">Objeto de estudio</a></li>
                    </ul>
                </div>
                <div className="drawer-footer">
                    <button type="button" className="btn btn-soft btn-secondary" data-overlay="#overlay-responsive-example">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
        </>
    );
}