import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="bg-black text-white p-4 space-y-6 grid justify-center items-center">
            <br/>
            <p className="text-3xl">Harapan Bisnis Centre</p>
            <div className="space-x-4 flex justify-center items-center">
            <FontAwesomeIcon icon={faInstagram} size="2x"/>
            <FontAwesomeIcon icon={faFacebook} size="2x"/>
            <FontAwesomeIcon icon={faTiktok} size="2x"/>
            </div>
            <br/>
            <br/>
            <br/>
            <h1>@2024 di buat oleh Muhammad Baldi Maulana</h1>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default Footer;
