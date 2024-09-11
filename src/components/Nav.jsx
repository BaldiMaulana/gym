import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="w-full bg-black text-white p-6 text-2xl sticky top-0 z-20">

            <div className="flex justify-between items-center">

                <div className="flex justify-start items-center">
                    <h1 className="sm:text-2xl text-sm w-40 sm:w-auto">Harapan Bisnis Centre</h1>
                </div>

                <div className="flex justify-end items-center gap-4 text-sm sm:text-2xl">

                    <Link path='/'>Home</Link>
                    <Link path='/'>Contact</Link>
                    <Link path='/'>Prices</Link>

                </div>
            </div>
        </div>
    )
}

export default Nav