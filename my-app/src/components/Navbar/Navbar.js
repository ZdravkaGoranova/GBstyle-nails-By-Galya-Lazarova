export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark">
      
            <div className="container-fluid">
            <img src="img/viber_image_2023-04-21_12-42-48-412.png" className="card-img img-fluid  w-25 h-25" alt="..." />

            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/callery">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/aboutUs">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/prices">Prices</a>
                        </li>
                     
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/callery">Categories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/callery">Categories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/callery">Categories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/callery">Categories</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>

    )
}