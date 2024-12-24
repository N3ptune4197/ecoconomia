import { themeChange } from 'theme-change'




export default function Navbar() {

themeChange()

    return(

        <>

            <nav className="navbar rounded-box shadow">
            <div className="w-full md:flex md:items-center md:gap-2">
                <div className="flex items-center justify-between">
                <div className="navbar-start items-center justify-between max-md:w-full">
                    <a className="link text-base-content/90 link-neutral text-xl font-semibold no-underline" href="#">E<span className="text-red-600 font-bold">coco</span>nomia</a>
                    <div className="md:hidden">
                    <button type="button" className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square" data-collapse="#dropdown-navbar-collapse" aria-controls="dropdown-navbar-collapse" aria-label="Toggle navigation" >
                        <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                        <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
                    </button>
                    </div>
                </div>
                </div>
                <div id="dropdown-navbar-collapse" className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full" >
                <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li className="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
                    <button id="dropdown-nav" type="button" className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" >
                        Products
                        <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-open:opacity-100 hidden" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-nav" >
                        <li><a className="dropdown-item" href="#">UI kits</a></li>
                        <li><a className="dropdown-item" href="#">Templates</a></li>
                        <li><a className="dropdown-item" href="#">Component library</a></li>
                        <hr className="border-base-content/25 -mx-2 my-3" />
                        <li><a className="dropdown-item" href="#">Figma designs</a></li>
                    </ul>
                    </li>
                    <li>
                        <label className="swap swap-rotate">
                            <input type="checkbox" value="dark" className="theme-controller" />
                            <span className="swap-off icon-[tabler--sun] size-7"></span>
                            <span className="swap-on icon-[tabler--moon] size-7"></span>
                        </label>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

        </>
    );
}