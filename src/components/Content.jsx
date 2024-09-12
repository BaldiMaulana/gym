import { Link } from "react-router-dom"
import GoogleMapEmbed from "./GoogleMapEmbed"
import Footer from "./Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
const Content = () => {
    const images = [
        'https://lh3.googleusercontent.com/p/AF1QipMONTj5P6BlqLt08UMqK3tDYZESC5Mwmj__HVLx=s680-w680-h510',
        'https://lh3.googleusercontent.com/p/AF1QipOtfVaDS7ywO9C_PaJVkXFlSooREvZ-jN2BDU_r=s680-w680-h510',
        'https://lh3.googleusercontent.com/p/AF1QipN8ahgTkAEe4m0Jh_oGB-vDl3HjqZq5dYL15XLv=s680-w680-h510',
        'https://lh3.googleusercontent.com/p/AF1QipPA7h1HJurxY-rReoHbktV7vrA-4t59knCAU1uy=s680-w680-h510',
        'https://lh3.googleusercontent.com/p/AF1QipOOidLBWhSlYYj4vf-5qMIuJ4T8lfrA0UMWdGWw=s680-w680-h510',
        'https://scontent.fcgk30-1.fna.fbcdn.net/v/t1.6435-9/46451826_2284124631659183_2478451753360556032_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFM9GYNE5UIenfXjY412pNyL2OIGi-TqWcvY4gaL5OpZ3fFGSWDeIvlhiC58JOrARwqPBpzPFsAfIbBmUXYI6SK&_nc_ohc=byNam7BbXNIQ7kNvgH6rg1x&_nc_ht=scontent.fcgk30-1.fna&_nc_gid=AihtRhmJElGcuKeFHSHm4Bn&oh=00_AYD8A_p-R2LLtUKc9zI2USmLb0rhMC6xXWLr-VgCQD2JcQ&oe=6709410D'
    ]

        const phoneNumber = '6282387881505'
        const message = "Halo, saya tertarik dengan HarapanFitness."

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="h-screen">

            <div className="relative bg-cover bg-center h-full" style={{ backgroundImage: `url('./images/firstcontent.jpg')` }}>
                <div className="absolute inset-0 flex items-center justify-end text-white text-xl font-bold pr-4">
                    <div className="w-2/6 space-y-2">
                        <p>Harapan Bisnis Centre</p>
                        <p>Tempat yang nyaman buat Kamu untuk berolahraga dan murah terjangakau</p>
                        <br />
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 border-4 rounded-xl text-sm sm:text-xl ">
                            <FontAwesomeIcon icon={faWhatsapp} /> Hubungi
                        </a>
                    </div>
                </div>
            </div>

            <div className="grid justify-center items-center m-2 space-y-6">
                <div className="flex justify-center items-center h-full">
                    <div className="bg-brown text-white p-5 text-center text-bold ">
                        <p >Harga Info</p>
                    </div>
                </div>
                <h1 className="text-5xl text-center">Harapan Bisnis Centre</h1>
                <p className="text-center"> Ingin tubuh yang lebih sehat dan bugar tanpa perlu merogoh kocek dalam-dalam? Datang saja ke HarapanFitness! Kami menawarkan fasilitas gym lengkap dengan harga yang terjangkau untuk semua kalangan. Nikmati suasana yang nyaman dan menyenangkan sambil mencapai target kebugaranmu</p>
                <div className="flex justify-center items-center h-full">
                    <div className="bg-brown text-white p-5 text-center text-bold ">
                        <p>Info Lebih Lanjut</p>
                    </div>
                </div>
            </div>

            <div>
                <img src="./images/secondcontent.jpg" alt="secondpic" className="w-full" />
            </div>

            <div className="grid justify-center items-center p-2">
                <h1 className="text-5xl text-center">Our Images</h1>

                <br />
                <br />
                <br />

                <div className="grid grid-cols-3 gap-4">
                    {images.map((imgSrc, index) => (
                        <img key={index} src={imgSrc} alt={`Image ${index + 1}`} className="sm:w-[400px] sm:h-[400px] w-[200px] h-[200px] object-cover" />
                    ))}
                </div>
            </div>

            <div className="text-center">
                <h1 className="text-5xl text-center">SEKUPANG</h1>
                <br />
                <p className="underline">Mall HBC, Jl. KH Ahmad Dahlan lt. 3, Tj. Riau, Kec. Sekupang, Kota Batam, Kepulauan Riau 29425</p>
                <br />
                <a className="underline"> 0858-0502-7606</a>
                <br />
                <br />
                <a className="underline" href="https://docs.google.com/forms/d/e/1FAIpQLScqD6-TBInBA_1c7OJ8YWtEbW_3r1YItYJqUhZgwLsey7uhJw/viewform">Langganan</a>
                <br />
                <br />
                <div>
                    <GoogleMapEmbed />
                </div>
                <Footer />
            </div>
            {/* last */}
        </div>
    )
}

export default Content