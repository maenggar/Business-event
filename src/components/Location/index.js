import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.053054105006!2d104.05189421475382!3d1.1222103991814356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d9891e3ba73eb3%3A0xf59a21297a6aba6!2sWelcome+To+Batam+Monument!5e0!3m2!1sid!2sid!4v1556936845687!5m2!1sid!2sid"
                width="100%" height="500px" frameBorder="0" allowFullScreen></iframe>
            <div className="location_tag">
                <div>LOCATION</div>
            </div>
        </div>
    );
};

export default Location;