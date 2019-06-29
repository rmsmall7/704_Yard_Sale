

import React from 'react';
import { Link } from 'react-router-dom';

function FooterBottom(props) {
    return (
        <div className="footer_bar">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="footer_bar_content d-flex flex-md-row flex-column align-items-center justify-content-start">
                            <div className="copyright order-md-1 order-2">
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright ©
                                All rights reserved |
                        Made with <i className="fa fa-heart-o" aria-hidden="true" /> by Resilient Coders 
                     {/* Powered by <Link to="https://colorlib.com" target="_blank">Colorlib</Link> */}
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;