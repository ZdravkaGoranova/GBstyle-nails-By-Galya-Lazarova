
import '../../css/site.css'
import '../Home/home.css'
import React, { useContext } from "react";

export default function Home() {


    return (
        <>
            <h2 className="text-center fs-1 fst-italic" style={{ marginTop: "30px"}}>GBstyle-nails By Galya Lazarova</h2>
            {/* <div className="alert alert-warning alert-dismissible fade show" role="alert">
                Нашият сайт използва "бисквитки" за по-оптимално пазаруване. <a href="/policy" className="alert-link"> Научи повече </a>
               
                <button type="button" className="btn btn-light">Приеми</button>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div> */}
            <div className="alert alert-light alert-dismissible fade show" role="alert">

                Нашият сайт използва "бисквитки" за по-оптимално пазаруване.<a href="/policy" className="alert-link"> Научи повече  </a>
                <button type="button" className="btn btn-dark">Приеми</button>

                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

            {/* <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" 
            style={{ marginTop: "60px", position: "absolute", left: "1%", opacity: " 0.85" }}> */}
                <div id="carouselExampleDark" className="carousel carousel-dark slide" style={{ marginTop: "60px", position: "absolute", left: "1%", opacity: " 0.85" }}>

                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">

                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="img/viber_image_2023-04-21_13-40-32-793.jpg" className=" img-fluid w-150 " alt="..." style={{opacity: "4" }}/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">

                                        <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U" className="card-link mb-1"><img src="img/viber_image_2023-04-26_14-54-26-129.jpg" width="200" height="200" alt="..."
                                            style={{ marginTop: "-40px", position: "absolute", left: "85%", opacity: "4" }} /> </a>
                                        <h5 className="mb-1">GBstyle-nails By Galya Lazarova</h5>
                                        <p className="card-text">Здравейте скъпи клиенти, <br /> Каним Ви да се насладите на незабравими релаксиращи <br />
                                            и разкрасяващи процедури специално за Вас.<br /> Очакваме Ви, екипът на GBstyle-nails By Galya Lazarova. </p>

                                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                            Салон GBstyle предлага  <strong>професионални курсове</strong> по маникюр, педикюр и ноктопластика.

                                        </div>


                                        <div className="alert alert-secondary" role="alert">
                                            Може да се свържете с нас за цени и услуги на един от следните канали, удобни  за Вас!
                                        </div>

                                        <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%9A%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0%E2%80%9C+6,+1505+%D0%9E%D0%B1%D0%BE%D1%80%D0%B8%D1%89%D0%B5,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6962689,23.3514059,17z/data=!3m1!4b1!4m6!3m5!1s0x40aa85859da8b2fb:0xe34993d764e67e51!8m2!3d42.6962689!4d23.3539808!16s%2Fg%2F11c5mm3nm9#:~:text=https%3A//goo.gl/maps/oPYsbC7jyYgnPNsC9"
                                            className="card-link"><img src="img/marker.png" width="30" height="30" alt="..." /> </a>
                                        <a href="https://instagram.com/gb_style_by_galya_lazarova?igshid=YmMyMTA2M2Y=" className="card-link"><img src="img/instagram-new.png" width="40" height="40" alt="instagram-new.png" /></a>
                                        <a href="https://www.facebook.com/GBStylebyGalyalazarova/photos" className="card-link"><img src="img/facebook-circled.png" width="30" height="30" alt="facebook-circled.png" /> </a>
                                        <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U" className="card-link"><img src="img/event-accepted.png" width="30" height="30" alt="gbstyle.customer" /> </a>



                                        <ul className="list-group list-group-flush" >

                                            <li className="list-group-item">
                                                <a className="nav-link" href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U"><img src="img/event-accepted.png" width="30" height="30" alt="..." /> Запази час за посещение </a></li>
                                            <li className="list-group-item">
                                                <img src="img/phone.png" width="20" height="20" alt="..." />   088 777 0818</li>
                                            <li className="list-group-item">
                                                <img src="img/new-post.png" width="20" height="20" alt="..." /> lazarova.galq@gmail.com</li>
                                            <li className="list-group-item">
                                                <a className="nav-link" href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%9A%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0%E2%80%9C+6,+1505+%D0%9E%D0%B1%D0%BE%D1%80%D0%B8%D1%89%D0%B5,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6962689,23.3514059,17z/data=!3m1!4b1!4m6!3m5!1s0x40aa85859da8b2fb:0xe34993d764e67e51!8m2!3d42.6962689!4d23.3539808!16s%2Fg%2F11c5mm3nm9#:~:text=https%3A//goo.gl/maps/oPYsbC7jyYgnPNsC9">
                                                    <img src="img/marker.png" width="20" height="20" alt="..." /> Кв.Оборище,ул.Козница 6, Sofia, Bulgaria</a></li>

                                        </ul>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">

                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="img/viber_image_2023-04-21_17-31-48-863.jpg" className=" img-fluid w-150 " alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Професионални курсове </h5>
                                        <p className="card-text">Ако желаете да се преквалифицирате и да станете профионалист, в нова или любима от много време професия може да се възползвате, като се запишете за един от следните курсове по:</p>

                                        <li>Маникюр</li>
                                        <li>Педикюр</li>
                                        <li>Ноктопластика</li>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="img/viber_image_2023-04-21_17-41-26-696.jpg" className=" img-fluid w-150 " alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">

                                        <a className="nav-link" href="https://gayanails.com/"><h5 className="card-title">Gaya Professional </h5></a>
                                        <p className="card-text">GBstyle-nails By Galya Lazarova  работи с професионални високо качествени немски  продукти, които са  100% веган и с формула премахнала 8 неподходящи съставки.</p>

                                        В продуктите UV/LED продукти няма:
                                        <li>toluene</li>
                                        <li>formaldehyde</li>
                                        <li>dibutyl phthalate (DBP)</li>
                                        <li>formaldehyde resin</li>
                                        <li>parabens</li>
                                        <li>xylene</li>
                                        <li>camphor</li>
                                        <li>colophane resin</li>

                                        <a href="https://gayanails.com/" className="card-link"><img src="img/viber_image_2022-11-02_22-06-15-886.jpg" width="200" height="100" alt="..." /> </a>
                                        <p className="card-text"><small className="text-body-secondary">Висококачествени продукти за маникюр, педикюр и ноктопластика</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="4000">

                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="img/339562163_613564143613976_5614407385547463861_n.jpg" className=" img-fluid w-150 " alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Здравейте дами нещо ново за Вас </h5>
                                        <p className="card-text">💫⭐️АРОМА СВЕЩИ GAYA ✨в два прекрасни аромата.</p>
                                        <a href="https://gayanails.com/" className="card-link"><img src="img/viber_image_2022-11-02_22-06-15-886.jpg" width="200" height="100" alt="..." /> </a>

                                        <a className="nav-link" href="https://gayanails.com/"><p className="card-title"><small className="text-body-secondary">Висококачествени продукти за маникюр, педикюр и ноктопластика</small> </p></a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">


                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-body">
                    Hello, world! This is a toast message.
                    <div className="mt-2 pt-2 border-top">
                        <button type="button" className="btn btn-primary btn-sm">Take action</button>
                        <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
                    </div>
                </div>
            </div>


            <div aria-live="polite" aria-atomic="true" className="position-relative">
                {/* <!-- Position it: -->
                <!-- - `.toast-container` for spacing between toasts -->
                <!-- - `top-0` & `end-0` to position the toasts in the upper right corner -->
                <!-- - `.p-3` to prevent the toasts from sticking to the edge of the container  --> */}
                <div className="toast-container top-0 end-0 p-3">

                    <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <img src="..." className="rounded me-2" alt="..." />
                            <strong className="me-auto">Bootstrap</strong>
                            <small className="text-body-secondary">just now</small>
                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                            See? Just like this.
                        </div>
                    </div>

                    <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <img src="..." className="rounded me-2" alt="..." />
                            <strong className="me-auto">Bootstrap</strong>
                            <small className="text-body-secondary">2 seconds ago</small>
                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                            Heads up, toasts will stack automatically
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

