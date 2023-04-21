
import '../Home/home.css'

import React, { useContext } from "react";

export default function AboutUs() {


    return (
        <>
            <div className="card" style={{ width: '18rem' }} >
                <img src="img/viber_image_2023-04-21_13-46-51-941.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Welcome</h5>
                    <p className="card-text">GBstyle-nails By Galya Lazarova</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Mobile: 088 777 0818</li>
                    <li className="list-group-item">Email: lazarova.galq@gmail.com</li>
                    <li className="list-group-item">Address: Кв.Оборище,ул.Козница 6, Sofia, Bulgaria</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
            <div className="card-group">
                <div className="card">
                    <img src="img/292766117_3195120917427084_8093892093062323277_n.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Грижа за ноктите</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">

                    <img src="img/287318034_3173677216238121_3876630277965791557_n.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Грижа за лицето</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="img/324733064_708166377581789_3960976656682610931_n.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Мокропигментация на вежди, устни и очна линия</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                    <div className="card">
                        <img src="img/324733064_708166377581789_3960976656682610931_n.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Масажи</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="img/324733064_708166377581789_3960976656682610931_n.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Поставяне на мигли косъм по косъм, 3D мигли и руски обем</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="img/324733064_708166377581789_3960976656682610931_n.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Поставяне на кератинови кичури</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

