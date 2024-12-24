import EcoconomiaLogo from './../assets/ecoconomia.jpg'




export default function Footer() {



    return(
        <>

            <footer className="footer bg-base-200/60 flex flex-col items-center gap-4 p-6 mt-7">
                <div className="flex items-center gap-2 text-xl font-bold">
                    <img src={EcoconomiaLogo} alt="" className='w-11 rounded-full' />
                    <span>Ecoconomía</span>
                </div>
                <aside>
                    <p>©2024 Ecoconomía</p>
                </aside>
                <div className="flex h-5 gap-4">
                    <a href="https://www.facebook.com/Ecoconomia18" target='_blank' className="link" aria-label="Facebook Link">
                    <span className="icon-[line-md--facebook] size-5"></span>
                    </a>
                    <a href="#" className="link" aria-label="X Link">
                    <span className="icon-[pajamas--twitter] size-5"></span>
                    </a>
                    <a href="https://www.instagram.com/ecoconomia/" target='_blank' className="link" aria-label="Instagram Link">
                    <span className="icon-[line-md--instagram] size-5"></span>
                    </a>
                </div>
            </footer>
        
        </>
    );
}