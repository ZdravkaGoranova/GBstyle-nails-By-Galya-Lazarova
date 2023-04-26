export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">

            <div className="container-fluid">
                {/* <img src="img/viber_image_2023.png" className="card-img img-fluid  " alt="..." style={{ width: "250px", height: "120px" }}/> */}


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <p>GBstyle-nails By Galya LazarovaGBstyle-nails By Galya Lazarova</p>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/callery">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/category">Category</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/aboutUs">About Us</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" href="/courses">Сourses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/beautySalon">Beauty Salon</a>
                        </li>
                        <li className="nav-item">

                            <a class="nav-link" href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U">💫Запази час за посещение💫 </a></li>

                    </ul>

                    <span className="navbar-text nav-link active">


                        <a href="https://instagram.com/gb_style_by_galya_lazarova?igshid=YmMyMTA2M2Y=" className="card-link"><img src="img/instagram-new.png" width="30" height="30" alt="..." /></a>

                        <a href="https://www.facebook.com/GBStylebyGalyalazarova/photos" className="card-link"><img src="img/facebook-circled.png" width="30" height="30" alt="..." /> </a>

                        <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U" className="card-link"><img src="img/event-accepted.png" width="30" height="30" alt="..." /> </a>


                        <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%9A%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0%E2%80%9C+6,+1505+%D0%9E%D0%B1%D0%BE%D1%80%D0%B8%D1%89%D0%B5,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6962689,23.3514059,17z/data=!3m1!4b1!4m6!3m5!1s0x40aa85859da8b2fb:0xe34993d764e67e51!8m2!3d42.6962689!4d23.3539808!16s%2Fg%2F11c5mm3nm9#:~:text=https%3A//goo.gl/maps/oPYsbC7jyYgnPNsC9"
                            className="card-link"><img src="img/marker.png" width="30" height="30" alt="..." /> </a>

                    </span>

                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>

    )
}


