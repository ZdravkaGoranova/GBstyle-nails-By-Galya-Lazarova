
import '../Home/home.css'

import React, { useContext } from "react";

export default function AboutUs() {


    return (
        <>
            <div className="card position-absolute top-50 start-0" style={{ width: '35em' }} >
                <img src="img/viber_image_2023-04-21_13-46-51-941.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Welcome</p>
                    <h5 className=" card-title">GBstyle-nails By Galya Lazarova</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Mobile: 088 777 0818</li>
                    <li className="list-group-item">Email:
                    <img src="img/marker.png"  width="20" height="20" alt="..." />
                     lazarova.galq@gmail.com</li>
                    <li className="list-group-item">
                    <img src="img/marker.png"  width="20" height="20" alt="..." /> Кв.Оборище,ул.Козница 6, Sofia, Bulgaria</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>

            <div className=" position-absolute top-50 start-50">

              

                <figure class="text-center">
                    <blockquote class="blockquote">
                        <p>GBstyle-nails By Galya Lazarova</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                    Teams 
                    </figcaption>
                </figure>

                <div className="card mb-3" style={{ maxWidth: '740px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="img/146229066_2819324435006736_8073264182131207444_n.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Галя Лазарова</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <li>Управител- маникюрист</li>
                                <li>Маникюр</li>
                                <li>Педикюр</li>
                                <li>Ноктопластика</li>
                                <li>Курсове</li>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card mb-3" style={{ maxWidth: '740px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="img/145893317_2818597528412760_572372165648653839_n.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Николета Димитрова</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                                <li>Маникюр</li>
                                <li>Педикюр</li>
                                <li>Масажи</li>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="card mb-3" style={{ maxWidth: '740px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="img/88151777_2544444085828107_4459583986477301760_n.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Десислава Бекирска</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <li>Дневен грим</li>
                                <li>Вечерен грим</li>
                                <li>Курсове</li>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card mb-3" style={{ maxWidth: '740px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="img/324889858_1849220148773526_2276483844110653565_n.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Анна Карастоянова</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <li>Микропигментация на  вежди</li>
                                <li>Микропигментация на  устни</li>
                                <li>Микропигментация на очна линия</li>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

