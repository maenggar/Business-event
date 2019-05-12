import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
              <div className="font_righteous footer_logo_venue">
                 The Business Summit
              </div>
                <div className="footer_copyright">
                   the Bussines Summit 2019. all rights reserved
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;