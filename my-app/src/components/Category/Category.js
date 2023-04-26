
export default function Category() {


    return (
        <>
            <div className="row row-cols-1 row-cols-md-5 g-4  " style={{ marginTop: "1px", position: "absolute", left: "10%", }}>
            <figure className="text-center">
                    <blockquote className="blockquote">
                        <p>GBstyle-nails By Galya Lazarova</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                    Category
                    </figcaption>
                </figure>
                <div className="card" style={{ width: "25rem" }} >
                    <img src="img/viber_image_2023-04-21_17-31-48-863.jpg" className="card-img-top" alt="..." style={{ marginTop: "20px" }} />
                    <div className="card-body">
                        <h5 className="card-title">Професионални курсове</h5>

                        <figcaption class="blockquote-footer" style={{ marginTop: "20px" }}>
                            <li> Маникюр</li>
                            <li>Педикюри</li>
                            <li>Hоктопластика</li>
                        </figcaption>

                        <a href="/callery" className="btn btn-outline-dark">More</a>
                    </div>
                </div>
                <div className="card" style={{ width: "25rem" }} >
                    <img src="img/viber_image_2023-04-21_17-53-59-167.jpg" className="card-img-top" alt="..." style={{ marginTop: "20px" }} />
                    <div className="card-body">
                        <h5 className="card-title">Грижа за ноктите</h5>

                        <figcaption class="blockquote-footer" style={{ marginTop: "20px" }}>
                            <li> Маникюр</li>
                            <li>Педикюри</li>
                            <li>Hоктопластика</li>
                        </figcaption>

                        <a href="/callery" className="btn btn-outline-dark">More</a>
                      
                    </div>
                </div>

                <div className="card" style={{ width: "25rem" }}>
                    <img src="img/287318034_3173677216238121_3876630277965791557_n.jpg" className="card-img-top" alt="..." style={{ marginTop: "20px" }} />
                    <div className="card-body">
                        <h5 className="card-title">Грижа за лицето</h5>
                        <figcaption class="blockquote-footer" style={{ marginTop: "20px" }}>
                            <li> HYDRA BEATY терапия</li>
                            <li>диамантено дермаабразио</li>
                            <li>BB Glow терапия</li>
                            <li>микронидлинг</li>

                            {/* </>  HYDRA BEATY терапия, диамантено дермаабразио,  BB Glow терапия и микронидлинг */}
                        </figcaption>
                        <a href="/callery" className="btn btn-outline-dark">More</a>
                    </div>
                </div>

                <div className="card" style={{ width: "25rem" }}>
                    <img src="img/89376124_2554953618110487_1109544576890175488_n.jpg" className="card-img-top" alt="..." style={{ marginTop: "20px" }} />
                    <div className="card-body">
                        <h5 className="card-title">Професионален грим</h5>
                        <figcaption class="blockquote-footer" style={{ marginTop: "20px" }}>
                            <li> Ежедневен</li>
                            <li>Вечерен</li>
                            <li>Официален</li>
                            <li>Грим за камера</li>
                            <li>Сценичен</li>
                            <li>Уроци по самогримиране</li>
                            <li>Курсове по грим</li>
                        </figcaption>
                        <a href="/callery" className="btn btn-outline-dark">More</a>
                    </div>
                </div>
                <div className="card" style={{ width: "25rem" }}>
                    <img src="img/viber_image_2023-04-26_14-00-56-118.jpg" className="card-img-top" alt="..." style={{ marginTop: "20px" }} />
                    <div className="card-body">
                        <h5 className="card-title">Масажи</h5>
                        <figcaption class="blockquote-footer" style={{ marginTop: "20px" }}>
                            <li> Калсически</li>
                            <li>Силов</li>
                            <li>Възстановителен</li>
                            <li>Антицелулитен масаж с вендузи</li>
                        </figcaption>
                        <a href="/callery" className="btn btn-outline-dark">More</a>
                    </div>
                </div>
                <div className="card" style={{ width: "25rem" }}>
                    <img src="img/324733064_708166377581789_3960976656682610931_n.jpg" className="card-img-top" alt="..." style={{ marginTop: "20px" }} />
                    <div className="card-body">
                        <h5 className="card-title">Микропигментация </h5>
                        <figcaption class="blockquote-footer" style={{ marginTop: "20px" }}>
                            <li> Устни</li>
                            <li>Вежди</li>
                            <li>Очна линия</li>
                        </figcaption>
                        <a href="/callery" className="btn btn-outline-dark">More</a>
                    </div>
                </div>
                <div className="card" style={{ width: "25rem" }}>
                    <img src="img/viber_image_2023-04-26_13-54-21-767.jpg" className="card-img-top" alt="..." style={{ marginTop: "20px" }} />
                    <div className="card-body">
                        <h5 className="card-title">Ламиниране на вежди и мигли </h5>
                        
                        <a href="/callery" className="btn btn-outline-dark">More</a>
                    </div>
                </div>


                <div className="card" style={{ width: "25rem" }}>
                    <img src="img/viber_image_2023-04-26_13-56-38-946.jpg" className="card-img-top" alt="..." style={{ marginTop: "20px" }} />
                    <div className="card-body">
                        <h5 className="card-title">Поставяне на кератинови кичури</h5>
                       
                        <a href="/callery" className="btn btn-outline-dark">More</a>
                    </div>
                </div>

            </div>


        </>

    )
}