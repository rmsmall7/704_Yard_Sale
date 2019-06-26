import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="footer_content">
                    <div className="container">
                        <div className="row">


                            <div className="col-lg-4 footer_col">
                                <div className="footer_about">
                                    <div className="footer_logo">
                                        <a name="About">
                                            <div className="d-flex flex-row align-items-center justify-content-start">
                                                <div className="footer_logo_icon"><img src="images/logo_2.png" alt=""></img></div>
                                                    <div>704 Yard Sale</div>
                                                </div>
                                    
                                        <div className="footer_about_text">
                                            <p> Welcome to 704 Yard Sale, the fast and convenient way to find local yard
                                                sales in your area! No more driving around endlessly to scout out sales or
                                                getting lost following signs. With 704 Yard Sale you can view all yard sales
                                                happening around you in our forums; you can even search for specific items.

                                                Happy Yard Selling!
                                    </p>
                                        </div>
                                    </div>
                                    </a>
                                </div>


                                <div className="col-lg-4 footer_col">
                                    <div className="footer_menu">
                                        <div className="footer_title">Support</div>
                                        <ul className="footer_list">
                                            <li>
                                                <a href="#">
                                                    <div>Customer Service<div class="footer_tag_1">online now</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div>Terms and Conditions</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div>Contact</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="col-lg-4 footer_col">
                                    <div className="footer_contact">
                                        <div className="footer_social">
                                            <div className="footer_title">Social</div>
                                            <ul
                                                className="footer_social_list d-flex flex-row align-items-start justify-content-start">
                                                <li><a href="#"><i classNameName="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i classNameName="fa fa-youtube-play" aria-hidden="true"></i></a>
                                                </li>
                                                <li><a href="#"><i classNameName="fa fa-google-plus" aria-hidden="true"></i></a>
                                                </li>
                                                <li><a href="#"><i classNameName="fa fa-instagram" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bar">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div
                                        className="footer_bar_content d-flex flex-md-row flex-column align-items-center justify-content-start">
                                        <div className="copyright order-md-1 order-2">

                                            Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script> All rights reserved |
                                    Made with <i className="fa fa-heart-o" aria-hidden="true"></i> by Resilient Coders |
                                    Powered by <a href="https://colorlib.com" target="_blank">Colorlib</a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </footer>
        )
    }
}