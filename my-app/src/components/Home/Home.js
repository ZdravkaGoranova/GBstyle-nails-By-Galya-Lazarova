
import '../Home/home.css'

import React, { useContext } from "react";

export default function Home() {


    return (
        <>



             <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/viber_image_2023-04-21_13-46-51-941.jpg" className="d-block w-50 h-50" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="img/viber_image_2023-04-21_13-40-32-793.jpg" className="d-block w-50 h-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="img/viber_image_2023-04-21_13-46-51-904.jpg" className="d-block w-50 h-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> 
        </>
    )
}

