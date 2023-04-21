
import '../Home/home.css'

import React, { useContext } from "react";

export default function AboutUs() {


    return (
        <>
     
            <div className="card position-absolute top-80 start-0" style={{ width: '35em' }} >
                <img src="img/viber_image_2023-04-21_13-46-51-941.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="mb-1">Welcome</p>
                    <h5 className="mb-1">GBstyle-nails By Galya Lazarova</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <img src="img/phone.png" width="20" height="20" alt="..." />   088 777 0818</li>
                    <li className="list-group-item">
                        <img src="img/new-post.png" width="20" height="20" alt="..." /> lazarova.galq@gmail.com</li>
                    <li className="list-group-item">
                        <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%9A%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0%E2%80%9C+6,+1505+%D0%9E%D0%B1%D0%BE%D1%80%D0%B8%D1%89%D0%B5,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6962689,23.3514059,17z/data=!3m1!4b1!4m6!3m5!1s0x40aa85859da8b2fb:0xe34993d764e67e51!8m2!3d42.6962689!4d23.3539808!16s%2Fg%2F11c5mm3nm9#:~:text=https%3A//goo.gl/maps/oPYsbC7jyYgnPNsC9"
                            className="card-link"><img src="img/marker.png" width="20" height="20" alt="..." />  Кв.Оборище,ул.Козница 6, Sofia, Bulgaria </a></li>

                </ul>
                <div className="card-body">
                    <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%9A%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0%E2%80%9C+6,+1505+%D0%9E%D0%B1%D0%BE%D1%80%D0%B8%D1%89%D0%B5,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6962689,23.3514059,17z/data=!3m1!4b1!4m6!3m5!1s0x40aa85859da8b2fb:0xe34993d764e67e51!8m2!3d42.6962689!4d23.3539808!16s%2Fg%2F11c5mm3nm9#:~:text=https%3A//goo.gl/maps/oPYsbC7jyYgnPNsC9"
                        className="card-link"><img src="img/marker.png" width="30" height="30" alt="..." /> </a>
                    <a href="https://instagram.com/gb_style_by_galya_lazarova?igshid=YmMyMTA2M2Y=" className="card-link"><img src="img/instagram-new.png" width="40" height="40" alt="..." /></a>
                    <a href="https://www.facebook.com/GBStylebyGalyalazarova/photos" className="card-link"><img src="img/facebook-circled.png" width="30" height="30" alt="..." /> </a>
                    <a href="https://gbstyle.customer.fitsys.co/reservations/confirm?date=2022-02-25T11%3A45%3A00%2B02%3A00&services=82072&site=1" className="card-link"><img src="img/event-accepted.png" width="30" height="30" alt="..." /> </a>
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
                            <img src="img/147183120_2821120021493844_8013331848463521136_n.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Николета Димитрова</h5>
                               
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
                            <img src="img/146983257_2820477931558053_5692738788680944504_n.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Десислава Бекирска</h5>
                            
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

