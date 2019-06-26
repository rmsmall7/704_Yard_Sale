import React from 'react';

function HomeBanner(props) {
    return (
        <div classname="home">
            <section id="banner">
                <div classname="">
                    <h1>704 Yard Sale</h1>
                    <p id="innerText">Welcome to 704 Yard Sale, the fast and convenient way to find local yard sales
        in your area!</p>
                </div>
                <video autoPlay loop muted playsInline src="images/drone.mp4">
                </video></section>
        </div>

    );
}

export default HomeBanner;