import Footer from "./Footer"
import Nav from "./Nav"

const Prices = () => {
    return (
        <div>
            <Nav />
            <br />
            <div className="grid sm:grid sm:grid-cols-3 justify-center items-center text-center gap-2 p-4 " >

                <div className="border-4 p-4 border-black rounded-xl h-80 grid hover:bg-black hover:text-white	">
                    <h1 className=" font-extrabold text-5xl">Harian</h1>
                    <p className="text-md">* Wajib bayar ditempat</p>
                    <p className=" font-semibold text-4xl">Rp.24K</p>
                </div>

                <div className="border-4 p-4 border-black rounded-xl h-80 grid hover:bg-black hover:text-white">
                    <h1 className=" font-extrabold text-5xl">Paket 1 bulan</h1>
                    <p className="">Member Pelajar</p>
                    <p className=" font-semibold">Rp.120K</p>
                    <p className="">Member Dewasa/mahasiswa</p>
                    <p className=" font-semibold">Rp.180K</p>
                    <p className="">Member Couple / Pasangan</p>
                    <p className=" font-semibold">Rp.300K</p>
                </div>

                <div className="border-4 p-4 border-black rounded-xl h-80 grid hover:bg-black hover:text-white">
                    <h1 className=" font-extrabold text-5xl">Paket 3 bulan</h1>
                    <p className="">Member Pelajar</p>
                    <p className=" font-semibold">Rp.300K</p>
                    <p className="">Member Dewasa/mahasiswa</p>
                    <p className=" font-semibold">Rp.420K</p>
                    <p className="">Member Couple / Pasangan</p>
                    <p className=" font-semibold">Rp.520K</p>
                </div>

                <div className="border-4 p-4 border-black rounded-xl h-80 grid hover:bg-black hover:text-white">
                    <h1 className=" font-extrabold text-5xl">Pake 6 bulan</h1>
                    <p className="">Member Pelajar & Dewasa</p>
                    <p className=" font-semibold">Rp.960K</p>
                </div>

                <div className="border-4 p-4 border-black rounded-xl h-80 grid hover:bg-black hover:text-white">
                    <h1 className=" font-extrabold text-5xl">Pake 1 Tahun</h1>
                    <p className="">Member Pelajar & Dewasa</p>
                    <p className=" font-semibold">Rp.1.800.000</p>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Prices