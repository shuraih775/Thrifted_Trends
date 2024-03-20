import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import ai1 from './assets/i1.png';
import ai4 from './assets/i4.png';
import png1 from './assets/1.png';
import png2 from './assets/2.png';
import png3 from './assets/3.png';
import png4 from './assets/4.png';
import png5 from './assets/5.png';
import png6 from './assets/6.png';
import png7 from './assets/7.png';
import hd1 from './assets/header.png';
import r2 from './resources/419025153_890478242565287_6638145348635526722_n.jpg'
import r3 from './resources/424729408_368996122545854_6686540186928568854_n.jpg'
import col from './assets/collections.png';
import r4 from './resources/418622102_917145590002850_4314210149380445209_n.jpg'
import rajs from './resources/suede_j/422151352_2077832672569838_8807419945056152970_n.jpg'
import rahj from './resources/g_jacket/422651291_2154288518247084_4269921681816758119_n.jpg'
import rhj from './resources/brown_leather_j/420496662_871302994793030_7654096407799328159_n.jpg'
import ahj2 from './assets/i2.png'
import rh1 from './resources/b_tac/422209678_1916705718752991_453185888705850846_n.jpg'
import rh2 from './resources/g_pant/422776536_323553300040009_6023390791592309259_n.jpg'
import rh3 from './resources/red_blue_jacket/420996633_1422952121641020_3625843133420874861_n.jpg'
import rh4 from './resources/blue_brown_pant/421981182_277958135050022_1872400657361981415_n.jpg'
import rh5 from './resources/o_p_pants/422130311_687064343503850_2910969480054440590_n.jpg'
import ab1 from './assets/brand-1.png'
import ab2 from './assets/brand-2.png'
import ab3 from './assets/brand-3.png'
import ab4 from './assets/brand-4.png'
import ab5 from './assets/brand-5.png'
import ab6 from './assets/brand-6.png'
import i1 from "./assets/instagram-dp.jpg";
import i2 from "./assets/instagram-dp1.jpg"

