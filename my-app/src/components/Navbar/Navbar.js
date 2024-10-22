import "../Navbar/navBar.css"
export default function Navbar() {
    return (

//       <nav className="navbar navbar-dark bg-dark " style={{ width: "1500px", height: "90px" }}>
//       <a className="navbar-brand" href="/">MENU</a>
//       <div className="container-fluid">
  
        <nav className="navbar navbar-dark bg-dark fixed-top" style={{  height: "80px" }}>
        <div className="container-fluid">
         
        
           {/* <p id="logoNavbar" className="navbar-brand" href="/">GBstyle  - nails By Galya Lazarova</p> */}
          {/* <h2 id="logoNavbar" className="navbar-brand" href="/">GBstyle  - nails By Galya Lazarova</h2> */}
          
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation" style={{ border: "none" }}  >
            
          MENU <span className="navbar-toggler-icon" style={{marginRight: "8px"}}></span>
          <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U"
           className="card-link mb-1">
            <img src="img/viber_image_2023.png" width="170" height="70" alt="..." style={{ marginTop: "-9px",  }} /> </a>
          </button>
         

          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">MENU<figcaption className="blockquote-footer" style={{ fontSize:"15px", marginBlockStart:"3px" }}>
              Beauty Salon -by Galya Lazarova
                      </figcaption></h5>
              
            
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">        
                 <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                           <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                     </li>
                           <li className="nav-item">
                        <a className="nav-link active" href="/callery">Gallery - Галерия</a>
                    </li>
                           <li className="nav-item">
                        <a className="nav-link active" href="/category">Category- Категория</a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link active" href="/courses">Сourses - Курсове</a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link active" href="/beautySalon">Beauty Salon - Салон за красота</a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link active" href="/aboutUs">About Us - За нас</a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link active" href="/contacts">Contacts - Контакти</a>
                           </li>
                        </ul>
                       <span className="navbar-text nav-link active">
      
      
                           <a href="https://instagram.com/gb_style_by_galya_lazarova?igshid=YmMyMTA2M2Y=" className="card-link"><img src="img/instagram-new.png" width="30" height="30" alt="..." /></a>
      
                           <a href="https://www.facebook.com/GBStylebyGalyalazarova/photos" className="card-link"><img src="img/facebook-circled.png" width="30" height="30" alt="..." /> </a>
      
                           <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U" className="card-link"><img src="img/event-accepted.png" width="30" height="30" alt="..." /> </a>
      
      
                           <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%9A%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0%E2%80%9C+6,+1505+%D0%9E%D0%B1%D0%BE%D1%80%D0%B8%D1%89%D0%B5,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6962689,23.3514059,17z/data=!3m1!4b1!4m6!3m5!1s0x40aa85859da8b2fb:0xe34993d764e67e51!8m2!3d42.6962689!4d23.3539808!16s%2Fg%2F11c5mm3nm9#:~:text=https%3A//goo.gl/maps/oPYsbC7jyYgnPNsC9"
                               className="card-link"><img src="img/marker.png" width="30" height="30" alt="..." /> </a>
      
                       </span>
                       <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U"
                           className="card-link mb-1"><img src="img/viber_image_2023.png" width="170" height="70" alt="..."
                               style={{ marginTop: "40px",   opacity: "0.8" }} /> </a>
                                     <p class="mb-0"><a href="https://github.com/ZdravkaGoranova"
                                        className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Web design by Zdravka Goranova</a></p>
                   </div>
          </div>
        </div>
      </nav>
          
        
    )
}


 // <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">

        //     <div className="container-fluid">
        //         <img src="img/viber_image_2023.png" className="card-img img-fluid  " alt="..." style={{ width: "250px", height: "120px" }}/> 
        //         {/* <img src="img/viber_image_2023-04-26_14-54-26-129.jpg" className="card-img img-fluid  " alt="..." style={{ width: "250px", height: "120px" }}/> */}

        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <a className="nav-link active" aria-current="page" href="/">Home</a>
        //                 </li>

        //                 <li className="nav-item">
        //                     <a className="nav-link active" aria-current="page" href="/callery">Gallery</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link active" aria-current="page" href="/category">Category</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link active" href="/aboutUs">About Us</a>
        //                 </li>

        //                 <li className="nav-item">
        //                     <a className="nav-link active" href="/courses">Сourses</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link active" href="/beautySalon">Beauty Salon</a>
        //                 </li>
        //                 <li className="nav-item">

        //                     <a className="nav-link" href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U">💫Запази час за посещение💫 </a></li>

        //             </ul>

        //             <span className="navbar-text nav-link active">


        //                 <a href="https://instagram.com/gb_style_by_galya_lazarova?igshid=YmMyMTA2M2Y=" className="card-link"><img src="img/instagram-new.png" width="30" height="30" alt="..." /></a>

        //                 <a href="https://www.facebook.com/GBStylebyGalyalazarova/photos" className="card-link"><img src="img/facebook-circled.png" width="30" height="30" alt="..." /> </a>

        //                 <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U" className="card-link"><img src="img/event-accepted.png" width="30" height="30" alt="..." /> </a>


        //                 <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%9A%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0%E2%80%9C+6,+1505+%D0%9E%D0%B1%D0%BE%D1%80%D0%B8%D1%89%D0%B5,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6962689,23.3514059,17z/data=!3m1!4b1!4m6!3m5!1s0x40aa85859da8b2fb:0xe34993d764e67e51!8m2!3d42.6962689!4d23.3539808!16s%2Fg%2F11c5mm3nm9#:~:text=https%3A//goo.gl/maps/oPYsbC7jyYgnPNsC9"
        //                     className="card-link"><img src="img/marker.png" width="30" height="30" alt="..." /> </a>

        //             </span>

        //             {/* <form className="d-flex" role="search">
        //                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        //                 <button className="btn btn-outline-success" type="submit">Search</button>
        //             </form> */}
        //         </div>
        //     </div>
        // </nav>


       

      //treti 

