
import '../../css/site.css'
import '../Home/home.css'
import React, { useContext } from "react";



export default function Home() {


    return (
        <>

            <div class="container">

                <div class="row justify-content-center">
                    <div class="col-12 col-md-8">

                        <h1 class="mb-2 text-center animate" data-toggle="animation" data-animation="fadeUp" data-animation-order="1" data-animation-trigger="load">
                            Beauty Salon -by Galya Lazarova
                        </h1>


                        <p class="mb-6 text-center  text-muted animate" data-toggle="animation" data-animation="fadeUp" data-animation-order="2" data-animation-trigger="load">
                            Здравейте скъпи клиенти,  Каним Ви да се насладите на незабравими релаксиращи и разкрасяващи процедури специално за Вас. Очакваме Ви, екипът на GBstyle-by Galya Lazarova.
                        </p>

                        {/* <h5 class="mb-2 text-center animate " data-toggle="animation" data-animation="fadeUp" data-animation-order="1" data-animation-trigger="load">
                            Здравейте скъпи клиенти,  Каним Ви да се насладите на незабравими релаксиращи и разкрасяващи процедури специално за Вас. Очакваме Ви, екипът на GBstyle-by Galya Lazarova.

                        </h5> */}
                    </div>

                </div>
                <div class="row form-row align-items-center">
                    <div class="col-3">

                        <div class="img-square">
                            <img src="img/20231120_124826.jpg" alt="..." class="img-cover" />
                        </div>

                    </div>
                    <div class="col-6">
                        <div class="row form-row align-items-end mb-2">
                            <div class="col-7">

                                <div class="img-square">
                                    <img src="img/20231120_122809.jpg" alt="..." class="img-cover" />
                                </div>

                            </div>
                            <div class="col-5">

                                <div class="img-square">
                                    <img src="img/20231120_124826.jpg" alt="..." class="img-cover" />
                                </div>

                            </div>
                        </div>
                        <div class="row form-row">
                            <div class="col-5">

                                <div class="img-square">
                                    <img src="img/20231120_130609.jpg" alt="..." class="img-cover" />
                                </div>

                            </div>
                            <div class="col-7">

                                <div class="img-square">
                                    <img src="img/20231120_122720.jpg" alt="..." class="img-cover" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-3">

                        <div class="img-square">
                            <img src="img/20231120_125711.jpg" alt="..." class="img-cover" />
                        </div>

                    </div>

                    <div className="alert alert-warning alert-dismissible fade show" style={{ opacity: " 0.85", border: "0.1em solid rgb(11, 92, 11) ", textAlign: 'center', marginTop: '20px' }} role="alert">

                        <a className="nav-link" href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U">
                            💫 <b>ЗАПАЗИ ЧАС ЗА ПОСЕЩЕНИЕ💫</b></a>
                    </div>
                    <div className="alert alert-light alert-dismissible fade show" role="alert">

                        Нашият сайт използва "бисквитки" за по-оптимално пазаруване.<a href="/policy" className="alert-link"> Научи повече  </a>
                        <button type="button" className="btn btn-dark" data-bs-dismiss="alert">Приеми</button>

                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
                <a href="https://www.facebook.com/GBStylebyGalyalazarova/photos">
                    <div class="col">
                        <div class="card radius-10 border-start border-0 border-3 border-info">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                        
                                        <h4 class="my-1 text-info">Харесай ни</h4>
                                     
                                    </div>
                                    <div class="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></div>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                    <a href="https://instagram.com/gb_style_by_galya_lazarova?igshid=YmMyMTA2M2Y=">
                    <div class="col">
                        <div class="card radius-10 border-start border-0 border-3 border-danger">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                     
                                        <h4 class="my-1 text-danger">Последвай ни</h4>
                                       
                                    </div>
                                    <div class="widgets-icons-2 rounded-circle bg-gradient-bloody text-white ms-auto "><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                    <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%9C%D0%B0%D1%80%D0%B8%D1%86%D0%B0%E2%80%9C+11,+1505+%D0%9E%D0%B1%D0%BE%D1%80%D0%B8%D1%89%D0%B5,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6976075,23.3512453,3a,75y,350.11h,90t/data=!3m6!1e1!3m4!1sZAUzkWLSwAdjcrsih4w1aw!2e0!7i16384!8i8192!4m7!3m6!1s0x40aa85846a7effd7:0xbc9ddac52752b2d4!8m2!3d42.6977501!4d23.3511803!10e5!16s%2Fg%2F11bw43hvfd?entry=ttu"
       >
                    <div class="col">
                        <div class="card radius-10 border-start border-0 border-3 border-success">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                        
                                        <h4 class="my-1 text-success">Намери ни</h4>
                                      
                                    </div>
                                    <div class="widgets-icons-2 rounded-circle bg-gradient-ohhappiness text-white ms-auto"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"
                                    ><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                    <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U">
                    <div class="col">
                        <div class="card radius-10 border-start border-0 border-3 border-warning">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                      
                                        <h4 class="my-1 text-warning">Запази час </h4>
                                       
                                    </div>
                                    <div class="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>

            {/* <img src="img/20231120_122720.jpg" class="d-block w-100" alt="..." />
                        <img src="img/20231120_122251.jpg.jpg" class="d-block w-100" alt="..." />
                        <img src="img/20231120_122809.jpg" class="d-block w-100" alt="..." /> */}


            {/* <div id="carouselExampleDark" class="carousel carousel-dark slide" >
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src="img/20231120_122720.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="img/20231120_122251.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/20231120_122809.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div> */}

            {/* <div className="alert alert-warning alert-dismissible fade show" role="alert">
                Нашият сайт използва "бисквитки" за по-оптимално пазаруване. <a href="/policy" className="alert-link"> Научи повече </a>
               
                <button type="button" className="btn btn-light">Приеми</button>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div> */}



            <section class="container">
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
                <div className="card mb-3" style={{ opacity: " 0.85" }} >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="img/viber_image_2023-04-21_17-31-48-863.jpg" className=" img-fluid w-150 " alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Професионални курсове </h5>
                                <p className="card-text">Ако желаете да се преквалифицирате и да станете профионалист, в нова или любима от много време професия може да се възползвате, като се запишете за един от следните курсове по:</p>
                                <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U" className="card-link mb-1">
                                    <img className="align-right" src="img/viber_image_2023-04-26_14-54-26-129.jpg" width="140" height="120" alt="..."
                                        style={{ opacity: "4.4", zIndex: "-1" }} /> </a>
                                <li>Маникюр</li>
                                <li>Педикюр</li>
                                <li>Ноктопластика</li>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3" style={{ opacity: " 0.85" }} >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="img/3.png" className=" img-fluid w-150 " alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">

                                <a className="nav-link" href="https://gayanails.com/"><h5 className="card-title">Gaya Professional </h5></a>

                                <p className="card-text">GBstyle-nails By Galya Lazarova  работи с професионални високо качествени немски  продукти, които са  100% веган и с формула премахнала 8 неподходящи съставки.</p>
                                <p><a href="https://gayanails.com/" className="card-link"><img className="align-right" src="img/viber_image_2022-11-02_22-06-15-886.jpg" width="260" height="150" alt="..." /> </a>

                                    В продуктите UV/LED продукти няма:
                                    <li>toluene</li>
                                    <li>formaldehyde</li>
                                    <li>dibutyl phthalate (DBP)</li>
                                    <li>formaldehyde resin</li>
                                    <li>parabens</li>
                                    <li>xylene</li>
                                    <li>camphor</li>
                                    <li>colophane resin</li>
                                    <small className="text-body-secondary">Висококачествени продукти за маникюр, педикюр и ноктопластика</small>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" style={{ opacity: " 0.85" }} >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="img/1.png" className=" img-fluid w-150 " alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Здравейте дами нещо ново за Вас </h5>
                                <p className="card-text">💫- 40%  DISCOUNT на всички гел лакове ⭐️с  промо код: GAYA40✨</p>


                                <p className="card-text">  До края на месец Ноември имате възможност да поръчате продукти с отстъпка като използвате промо код: GAYA40 ✨

                                </p>
                                <a href="https://gayanails.com/" className="card-link">🌸 https://gayanails.com 🌸 </a>
                                <a className="nav-link" href="https://gayanails.com/"><p className="card-title"><small className="text-body-secondary">Висококачествени продукти за маникюр, педикюр и ноктопластика</small> </p></a>
                                <a href="https://gayanails.com/" className="card-link"><img className="align-left" src="img/viber_image_2022-11-02_22-06-15-886.jpg" width="260" height="150" alt="..." /> </a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" style={{ opacity: " 0.85" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="img/1683185331612864.jpg" className=" img-fluid w-150 " alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">GAYA– в хармония с природата </h5>
                                <p className="card-text"> Създадени от маникюристи за маникюристи, в продуктите на Gaya Professional са вложени много старание и любов към професията. Наситени цветове, дълготраен блясък, безкомпромисно качество в хармония с природата и човека, Гайа цели да вдъхне страст във маникюрното изживяване.
                                </p>
                                <p>
                                    Безопасността е в основата – нашите лакове за нокти са направени според най-строгите европейски разпоредби и не са тествани върху животни. Подбрани ефективни съставки за лак за нокти, които отговарят на най-високите стандарти и най-важното, които ни позволяват постоянно да доставяме безупречeн цвят, изключително устойчив и формулa за качество, които очаквате.
                                </p>

                                <p>
                                    <a href="https://gayanails.com/" className="card-link">🌸 https://gayanails.com 🌸 </a>
                                    <a className="nav-link" href="https://gayanails.com/"><p className="card-title"><small className="text-body-secondary">Висококачествени продукти за маникюр, педикюр и ноктопластика</small> </p></a>
                                    {/* <a href="https://gayanails.com/" className="card-link"><img src="img/viber_image_2022-11-02_22-06-15-886.jpg"
                                    style={{ marginTop: "13px", position: "absolute", left: "35%", opacity: "4" }} width="300" height="200" alt="..." /> </a> */}

                                    <a href="https://gayanails.com/" className="card-link"><img className="align-left" src="img/viber_image_2022-11-02_22-06-15-886.jpg" width="260" height="150" alt="..." /> </a>

                                </p>



                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
                <a href="https://www.facebook.com/GBStylebyGalyalazarova/photos">
                    <div class="col">
                        <div class="card radius-10 border-start border-0 border-3 border-info">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                        
                                        <h4 class="my-1 text-info">Харесай ни</h4>
                                     
                                    </div>
                                    <div class="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></div>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                    <a href="https://instagram.com/gb_style_by_galya_lazarova?igshid=YmMyMTA2M2Y=">
                    <div class="col">
                        <div class="card radius-10 border-start border-0 border-3 border-danger">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                     
                                        <h4 class="my-1 text-danger">Последвай ни</h4>
                                       
                                    </div>
                                    <div class="widgets-icons-2 rounded-circle bg-gradient-bloody text-white ms-auto "><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                    <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%9C%D0%B0%D1%80%D0%B8%D1%86%D0%B0%E2%80%9C+11,+1505+%D0%9E%D0%B1%D0%BE%D1%80%D0%B8%D1%89%D0%B5,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6976075,23.3512453,3a,75y,350.11h,90t/data=!3m6!1e1!3m4!1sZAUzkWLSwAdjcrsih4w1aw!2e0!7i16384!8i8192!4m7!3m6!1s0x40aa85846a7effd7:0xbc9ddac52752b2d4!8m2!3d42.6977501!4d23.3511803!10e5!16s%2Fg%2F11bw43hvfd?entry=ttu"
       >
                    <div class="col">
                        <div class="card radius-10 border-start border-0 border-3 border-success">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                        
                                        <h4 class="my-1 text-success">Намери ни</h4>
                                      
                                    </div>
                                    <div class="widgets-icons-2 rounded-circle bg-gradient-ohhappiness text-white ms-auto"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"
                                    ><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                    <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U">
                    <div class="col">
                        <div class="card radius-10 border-start border-0 border-3 border-warning">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                      
                                        <h4 class="my-1 text-warning">Запази час </h4>
                                       
                                    </div>
                                    <div class="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>


            
        </>
    )
}

