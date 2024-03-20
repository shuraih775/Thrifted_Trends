import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './style.css';
import './styles.css';
import './styles_pro.css';
import pant1 from "./assets/pant1.jpg"
import p2 from "./assets/pant2.jpg"
import p3 from "./assets/pant3.jpg"
import p4 from "./assets/pant4.jpg"
import p5 from "./assets/pant5.jpg"
import p6 from "./assets/pant6.jpg"
import p7 from "./assets/pant7.jpg"
import p8 from "./assets/pant8.jpg"
import p9 from "./assets/pant9.jpg"
import p10 from "./assets/pant10.jpg"
import p11 from "./assets/pant11.jpg"
import p12 from "./assets/pant12.jpg"
import ig from "./assets/instagram-dp1.jpg"
import ig2 from "./assets/instagram-dp.jpg"


function Pant(){
    return(
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pants</title>
  <link
    href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="styles_pro.css" />
  <div>
    <div className="header__bar">Free Shipping on Orders Over Rs.3000</div>
    <nav className="section__container nav__container">
      <a href="#" className="nav__logo">
        ThriftedTrends
      </a>
      <ul className="nav__links">
        <li className="link">
          <a href="#" />
        </li>
        <li className="link">
          <a href="#" />
        </li>
        <li className="link">
          <a href="#" />
        </li>
      </ul>
      <div className="nav__icons">
        <Link to="/register">
          <i className="ri-shield-user-line" /> Sign Up </Link>
        
      </div>
    </nav>
  </div>
  <section className="product__details section__container">
    <div
      className="product__info"
      data-product-name="Product Name 1"
      data-product-price="Product Price 1"
    >
      <img
        src={pant1}
        alt="Product Image 1"
        className="product__image"
      />
      <h2 className="product__name">WRANG LER CARGO</h2>
      <p className="product__price">Rs.3200</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={p2}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">DICKIES PANTS</h2>
      <p className="product__price">Rs.3000</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={p3}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">DICKIES WHITE PANTS</h2>
      <p className="product__price">Rs.3000</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={p4}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">CARHARTT DENIM PANTS</h2>
      <p className="product__price">Rs.3500</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={p5}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">DICKIES DENIM PANTS</h2>
      <p className="product__price">Rs.3200</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={p6}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">CARHARTT CARPENTER DENIM</h2>
      <p className="product__price">Rs.3500</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={p7}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">TRUE RELIGION DENIM PANTS</h2>
      <p className="product__price">Rs.3500</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={p8}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">DICKIES CARGO PANTS</h2>
      <p className="product__price">Rs.3200</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={p9}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">CARHARTT CARPENTER PANTS</h2>
      <p className="product__price">Rs.3200</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={p10}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">CARHARTT BROWN CORDUROY PANTS</h2>
      <p className="product__price">Rs.3500</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={p11}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">CHROME DENIM PANTS</h2>
      <p className="product__price">Rs.3200</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={p12}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">VINTAGE BAGGY RUFF RYDERS DENIM PANTS</h2>
      <p className="product__price">Rs.3000</p>
    </div>
  </section>
  <footer className="section__container footer__container">
    <div className="footer__col">
      <h4 className="footer__heading">CONTACT INFO</h4>
      <p>
        <i className="ri-map-pin-2-fill" /> 123, BMS College Of Engineering
      </p>
      <p>
        <i className="ri-mail-fill" /> support@ttrends.com
      </p>
      <p>
        <i className="ri-phone-fill" /> (+91) 1234567809
      </p>
    </div>
    <div className="footer__col">
      <h4 className="footer__heading">COMPANY</h4>
      <p>Home</p>
      <p>About Us</p>
    </div>
    <div className="footer__col">
      <h4 className="footer__heading">USEFUL LINK</h4>
      <p>Help</p>
      <p>Track My Order</p>
    </div>
    <div className="footer__col">
      <h4 className="footer__heading">Instagram</h4>
      <div className="instagram__grid">
        <a
          href="https://www.instagram.com/thriftdex.in/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="brand__image">
            <img src={ig2} alt="Instagram" />
          </div>
          @thriftdex.in
        </a>
        <a
          href="https://www.instagram.com/thriftifi.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="brand__image">
            <img src={ig} alt="Instagram" />
          </div>
          @thriftifi.in
        </a>
      </div>
    </div>
  </footer>
</>
    );
}

export default Pant