import { useState } from "react";
import './style.css';
import { Link } from "react-router-dom";
import r1 from "./resources/fj/419262123_6851802278278526_8912113739633005993_n.jpg"
import r2 from "./resources/fj/419262123_6851802278278526_8912113739633005993_n.jpg"
import r3 from "./resources/fj/419264984_3664604383771888_2338232278109502795_n.jpg"
import r4 from "./resources/fj/419910336_872175434591504_3111950471958935156_n.jpg"

function Fj(){
    return(
        <>
  <title>Desktop - 1</title>
  <meta charSet="UTF-8" />
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="./animation.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
  <div className="header__bar">Free Shipping on Orders Over Rs.3000</div>
  <nav className="section__container nav__container">
    <a href="#" className="nav__logo">
      ThriftedTrends
    </a>
    <ul className="nav__links">
      <li className="link">
        <Link to="/home">HOME</Link>
      </li>
      <li className="link">
        <a href="#">CATEGORIES</a>
      </li>
      <li className="link">
        <a href="#">OFFERZONE</a>
      </li>
    </ul>
    <div className="nav__icons">
      <span>
        <i className="ri-shield-user-line" />
      </span>
      <span>
        <i className="ri-search-line" />
      </span>
      <span>
        <i className="ri-shopping-bag-2-line" />
      </span>
    </div>
  </nav>
  <div>
    <div>
      <div
        style={{
          position: "absolute",
          width: 48,
          height: 48,
          top: 488,
          left: "877.5px",
          opacity: 1,
          zIndex: 5,
          transform: "rotate(0deg)",
          borderRadius: "50%",
          background: "rgb(255, 119, 0)",
          boxShadow: "0px 0px 4px 6px rgba(0, 0, 0, 0.25)"
        }}
      />
      <div className="name-1-4500" id="id-28">
        <span className="name-1-4500-0">
          Nascar Dupont
          <br />
          Jacket
        </span>
      </div>
      <div className="price-1-85" id="id-418">
        <span className="price-1-85-0">₹2,999</span>
      </div>
      <div className="size-1-360" id="id-416">
        <span className="size-1-360-0">size : Small </span>
      </div>
      <div className="colortxt-1-0" id="id-411">
        <span className="colortxt-1-0-0">Color :</span>
      </div>
      <div className="btn-1-4712" id="id-836">

        <div className="buy-1-192" id="id-46">
          <div className="buy-now-1-161" id="id-45">
            <span className="buy-now-1-161-0">Buy Now</span>
          </div>
        </div>
      </div>
      <div className="image-1-280" id="id-835">
        <div className="main-1-3192" id="id-25">
          <div className="nodeBg-25" id="id-bg-25">
            <img
              src={r1}
              height="459px"
              width="372px"
            />
          </div>
        </div>
        <div className="smallimg-1-4095" id="id-434">
          <div className="c-420050167358635-1-704" id="id-424">
            <div className="img1" id="id-bg-424">
              <img
                src={r2}
                height={131}
                width={107}
              />
            </div>
          </div>
          <div className="c-419289751347310-1-304" id="id-426">
            <div className="img2" id="id-bg-426">
              <img
                src={r3}
                height={131}
                width={107}
              />
            </div>
          </div>
          <div className="c-419279341952089-1-3239" id="id-425">
            <div className="img3" id="id-bg-425">
              <img
                src={r4}
                height="131px"
                width={106}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    );
}

export default Fj