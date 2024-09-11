import React from "react";

const GoogleMapEmbed = () => {
    return (
        <div className="map-container" style={{ width: '100%', height: '400px' }}>
            <iframe
                title="Harapan Bisnis Centre Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.8605564639338!2d103.9540773!3d1.1044641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe95172cc349e7a54!2sHarapan%20Bisnis%20Centre!5e0!3m2!1sen!2sid!4v1693993056689!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}

export default GoogleMapEmbed;
