import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="w-full bg-black text-white p-6 text-2xl sticky top-0 z-20">

            <div className="flex justify-between items-center">

                <div className="flex justify-start items-center">
                    <Link to='/' className="sm:text-2xl text-sm w-40 sm:w-auto">Harapan Bisnis Centre</Link>
                </div>

                <div className="flex justify-end items-center gap-4 text-sm sm:text-2xl">

                    <Link to='/'>Home</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/price'>Prices</Link>

                </div>
            </div>
        </div>
    )
}

export default Nav