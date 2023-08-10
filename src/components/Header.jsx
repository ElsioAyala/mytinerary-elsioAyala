import { useState } from "react"
import Button from "./Button"
import NavMain from "./NavMain"
import UserMenu from "./UserMenu"

function Header() {

    const [menu, setMenu] = useState(false)
    const [loged, setloged] = useState(false)

    const addLogout = (loged) => {
        setloged(loged)
    }

    return (
        <header className="w-full py-3 lg:mt-5 absolute top-0 z-30 text-white bg-white/5 backdrop-blur-xl lg:bg-transparent lg:backdrop-blur-none lg:px-10 2xl:px-0">
            <div className="flex justify-between items-center lg:mx-auto max-w-7xl mx-3 sm:mx-5">
                <p className="logo text-xl  lg:text-3xl font-bold order-3 lg:order-1">My Tinerary</p>
                <div className="lg:hidden order-1 flex flex-grow basis-0">
                    <button className="flex items-center px-0 py-0 text-5xl" onClick={() => setMenu(!menu)}>
                        {menu ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                            : <svg className="h-6 w-6 fill-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>}
                        <samp className="text-sm ml-2 text-slate-300">Menu</samp>
                    </button>
                </div>
                <div className="mainNavBar order-2 lg:order-1 lg:flex lg:flex-grow lg:justify-end">
                    <NavMain traslate={menu ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} />
                </div>
                <div className="lg:ml-5 order-4 lg:order-1 flex flex-grow basis-0 lg:basis-auto justify-end lg:flex-grow-0 [$>button]:px-10">
                    {loged ? <UserMenu addLogout={addLogout} /> :
                    <span onClick={() => setloged(true)}>
                        <Button
                            text="Login"
                            customStyle="text-sm lg:text-2xl lg:font-bold"
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 lg:w-6 lg:h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>}
                            padding="px-2 py-[5px] lg:px-3"
                        />
                    </span>}
                </div>
            </div>
        </header>
    )
}

export default Header
