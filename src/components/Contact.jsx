import Footer from "./Footer"
import GoogleMapEmbed from "./GoogleMapEmbed"
import Nav from "./Nav"

const Contact = () => {
    return (
        <div className="h-full">
            <Nav />
            <br />
            <div className="grid justify-center items-center text-center">

                <div className="grid">
                    <h1 className="text-5xl font-semibold">Jam Operasional</h1>
                    <br />
                    <p>luangkan waktu anda untuk sehat. </p>
                    <p>"Kerja itu penting, tapi istirahat jauh lebih penting.</p>
                    <p>Usia memang di tangan Tuhan, tapi kesehatan di tangan kita sendiri."💪🏻😊😊😍</p>
                    <br />
                </div>
                    <br />
                <p className="text-2xl sm:text-5xl font-semibold">BUKA SETIAP HARI Pkl 06.00-24.00 WIB</p>
                    <br />
                <p className="text-xl sm:text-2xl">Ruko harapan bisnis center (lt.3),Jln.K.H Ahmad Dahlan,sei harapan,sekupang,batam,kepulauan riau</p>
                    <br />

            </div>
            <GoogleMapEmbed />
            <Footer/>
        </div>
    )
}

export default Contact