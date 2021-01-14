import React, { useState } from "react";
import ShoppingCart from "../shoppingCart/shoppingCart";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = ({ basket, setBasket }) => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    window.location = `/products?search=${search}`;
    setSearch("");
  };
  return (
    <header>
      <Link to="/">
        <img className="logo" src="/img/logo1.png" alt="" />
      </Link>

      <div class="navigation">

        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
        <label for="navi-toggle" class="navigation__button">
          <div class="navigation__icon">&nbsp;</div>
        </label>

        <div class="navigation__background"></div>

        <nav class="navigation__nav">
          <img src="/img/logo1.png" alt="" className="navigation__logo" />


          <ul class="navigation__list">

            {/* <li><label class="navigation__links " for="checkbox1">
              Category<span>&#11206;</span></label>
              <input type="checkbox" class="navigation__checkbox" id="checkbox1" />
              <ul class="navigation__droplist navigation__droplist-1">
                <li class="navigation__droplinks">food</li>
                <li class="navigation__droplinks">drink</li>
                <li class="navigation__droplinks">snacks</li>
                <li class="navigation__droplinks">rice,pasta</li>
                <li class="navigation__droplinks">meat</li>
              </ul>
            </li> */}
            <li><label class="navigation__links Home-Products" for="checkbox2">Groceries
                                  <span>&#11206;</span></label>
              <input type="checkbox" class="navigation__checkbox" id="checkbox2" />
              <ul class="navigation__droplist navigation__droplist-2">
                <li><a class="navigation__droplinks" href="">Food</a></li>
                <li><a class="navigation__droplinks" href="">Drinks</a></li>
                <li><a class="navigation__droplinks" href="">Snack</a></li>
                <li><a class="navigation__droplinks" href="">Meat,Fish & Poultry</a></li>
                <li><a class="navigation__droplinks" href="">Rice , Pasta & Flour</a></li>
                <li><a class="navigation__droplinks" href="">Fruit & Veg </a></li>
              </ul>
            </li>
            <li><label class="navigation__links Health" for="checkbox3">Home Products<span>&#11206;</span></label>
              <input type="checkbox" class="navigation__checkbox" id="checkbox3" />
              <ul class="navigation__droplist navigation__droplist-3">
                <li><a class="navigation__droplinks" href="">Household items</a></li>
                <li><a class="navigation__droplinks" href="">Mugs</a></li>
                <li><a class="navigation__droplinks" href="">JugsJugs</a></li>
              </ul>
            </li>
            <li><label class="navigation__links Health" for="checkbox4">Health & Beauty<span>&#11206;</span></label>
              <input type="checkbox" class="navigation__checkbox" id="checkbox4" />
              <ul class="navigation__droplist navigation__droplist-4">
                <li><a class="navigation__droplinks" href="">Skin care</a></li>
                <li><a class="navigation__droplinks" href="">Hair care</a></li>
                <li><a class="navigation__droplinks" href="">Oral care</a></li>
              </ul>
            </li>
            <li><label class="navigation__links Health" for="checkbox3">Offer</label>

            </li>

          </ul>
          <div className="navi">
            <div className="navi__icon navi__icon-1"></div>
            <div className="navi__icon navi__icon-2"></div>
            <div className="navi__icon navi__icon-3"></div>
            <div className="navi__icon navi__icon-4"></div>
          </div>
        </nav>




      </div>

      <form className="bar-box" onSubmit={handleSubmit}>
        <input
          className="search-bar"
          placeholder="&#128269;"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-text">search</button>
      </form>
      <div className="icon-box" onClick={() => setCart((prev) => !prev)}>
        <div className="icon-text">
          <div>Cart</div>
        </div>
        <div className="icon icon-2"></div>
        {basket.length > 0 && (
          <div className="cart-amount">
            <div className="cart-figure">
              {
                basket.reduce((a, b) => {
                  return { quantity: a.quantity + b.quantity };
                }).quantity
              }
            </div>
          </div>
        )}
      </div>

      <ShoppingCart
        display={cart}
        setDisplay={setCart}
        basket={basket}
        setBasket={setBasket}
      />
    </header>
  );
};

export default Header;
