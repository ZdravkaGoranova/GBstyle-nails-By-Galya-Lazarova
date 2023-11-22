export default function Contacts() {


    return (
        <>
            <div class="row form-row align-items-center">
                <h1 class="mb-2 text-center animate" data-toggle="animation" data-animation="fadeUp" data-animation-order="1" data-animation-trigger="load">
                    Beauty Salon -by Galya Lazarova
                </h1>
                <div className="card mb-3" style={{ opacity: " 0.85" }} >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="img/20231120_122720.jpg" className=" img-fluid w-150 " alt="..."
                                style={{ opacity: "4.4" }} />
                        </div>
                        <div className="col-md-8" >
                            <div className="card-body" >

                                {/* <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U" className="card-link mb-1">
                                    <img src="img/viber_image_2023-04-26_14-54-26-129.jpg" width="140" height="120" alt="..."
                                        style={{ position: "absolute", left: "70%", marginTop: "-35px", opacity: "4.4", zIndex: "-1" }} /> </a> */}
                                <h4 className="mb-1"> Beauty Salon -by Galya Lazarova</h4>
                                <p className="card-text">
                                    <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U" className="card-link mb-1">
                                        <img className="align-right" src="img/viber_image_2023-04-26_14-54-26-129.jpg" width="140" height="120" alt="..."
                                            style={{ opacity: "4.4", }} /> </a>
                                    Здравейте скъпи клиенти,  Каним Ви да се насладите на незабравими релаксиращи и разкрасяващи процедури специално за Вас. Очакваме Ви, екипът на GBstyle-nails By Galya Lazarova.
                                </p>

                                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                    Салон GBstyle предлага  <strong>професионални курсове</strong> по маникюр, педикюр и ноктопластика.

                                </div>


                                <div className="alert alert-secondary" role="alert">
                                    Може да се свържете с нас за цени и услуги на един от следните канали, удобни  за Вас!
                                </div>

                                <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%9C%D0%B0%D1%80%D0%B8%D1%86%D0%B0%E2%80%9C+11,+1505+%D0%9E%D0%B1%D0%BE%D1%80%D0%B8%D1%89%D0%B5,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6976075,23.3512453,3a,75y,350.11h,90t/data=!3m6!1e1!3m4!1sZAUzkWLSwAdjcrsih4w1aw!2e0!7i16384!8i8192!4m7!3m6!1s0x40aa85846a7effd7:0xbc9ddac52752b2d4!8m2!3d42.6977501!4d23.3511803!10e5!16s%2Fg%2F11bw43hvfd?entry=ttu"
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
                                        <a className="nav-link"
                                            href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%9C%D0%B0%D1%80%D0%B8%D1%86%D0%B0%E2%80%9C+11,+1505+%D0%9E%D0%B1%D0%BE%D1%80%D0%B8%D1%89%D0%B5,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6976075,23.3512453,3a,75y,350.11h,90t/data=!3m6!1e1!3m4!1sZAUzkWLSwAdjcrsih4w1aw!2e0!7i16384!8i8192!4m7!3m6!1s0x40aa85846a7effd7:0xbc9ddac52752b2d4!8m2!3d42.6977501!4d23.3511803!10e5!16s%2Fg%2F11bw43hvfd?entry=ttu">
                                            <img className="align-left" src="img/marker.png" width="30" height="30" alt="..." /> гр.София кв.Оборище, ул.Марица №11</a></li>

                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}