{/* <div id="carouselExampleDark" className="carousel carousel-dark slide" style={{ marginTop: "60px", position: "absolute", left: "1%", opacity: " 0.85" }}>

    <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="1000">

            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="img/viber_image_2023-04-21_13-40-32-793.jpg" className=" img-fluid w-150 " alt="..." style={{ opacity: "4" }} />
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
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="img/1683185331612864.jpg" className=" img-fluid w-150 " alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Здравейте дами нещо ново за Вас </h5>
                            <p className="card-text"> 🌸ПРОМО ЦЕНА🌸с промо код: GAYA20 ✨</p>
                            <p className="card-text">  До края на месец Aприл имате възможност да поръчате продукти с отстъпка като използвате промо код: GAYA20 ✨</p>

                            <a href="https://gayanails.com/" className="card-link">🌸 https://gayanails.com 🌸 </a>
                            <a href="https://gayanails.com/" className="card-link"><img src="img/viber_image_2022-11-02_22-06-15-886.jpg" width="200" height="100" alt="..." /> </a>
                            <p><a href="" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Dark link</a></p>
                            <a className="nav-link" href="https://gayanails.com/"><p className="card-title"><small className="text-body-secondary">Висококачествени продукти за маникюр, педикюр и ноктопластика</small> </p></a>


                        </div>
                    </div>
                </div>
            </div>
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

</div> */}