import React, { Component } from 'react';
export function YardSalePost(props) {
    return (
        <div className="col-xl-4 col-md-6">
            <div className="product">
                <div className="product_content">
                    <div className="product_info d-flex flex-row align-items-start justify-content-start">
                        <div>
                            <div>
                                <div className="product_name"><Link>Moving Sale!</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="product_info d-flex flex-row align-items-start justify-content-start">
                        <div>
                            <div>
                                <div className="product_name"><p>This is a description of the garage/sale</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="product_buttons">
                        <div className="text-right d-flex flex-row align-items-start justify-content-start">
                            <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                                <div>
                                    <div><img src="images/heart_2.svg" className="svg" alt="heart" />
                                        <div>+</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}