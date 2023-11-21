import "../Footer/footer.css"
import React, { useEffect } from 'react';
export default function Footer() {

    useEffect(() => {
        function handleScroll() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollPosition = window.scrollY;

            // Показва футъра само когато стигнете до края на страницата
            if (scrollPosition + windowHeight >= documentHeight) {
                document.querySelector('footer').style.display = 'block';
            } else {
                document.querySelector('footer').style.display = 'none';
            }
        }

        // Слуша събитието на прокрутката на прозореца
        window.addEventListener('scroll', handleScroll);

        return () => {
            // Премахва слушателя при размонтиране на компонентата
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>

            <footer class="footer_area section_padding_130_0">
                <div class="container">
                    <div class="row">

                        <div class="col-12 col-sm-6 col-lg-3">
                            <div class="single-footer-widget section_padding_0_130">

                                <div class="footer-logo mb-3"></div>
                                <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U"
                                    className="card-link mb-1">
                                    <img src="img/viber_image_2023.png" width="170" height="70" alt="..." style={{ marginTop: "-9px", marginRight: "6px" }} /> </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation" style={{ marginTop: "-15px", marginRight: "6px" }}>
                                    MENU
                                    {/* <p class="mb-0 ">
                                        <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%9A%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0%E2%80%9C+6,+1505+%D0%9E%D0%B1%D0%BE%D1%80%D0%B8%D1%89%D0%B5,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6962689,23.3514059,17z/data=!3m1!4b1!4m6!3m5!1s0x40aa85859da8b2fb:0xe34993d764e67e51!8m2!3d42.6962689!4d23.3539808!16s%2Fg%2F11c5mm3nm9#:~:text=https%3A//goo.gl/maps/oPYsbC7jyYgnPNsC9"
                                            className="card-link"><img src="img/marker.png" width="20" height="20" alt="..." style={{ marginRight: "10px" }} /></a>
                                        <a href="https://instagram.com/gb_style_by_galya_lazarova?igshid=YmMyMTA2M2Y=" className="card-link">
                                            <img src="img/instagram-new.png" width="20" height="20" alt="instagram-new.png" style={{ marginRight: "10px" }} /></a> <a href="https://www.facebook.com/GBStylebyGalyalazarova/photos"
                                                className="card-link"><img src="img/facebook-circled.png" width="20" height="20" alt="facebook-circled.png" style={{ marginRight: "10px" }} /> </a>
                                        <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U"
                                            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"><img src="img/event-accepted.png" width="20" height="20" alt="gbstyle.customer" /> Запази час  </a>

                                    </p> */}
                                </button>

                                <div class="copywrite-text mb-5 mt-3">
                                    <p class="mb-0"><a href="https://github.com/ZdravkaGoranova"
                                        className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Web design by Zdravka Goranova</a></p>
                                    {/* <p class="mb-0">
                                        <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%9A%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0%E2%80%9C+6,+1505+%D0%9E%D0%B1%D0%BE%D1%80%D0%B8%D1%89%D0%B5,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6962689,23.3514059,17z/data=!3m1!4b1!4m6!3m5!1s0x40aa85859da8b2fb:0xe34993d764e67e51!8m2!3d42.6962689!4d23.3539808!16s%2Fg%2F11c5mm3nm9#:~:text=https%3A//goo.gl/maps/oPYsbC7jyYgnPNsC9"
                                        className="card-link"><img src="img/marker.png" width="20" height="20" alt="..." style={{ marginRight: "10px" }} /></a>
                                    <a href="https://instagram.com/gb_style_by_galya_lazarova?igshid=YmMyMTA2M2Y=" className="card-link">
                                        <img src="img/instagram-new.png" width="20" height="20" alt="instagram-new.png" style={{ marginRight: "10px" }} /></a> <a href="https://www.facebook.com/GBStylebyGalyalazarova/photos"
                                            className="card-link"><img src="img/facebook-circled.png" width="20" height="20" alt="facebook-circled.png" style={{ marginRight: "10px" }} /> </a>
                                    <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U"
                                        className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"><img src="img/event-accepted.png" width="20" height="20" alt="gbstyle.customer" /> Запази час  </a>

                                    </p> */}
                                </div>

                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-lg">
                            <div class="single-footer-widget section_padding_0_130">

                                <h5 class="widget-title"></h5>

                                <div class="footer_menu">
                                    <ul>
                                        <li><a href="/" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                                        <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%9A%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0%E2%80%9C+6,+1505+%D0%9E%D0%B1%D0%BE%D1%80%D0%B8%D1%89%D0%B5,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6962689,23.3514059,17z/data=!3m1!4b1!4m6!3m5!1s0x40aa85859da8b2fb:0xe34993d764e67e51!8m2!3d42.6962689!4d23.3539808!16s%2Fg%2F11c5mm3nm9#:~:text=https%3A//goo.gl/maps/oPYsbC7jyYgnPNsC9"
                                            className="card-link"><img src="img/marker.png" width="20" height="20" alt="..." style={{ marginRight: "10px" }} /></a>
                                        <a href="https://instagram.com/gb_style_by_galya_lazarova?igshid=YmMyMTA2M2Y=" className="card-link">
                                            <img src="img/instagram-new.png" width="20" height="20" alt="instagram-new.png" style={{ marginRight: "10px" }} /></a> <a href="https://www.facebook.com/GBStylebyGalyalazarova/photos"
                                                className="card-link"><img src="img/facebook-circled.png" width="20" height="20" alt="facebook-circled.png" style={{ marginRight: "10px" }} /> </a>
                                        <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U"
                                            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"><img src="img/event-accepted.png" width="20" height="20" alt="gbstyle.customer" /> Запази час  </a>

                                        </a></li>
                                        <li><a href="https://github.com/ZdravkaGoranova"
                                            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Web design by Zdravka Goranova</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-lg">
                            <div class="single-footer-widget section_padding_0_130">

                                <h5 class="widget-title"></h5>

                                <div class="footer_menu">

                                    <ul>
                                        <li><a href="/" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">© Copyright GBstyle, 2023</a></li>
                                        <li><a href="/" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">All rights reserved !</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-lg">
                            <div class="single-footer-widget section_padding_0_130">

                                <h5 class="widget-title"></h5>

                                <div class="footer_menu">
                                    <ul>
                                        <li><a href="/policy" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Общи условия</a></li>
                                        <li><a href="/policy" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Политика за поверителност</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </footer>
        </>



    )
}

<footer >

    {/* <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U" className="card-link mb-1">
    <img src="img/viber_image_2023-04-26_14-54-26-129.jpg" width="80" height="80" alt="..."
        style={{ marginTop: "-3px", position: "absolute", right: "77%", opacity: " 0.8" }} /> </a> */}

    <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U"
        className="card-link mb-1">
        <img src="img/viber_image_2023.png" width="170" height="70" alt="..." style={{ marginTop: "-9px", marginRight: "6px" }} /> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation" style={{ marginTop: "-15px", marginRight: "6px" }}>
        MENU
    </button>
    <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%9A%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0%E2%80%9C+6,+1505+%D0%9E%D0%B1%D0%BE%D1%80%D0%B8%D1%89%D0%B5,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6962689,23.3514059,17z/data=!3m1!4b1!4m6!3m5!1s0x40aa85859da8b2fb:0xe34993d764e67e51!8m2!3d42.6962689!4d23.3539808!16s%2Fg%2F11c5mm3nm9#:~:text=https%3A//goo.gl/maps/oPYsbC7jyYgnPNsC9"
        className="card-link"><img src="img/marker.png" width="20" height="20" alt="..." style={{ marginRight: "10px" }} /></a>
    <a href="https://instagram.com/gb_style_by_galya_lazarova?igshid=YmMyMTA2M2Y=" className="card-link">
        <img src="img/instagram-new.png" width="20" height="20" alt="instagram-new.png" style={{ marginRight: "10px" }} /></a> <a href="https://www.facebook.com/GBStylebyGalyalazarova/photos"
            className="card-link"><img src="img/facebook-circled.png" width="20" height="20" alt="facebook-circled.png" style={{ marginRight: "10px" }} /> </a>
    <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U"
        className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"><img src="img/event-accepted.png" width="20" height="20" alt="gbstyle.customer" /> Запази час  </a>

    <article >
        <ul>
            <li><a href="/" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">© Copyright GBstyle, 2023</a></li>
            <li><a href="/" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">All rights reserved !</a>
            </li>
        </ul>
    </article>

    <article>
        <ul>
            <li><a href="/policy" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Общи условия</a></li>
            <li><a href="/policy" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Политика за поверителност</a></li>
        </ul>
    </article >
    <article >
        <ul>
            <li><a href="/" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Контакти</a></li>
            <li><a href="https://github.com/ZdravkaGoranova"
                className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Web design by Zdravka Goranova</a></li>
        </ul>

    </article >


</footer >
