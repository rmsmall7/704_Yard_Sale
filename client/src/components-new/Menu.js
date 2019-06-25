import React from 'react';

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
                    <li><a href="#">Post Your Sale</a></li>
                    <li><a href="#">Saved</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Placeholder</a></li>
                    <li><a href="#">Placeholder</a></li>
                </ul>
            </div>
            {/* Contact Info */}
            <div className="menu_contact">
                <div className="menu_social">
                    <ul className="menu_social_list d-flex flex-row align-items-start justify-content-start">
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                    </ul>
                </div>
            </div>
        </div>


    );
}

export default Menu;