//       <nav className="navbar navbar-dark bg-dark " style={{ width: "1500px", height: "90px" }}>
//       <a className="navbar-brand" href="/">MENU</a>
//       <div className="container-fluid">

//           {/* <img src="img/viber_image_2023.png" className="card-img img-fluid  " alt="..." style={{ width: "250px", height: "120px" }}/>  */}


//           <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">


//               <div className="offcanvas-header">
//                   <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">GBstyle-nails By Galya Lazarova</h5>
//                   <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//               </div>
//               <div className="offcanvas-body">

//                   <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
//                       <li className="nav-item">
//                           <a className="nav-link active" aria-current="page" href="/">Home</a>
//                       </li>
//                       <li className="nav-item">
//                           <a className="nav-link active" href="/callery">Gallery</a>
//                       </li>
//                       <li className="nav-item">
//                           <a className="nav-link active" href="/category">Category</a>
//                       </li>
//                       <li className="nav-item">
//                           <a className="nav-link active" href="/aboutUs">About Us</a>
//                       </li>
//                       <li className="nav-item">
//                           <a className="nav-link active" href="/courses">Сourses</a>
//                       </li>
//                       <li className="nav-item">
//                           <a className="nav-link active" href="/beautySalon">Beauty Salon</a>
//                       </li>
//                       <li className="nav-item">

//                           <a className="nav-link active" href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U">💫Запази час за посещение💫 </a></li>
//                   </ul>
//                   <span className="navbar-text nav-link active">


//                       <a href="https://instagram.com/gb_style_by_galya_lazarova?igshid=YmMyMTA2M2Y=" className="card-link"><img src="img/instagram-new.png" width="30" height="30" alt="..." /></a>

//                       <a href="https://www.facebook.com/GBStylebyGalyalazarova/photos" className="card-link"><img src="img/facebook-circled.png" width="30" height="30" alt="..." /> </a>

//                       <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U" className="card-link"><img src="img/event-accepted.png" width="30" height="30" alt="..." /> </a>


//                       <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%9A%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0%E2%80%9C+6,+1505+%D0%9E%D0%B1%D0%BE%D1%80%D0%B8%D1%89%D0%B5,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6962689,23.3514059,17z/data=!3m1!4b1!4m6!3m5!1s0x40aa85859da8b2fb:0xe34993d764e67e51!8m2!3d42.6962689!4d23.3539808!16s%2Fg%2F11c5mm3nm9#:~:text=https%3A//goo.gl/maps/oPYsbC7jyYgnPNsC9"
//                           className="card-link"><img src="img/marker.png" width="30" height="30" alt="..." /> </a>

//                   </span>
//                   <a href="https://gbstyle.customer.fitsys.co/login?fbclid=IwAR30MlNCsrsaiEGZE6heIpc3mkRZ2q5GPxpS33eFXqoMLbeeRSmqayojO7U"
//                       className="card-link mb-1"><img src="img/viber_image_2023-04-26_14-54-26-129.jpg" width="350" height="200" alt="..."
//                           style={{ marginTop: "40px", position: "absolute",  opacity: "0.8" }} /> </a>
//               </div>
//           </div>
//       </div>
//   </nav>