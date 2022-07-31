import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <NavLink to="/" href="#" className="logo">
            CyberPhone
          </NavLink>
          <nav className="navbar">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>
      <section className="carousel">
        <div className="container">
          <div className="detail">
            <h1>CyberPhone</h1>
            <span>Best Smartphone of 2021</span>
            <p>
            Cras tortor mi, lobortis quis ornare in, varius scelerisque urna. Vivamus imperdiet dolor nec odio convallis consequat.
            </p>
            <button className="btn-info">Info</button>
            <button className="btn-shop">Shop</button>
          </div>
          <div className="thumbnail">
            <img src="./image/product-header2.png" alt="..." />
          </div>
        </div>
      </section>
      <section className='products'>
                <h3 className='title-products'>-Featured Products-</h3>
                <main>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <div className='card card-item-1'>
                                    <img src='./image/product1.png' alt='...' />
                                    <div className='card-body'>
                                        <div className='title-price'>
                                            <p className='product-name'>CyberBeats</p>
                                            <p className='product-price'>$99.99</p>
                                        </div>
                                        <p className='description'>
                                            Accessories
                                        </p>
                                        <div className='rating'>
                                            <div className='star'>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                            </div>
                                            <button className='btn-buy'>buy now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='card card-item-2'>
                                    <img src='./image/product2.png' alt='...' />
                                    <div className='card-body'>
                                        <div className='title-price'>
                                            <p>CyberPhone</p>
                                            <p>$99.99</p>
                                        </div>
                                        <p className='description'>
                                            Accessories
                                        </p>
                                        <div className='rating'>
                                            <div className='star'>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                            </div>
                                            <button className='btn-buy'>buy now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='card card-item-3'>
                                    <img src='./image/product3.png' alt='...' />
                                    <div className='card-body'>
                                        <div className='title-price'>
                                            <p>CyberTablet</p>
                                            <p>$99.99</p>
                                        </div>
                                        <p className='description'>
                                            Accessories
                                        </p>
                                        <div className='rating'>
                                            <div className='star'>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                            </div>
                                            <button className='btn-buy'>buy now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='card card-item-4'>
                                    <img src='./image/product4.png' alt='...' />
                                    <div className='card-body'>
                                        <div className='title-price'>
                                            <p>CyberWacth</p>
                                            <p>$99.99</p>
                                        </div>
                                        <p className='description'>
                                            Accessories
                                        </p>
                                        <div className='rating'>
                                            <div className='star'>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                            </div>
                                            <button className='btn-buy'>buy now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='card card-item-5'>
                                    <img src='./image/product5.png' alt='...' />
                                    <div className='card-body'>
                                        <div className='title-price'>
                                            <p>CyberGlass</p>
                                            <p>$99.99</p>
                                        </div>
                                        <p className='description'>
                                            Accessories
                                        </p>
                                        <div className='rating'>
                                            <div className='star'>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                            </div>
                                            <button className='btn-buy'>buy now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='card card-item-6'>
                                    <img src='./image/product6.png' alt='...' />
                                    <div className='card-body'>
                                        <div className='title-price'>
                                            <p>CyberGadget</p>
                                            <p>$99.99</p>
                                        </div>
                                        <p className='description'>
                                            Accessories
                                        </p>
                                        <div className='rating'>
                                            <div className='star'>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                            </div>
                                            <button className='btn-buy'>buy now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
    </div>
  );
}