function Home(){
    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({behavior : 'smooth'});
    };
    return(
      <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="styles.css" />
      <title>ThriftedTrends</title>
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
          <span>
            <Link to="/register">
              <i className="ri-shield-user-line" /> Sign Up
              </Link>
          </span>
        </div>
      </nav>
      <header>
        <div className="section__container header__container">
          <div className="header__content">
            <p />
            <h1>
              Discover &amp; Thrift
              <br />
              With India's No.1 <br />
              Online Thrift Store
            </h1>
          </div>
          <div className="header__image">
            <img src={hd1} alt="header" />
          </div>
        </div>
      </header>
      <section className="section__container collection__container">
        <img src={col} alt="collection" />
        <div className="collection__content">
          <h2 className="section__title">Shop Now</h2>
          <p>Items Updated Weekly!</p>
          <button className="btn" onClick={handleClick}>
            SHOP NOW
          </button>
        </div>
      </section>
      <section className="section__container sale__container">
        <h2 className="section__title">Categories</h2>
        <div className="sale__grid">
          <div className="sale__card">
            <img
              src={r2}
              alt="sale"
            />
            <div className="sale__content">
              <p className="sale__subtitle">ALL</p>
              <h4 className="sale__title">
                sale <span>40%</span> off
              </h4>
              <p className="sale__subtitle">- DON'T MISS -</p>
              <br />
              <Link to="/All">
              <div className="btn sale__btn">
                SHOP NOW</div>
              </Link>
            </div>
          </div>
          <div className="sale__card">
            <img
              src={r4}
              alt="sale"
            />
            <div className="sale__content">
              <p className="sale__subtitle">JACKETS</p>
              <h4 className="sale__title">
                sale <span>25%</span> off
              </h4>
              <p className="sale__subtitle">- DON'T MISS -</p>
              <br />
              <Link to="/Jacket">
                <div className="btn sale__btn">SHOP NOW</div>
                </Link>
            </div>
          </div>
          <div className="sale__card">
            <img
              src={r3}
              alt="sale"
            />
            <div className="sale__content">
              <p className="sale__subtitle">PANTS</p>
              <h4 className="sale__title">
                sale <span>20%</span> off
              </h4>
              <p className="sale__subtitle">- DON'T MISS -</p>
              <br />
              <Link to="/Pant">
              <div className="btn sale__btn">
                SHOP NOW</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section ref={ref} id="must-have" className="section__container musthave__container">
        <h2 className="section__title">Shop</h2>
        <div className="musthave__nav">
            <Link to="/All">All</Link>
            <Link to="/Jacket">Jackets</Link>
            <Link to="/Pant">Pants</Link>
</div>
        <div className="musthave__grid">
          <div className="musthave__card">
            <Link to="/Redj">
              <img src={ai1} alt="must have" />
            </Link>
            <h4>MOTUL RACING LEATHER JACKET</h4>
            <p>
              <del>₹7500</del> ₹4500
            </p>
          </div>
          <div className="musthave__card">
            <Link to="/Fj">
              <img src={ahj2} alt="must have" />
              </Link>
            <h4>NASCAR DUPONT JACKET</h4>
            <p>
              <del>₹7000</del> ₹4000
            </p>
          </div>
          <div className="musthave__card">
            <Link to="/Bcj">
              <img src={png3} alt="must have" />
            </Link>
            <h4>CARHARTT COLLARD JACKET</h4>
            <p>
              <del>₹8500</del> ₹5500
            </p>
          </div>
          <div className="musthave__card">
            <Link to='/Offwhite'>
              <img src={ai4} alt="must have" />
            </Link>
            <h4>CARHARTT CARPENTER PANTS</h4>
            <p>
              <del>₹7500</del> ₹4500
            </p>
          </div>
          <div className="musthave__card">
            <Link to="/Bleather">
              <img
                src={rhj}
                alt="must have"
              />
            </Link>
            <h4>Carhartt Leather Jacket</h4>
            <p>
              <del>₹7000</del> ₹4500
            </p>
          </div>
          <div className="musthave__card">
            <Link to='/Btack'>
              <img
                src={rh1}
                alt="must have"
              />
            </Link>
            <h4>DickiesTactical Pants</h4>
            <p>
              <del>₹6000</del> ₹3500
            </p>
          </div>
          <div className="musthave__card">
            <Link to='/Gjack'>
              <img
                src={rahj}
                alt="must have"
              />
            </Link>
            <h4>Nike E Jacket</h4>
            <p>
              <del>₹8000</del> ₹3500
            </p>
          </div>
          <div className="musthave__card">
            <Link to='/Gpant'>
              <img
                src={rh2}
                alt="must have"
              />
            </Link>
            <h4>Dickies Corduroy Pants</h4>
            <p>
              <del>₹5000</del> ₹3000
            </p>
          </div>
          <div className="musthave__card">
            <Link to='/Rbjack'>
              <img
                src={rh3}
                alt="must have"
              />
            </Link>
            <h4>Atagonia Retro Fleece Jacket</h4>
            <p>
              <del>₹6500</del> ₹3200
            </p>
          </div>
          <div className="musthave__card">
            <Link to='/Bbpant'>
              <img
                src={rh4}
                alt="must have"
              />
            </Link>
            <h4>Cordura Utility Pant</h4>
            <p>
              <del>₹9999</del> ₹4999
            </p>
          </div>
          <div className="musthave__card">
            <Link to="/Sue">
              <img
                src={rajs}
                alt="must have"
              />
            </Link>
            <h4>Suede Leather Coat</h4>
            <p>
              <del>₹9340</del> ₹5600
            </p>
          </div>
          <div className="musthave__card">
            <Link to="/Opant">
              <img
                src={rh5}
                alt="must have"
              />
            </Link>
            <h4>BMX Biker Pants</h4>
            <p>
              <del>₹13000</del> ₹999
            </p>
          </div>
        </div>
      </section>
      <section className="section__container brands__container">
        <div className="brand__image">
          <img src={ab1} alt="brand" />
        </div>
        <div className="brand__image">
          <img src={ab2} alt="brand" />
        </div>
        <div className="brand__image">
          <img src={ab3} alt="brand" />
        </div>
        <div className="brand__image">
          <img src={ab4} alt="brand" />
        </div>
        <div className="brand__image">
          <img src={ab5} alt="brand" />
        </div>
        <div className="brand__image">
          <img src={ab6} alt="brand" />
        </div>
      </section>
      <hr />
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
              <img src={i1} alt="Instagram" />
              @thriftdex.in
            </a>
            <a
              href="https://www.instagram.com/thriftifi.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={i2} alt="Instagram" />
              @thriftifi.in
            </a>
          </div>
        </div>
      </footer>
      <hr />
      <div className="section__container footer__bar">
        <div className="copyright">
          Copyright © 2023 ThriftedTrends. All rights reserved.
        </div>
        <div className="footer__form">
          <form>
            <input type="text" placeholder="ENTER YOUR EMAIL" />
            <button className="btn" type="submit">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </>
    
    );
}

export default Home
