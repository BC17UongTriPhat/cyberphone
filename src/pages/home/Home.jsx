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
    </div>
  );
}
