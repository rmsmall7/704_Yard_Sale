import React from 'react';
import { Link } from 'react-router-dom';
function Menu(props) {
    return (
        // Menu//
        <div className="menu">
            {/* Search */}
            <div className="menu_search">
                <form action="#" id="menu_search_form" className="menu_search_form">
                    <input type="text" className="search_input" placeholder="Search Item" required="required" />
                    <button className="menu_search_button"><img src="images/search.png" alt="" /></button>
                </form>
            </div>
            {/* Navigation */}
            <div className="menu_nav">
                <ul>
                    <li><Link to="#">Post Your Sale</Link></li>
                    <li><Link to="#">Saved</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Placeholder</Link></li>
                    <li><Link to="#">Placeholder</Link></li>
                </ul>
            </div>
            {/* Contact Info */}
            <div className="menu_contact">
                <div className="menu_social">
                    <ul className="menu_social_list d-flex flex-row align-items-start justify-content-start">
                        <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true" /></Link></li>
                        <li><Link to="#"><i className="fa fa-youtube-play" aria-hidden="true" /></Link></li>
                        <li><Link to="#"><i className="fa fa-google-plus" aria-hidden="true" /></Link></li>
                        <li><Link to="#"><i className="fa fa-instagram" aria-hidden="true" /></Link></li>
                    </ul>
                </div>
            </div>
        </div>


    );
}

export default Menu;