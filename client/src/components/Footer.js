import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterBottom from './FooterBottom';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            <div className="footer_content">
              <div className="container">
                <div className="row">
                  {/* About */}
                  <div className="col-lg-4 footer_col">
                    <div className="footer_about">
                      <div className="footer_logo">
                        < Link to="#" name="About">
                          <div className="d-flex flex-row align-items-center justify-content-start">
                            <div className="footer_logo_icon"><img src="images/logo_2.png" alt="logo" /></div>
                            <div>704 Yard Sale</div>
                          </div>
                        </Link>
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
                  </div>
                  {/* Footer Links */}
                  <div className="col-lg-4 footer_col">
                    <div className="footer_menu">
                      <div className="footer_title">Support</div>
                      <ul className="footer_list">
                        <li>
                          <Link to="#">
                            <div>Customer Service<div className="footer_tag_1">online now</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <div>Terms and Conditions</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <div>Contact</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Footer Contact */}
                  <div className="col-lg-4 footer_col">
                    <div className="footer_contact">
                      <div className="footer_social">
                        <div className="footer_title">Social</div>
                        <ul className="footer_social_list d-flex flex-row align-items-start justify-content-start">
                          <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true" /></Link></li>
                          <li><Link to="#"><i className="fa fa-youtube-play" aria-hidden="true" /></Link>
                          </li>
                          <li><Link to="#"><i className="fa fa-google-plus" aria-hidden="true" /></Link>
                          </li>
                          <li><Link to="#"><i className="fa fa-instagram" aria-hidden="true" /></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FooterBottom />
            {/* <div className="footer_bar">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="footer_bar_content d-flex flex-md-row flex-column align-items-center justify-content-start">
                      <div className="copyright order-md-1 order-2">
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        {/* Copyright ©
                        All rights reserved |
                        Made with <i className="fa fa-heart-o" aria-hidden="true" /> by Resilient Coders |
                        Powered by <Link to="https://colorlib.com" target="_blank">Colorlib</Link>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      {/* </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */} */} */}
          </footer>
          
        );
    }
}