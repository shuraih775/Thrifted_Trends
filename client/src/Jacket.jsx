import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './style.css';
import './styles.css';
import './styles_pro.css';
import rajs from './resources/suede_j/422151352_2077832672569838_8807419945056152970_n.jpg'
import rahj from './resources/g_jacket/422651291_2154288518247084_4269921681816758119_n.jpg'
import png3 from './assets/3.png';
import aaj from './assets/i1.png'
import aaj1 from './assets/jac1.jpg'
import aaj2 from './assets/jac2.jpg'
import aaj3 from './assets/jac3.jpg'
import aaj4 from './assets/jac4.jpg'
import aaj5 from './assets/jac5.jpg'
import rhj from './resources/brown_leather_j/420496662_871302994793030_7654096407799328159_n.jpg'
import ahj2 from './assets/i2.png'
import ig from "./assets/instagram-dp1.jpg"
import ig2 from "./assets/instagram-dp.jpg"

function Jacket(){
    return(
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Jackets</title>
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
          <i className="ri-shield-user-line" /> Sign Up
          </Link>
      </div>
    </nav>
  </div>
  <section className="product__details section__container">
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={rahj}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">Suede Leather Coat</h2>
      <p className="product__price">Rs.5600</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={rajs}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">Atagonia Retro Fleece Jacket</h2>
      <p className="product__price">Rs.3200</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={rahj}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">Nike E Jacket</h2>
      <p className="product__price">Rs.4500</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={png3}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">CARHARTT COLLARD JACKET</h2>
      <p className="product__price">Rs.5500</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 1"
      data-product-price="Product Price 1"
    >
      <img
        src={aaj}
        alt="Product Image 1"
        className="product__image"
      />
      <h2 className="product__name">MOTUL RACING LEATHER JACKET</h2>
      <p className="product__price">Rs.5500</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={rhj}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">CARHARTT LEATHER JACKET</h2>
      <p className="product__price">Rs.4500</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={aaj1}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">WRANGLER CUSTOMISED JACKET</h2>
      <p className="product__price">Rs.5500</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={aaj2}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">BLACK LEATHER JACKET</h2>
      <p className="product__price">Rs.3500</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={aaj3}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">SUEDE JACKET</h2>
      <p className="product__price">Rs.3200</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={aaj4}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">NBA JACKET</h2>
      <p className="product__price">Rs.4500</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={aaj5}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">ADI DAS CROP FIT JACKET</h2>
      <p className="product__price">Rs.5500</p>
    </div>
    <div
      className="product__info"
      data-product-name="Product Name 2"
      data-product-price="Product Price 2"
    >
      <img
        src={ahj2}
        alt="Product Image 2"
        className="product__image"
      />
      <h2 className="product__name">NASCAR DUPONT JACKET</h2>
      <p className="product__price">Rs.4000</p>
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

export default Jacket