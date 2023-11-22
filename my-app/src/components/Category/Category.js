
import '../Category/category.css'

export default function Category() {


    return (
        <>
            <h2 className="text-center fs-1 fst-italic" >Beauty Salon -by Galya Lazarova</h2>

            <figure className="text-center" id='aboutUs'>
                <figcaption className="blockquote-footer" style={{ fontSize: "2em" }}>
                    Category</figcaption>
            </figure>

            <div class="container">
            {/* <div className="row">
                    <div className="col-md-6 mb-4"> */}
              
                <ul class="row row-cols-1 row-cols-md-6 g-8 hash-list  pad-30-all align-center text-sm">
                    <li >
                        <img src="img/viber_image_logo.jpg" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />

                        <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Професионални курсове</h5>
                        <p class="fs-110 font-cond-l" contenteditable="false">
                            <p class=" mb-0">
                                <ul>
                                    <li> Маникюр</li>
                                    <li>Педикюр</li>
                                    <li>Hоктопластика</li>
                                </ul>
                            </p></p>
                        <a href="/callery" className="btn btn-light" style={{}}>More</a>
                    </li>

                    <li >
                        <img src="img/viber_image_logo.jpg" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />

                        <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Грижа за лицето</h5>
                        <p class="fs-110 font-cond-l" contenteditable="false">
                            <p class=" mb-0">
                                <ul>
                                    <li> HYDRA BEATY терапия</li>
                                    <li>диамантено дермаабразио</li>
                                    <li>BB Glow терапия</li>
                                    <li>микронидлинг</li>
                                </ul>
                            </p></p>
                        <a href="/callery" className="btn btn-light" style={{}}>More</a>
                    </li>

                    <li >
                        <img src="img/viber_image_logo.jpg" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />

                        <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Грижа за ноктите</h5>
                        <p class="fs-110 font-cond-l" contenteditable="false">
                            <p class=" mb-0">
                                <ul>
                                    <li> Маникюр</li>
                                    <li>Педикюр</li>
                                    <li>Hоктопластика</li>
                                </ul>
                            </p></p>
                        <a href="/callery" className="btn btn-light" style={{}}>More</a>
                    </li>
                    
                    <li >
                        <img src="img/viber_image_logo.jpg" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />

                        <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Професионален грим</h5>
                        <p class="fs-110 font-cond-l" contenteditable="false">
                            <p class=" mb-0">
                                <ul>
                                    <li> Ежедневен</li>
                                    <li>Вечерен</li>
                                    <li>Официален</li>
                                    <li>Грим за камера</li>
                                    <li>Сценичен</li>
                                    <li>Уроци по самогримиране</li>
                                    <li>Курсове по грим</li>
                                </ul>
                            </p></p>
                        <a href="/callery" className="btn btn-light" style={{}}>More</a>
                    </li>

                    <li >
                        <img src="img/viber_image_logo.jpg" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />

                        <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Масажи</h5>
                        <p class="fs-110 font-cond-l" contenteditable="false">
                            <p class=" mb-0">
                                <ul>

                                    <li> Калсически</li>
                                    <li>Силов</li>
                                    <li>Възстановителен</li>
                                    <li>Антицелулитен масаж с вендузи</li>
                                </ul>
                            </p></p>
                        <a href="/callery" className="btn btn-light" style={{}}>More</a>
                    </li>

                    <li >
                        <img src="img/viber_image_logo.jpg" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />

                        <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Ламиниране на вежди и мигли</h5>
                        <p class="fs-110 font-cond-l" contenteditable="false">
                            <p class=" mb-0">

                            </p></p>
                        <a href="/callery" className="btn btn-light" style={{}}>More</a>
                    </li>
                </ul>
                
            </div>
            
        

            {/* <div className="row row-cols-1 row-cols-md-4 g-4  " style={{ marginTop: "0px", position: "absolute", left: "12%", paddingBottom: "300px" }}>
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
            </div> */}
        </>

    )
}