
import '../Category/category.css'

export default function Category() {


    return (
        <>
        {/* <section style={{ marginTop: "100px" }}> */}

                {/* 
            <figure className="text-center" style={{ marginTop: "30px", position: "absolute", left: "35%" }}>
                <blockquote className="blockquote">
                    <h2 >GBstyle-nails By Galya Lazarova</h2 >
                </blockquote>
                <figcaption className="blockquote-footer" style={{ marginTop: "10px" }}>
                    Category
                </figcaption>
            </figure> */}


                <h2 className="text-center fs-1 fst-italic" >Nails By Galya Lazarova</h2>
             
                <figure className="text-center" id='aboutUs'>
                <figcaption className="blockquote-footer" style={{ fontSize: "2em" }}>
                Category</figcaption>
            </figure>
                <div className="row row-cols-1 row-cols-md-4 g-4  " style={{ marginTop: "0px", position: "absolute", left: "12%",paddingBottom: "300px"  }}>
                    <div className="card" style={{ width: "24rem", marginRight: "20px" }}>
                        <img src="img/viber_image_2023-04-21_17-31-48-863.jpg" className="card-img-top" alt="..." style={{ marginTop: "20px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Професионални курсове</h5>
                            <a href="/callery" className="btn btn-outline-dark" style={{ float: "right", clear: "right" }}>More</a>
                            <figcaption className="blockquote-footer" style={{ marginTop: "20px" }}>
                                <li> Маникюр</li>
                                <li>Педикюри</li>
                                <li>Hоктопластика</li>
                            </figcaption>


                        </div>
                    </div>
                    <div className="card" style={{ width: "24rem", marginRight: "20px" }} >
                        <img src="img/viber_image_2023-04-21_17-53-59-167.jpg" className="card-img-top" alt="..." style={{ marginTop: "20px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Грижа за ноктите</h5>
                            <a href="/callery" className="btn btn-outline-dark" style={{ float: "right", clear: "right" }}>More</a>
                            <figcaption className="blockquote-footer" style={{ marginTop: "20px" }}>
                                <li> Маникюр</li>
                                <li>Педикюри</li>
                                <li>Hоктопластика</li>
                            </figcaption>

                        </div>
                    </div>

                    <div className="card" style={{ width: "24rem", marginRight: "20px" }}>
                        <img src="img/287318034_3173677216238121_3876630277965791557_n.jpg" className="card-img-top" alt="..." style={{ marginTop: "20px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Грижа за лицето</h5>
                            <a href="/callery" className="btn btn-outline-dark" style={{ float: "right", clear: "right" }}>More</a>
                            <figcaption className="blockquote-footer" style={{ marginTop: "20px" }}>
                                <li> HYDRA BEATY терапия</li>
                                <li>диамантено дермаабразио</li>
                                <li>BB Glow терапия</li>
                                <li>микронидлинг</li>

                                {/* </>  HYDRA BEATY терапия, диамантено дермаабразио,  BB Glow терапия и микронидлинг */}
                            </figcaption>

                        </div>
                    </div>

                    <div className="card" style={{ width: "24rem", marginRight: "20px" }}>
                        <img src="img/89376124_2554953618110487_1109544576890175488_n.jpg" className="card-img-top" alt="..." style={{ marginTop: "20px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Професионален грим</h5>
                            <a href="/callery" className="btn btn-outline-dark" style={{ float: "right", clear: "right" }}>More</a>
                            <figcaption className="blockquote-footer" style={{ marginTop: "20px" }}>
                                <li> Ежедневен</li>
                                <li>Вечерен</li>
                                <li>Официален</li>
                                <li>Грим за камера</li>
                                <li>Сценичен</li>
                                <li>Уроци по самогримиране</li>
                                <li>Курсове по грим</li>
                            </figcaption>

                        </div>
                    </div>
                    <div className="card" style={{ width: "24rem", marginRight: "20px" }}>
                        <img src="img/viber_image_2023-04-26_14-00-56-118.jpg" className="card-img-top" alt="..." style={{ marginTop: "20px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Масажи</h5>
                            <a href="/callery" className="btn btn-outline-dark" style={{ float: "right", clear: "right" }}>More</a>
                            <figcaption className="blockquote-footer" style={{ marginTop: "20px" }}>
                                <li> Калсически</li>
                                <li>Силов</li>
                                <li>Възстановителен</li>
                                <li>Антицелулитен масаж с вендузи</li>
                            </figcaption>

                        </div>
                    </div>

                    <div className="card" style={{ width: "24rem", marginRight: "20px" }}>
                        <img src="img/viber_image_2023-04-26_13-54-21-767.jpg" className="card-img-top" alt="..." style={{ marginTop: "20px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Ламиниране на вежди и мигли </h5>
                            <a href="/callery" className="btn btn-outline-dark" style={{ float: "right", clear: "right" }}>More</a>
                            <figcaption className="blockquote-footer" style={{ marginTop: "20px" }}>

                            </figcaption>
                        </div>
                    </div>
                </div>
            </>

            )
}