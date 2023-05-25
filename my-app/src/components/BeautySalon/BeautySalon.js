import '../../css/site.css';
import '../Home/home.css';

export default function BeautySalon() {


    return (
        <>
            <h2 className="text-center fs-1 fst-italic" >GBstyle-nails By Galya Lazarova</h2>
            {/* <h6 className="text-center fs-1 fst-italic"  >
            <i class="fa fa-thin fa-minus"></i> Beauty Salon
            </h6> */}
            <figure className="text-center" id='aboutUs'>
                <figcaption className="blockquote-footer" style={{ fontSize: "2em" }}>
                Beauty Salon</figcaption>
            </figure>

            <div className="row row-cols-1 row-cols-md-4 g-4  " style={{ marginTop: "0.2px", position: "absolute", left: "1%",paddingBottom:"300px"}}>

                <div className="col">
                    <div className="card">
                        <img src="img/viber_image_2023-04-21_13-46-52-156.jpg" className="card-img-top" alt="..." />
                    </div>
                </div><div className="col">
                    <div className="card">
                        <img src="img/viber_image_2023-04-21_13-46-52-057.jpg" className="card-img-top" alt="..." />
                    </div>
                </div><div className="col">
                    <div className="card">
                        <img src="img/viber_image_2023-04-21_13-46-51-941.jpg" className="card-img-top" alt="..." />
                    </div>
                </div><div className="col">
                    <div className="card">
                        <img src="img/viber_image_2023-04-21_13-46-51-904.jpg" className="card-img-top" alt="..." />
                    </div>
                </div><div className="col">
                    <div className="card">
                        <img src="img/viber_image_2023-04-21_13-46-51-833.jpg" className="card-img-top" alt="..." />
                    </div>
                </div><div className="col">
                    <div className="card">
                        <img src="img/viber_image_2023-04-21_13-40-33-647.jpg" className="card-img-top" alt="..." />
                    </div>
                </div><div className="col">
                    <div className="card">
                        <img src="img/125834093_2760812547524592_412378573349321012_n.jpg" className="card-img-top" alt="..." />
                    </div>
                </div><div className="col">
                    <div className="card">
                        <img src="img/131567037_2785239321748581_4772934520805929498_n.jpg" className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
            {/* </section> */}

        </>

    )
}
{/* <section style={{ marginTop: "100px" }}> */ }

{/* <figure className="text-center fs-1 fst-italic" id='beauty'>
                    <blockquote className="text-center fs-1 fst-italic" style={{ fontSize: "40px" }}>
                        <p>GBstyle-nails By Galya Lazarova</p>
                    </blockquote>
                    <figcaption className="blockquote-footer" style={{ fontSize: "25px" }}>
                    Beauty Salon
                    </figcaption>
                </figure> */}