import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useCart } from "react-use-cart";
import { ShoppingCart, UserCircle } from "phosphor-react";
import Search from "../Search/search"
import Sidebar from '../SideBar/sidebar';

function Header() {

  const { totalUniqueItems } = useCart();
  return (
    <>
    <div className="sideBar">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    </div>
  
      <div className="header__container">
      <Link to="/" className="logo">
          BRAND
        </Link>
        <div  className="nav__right">
        
        <Search />
          <div className="my__account">
            <UserCircle size={25} />
            <span>Account</span>
          </div>
          <Link to="/cart">
            <div className="group">
              <ShoppingCart className="shoingCart" size={25} />
              {totalUniqueItems ? (
                <div className="itemCound">{totalUniqueItems}</div>
              ) : (
                <div></div>
              )}
            </div>
          </Link>
        </div>
      </div>
    </>
  );

}

export default Header;
