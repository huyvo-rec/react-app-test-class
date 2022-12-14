import { Component } from "react";

import "./header.scss";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <div className="header__logo-img">
            <div className="img__layout1"></div>
            <div className="img__layout2"></div>
          </div>
          <div className="header__logo-name font--mulish">finely</div>
        </div>
        <div className="header__menu">
          <ul className="header__menu-list">
            <li className="list__item font--mulish">Features</li>
            <li className="list__item font--mulish ">About</li>
            <li className="list__item font--mulish">Cards</li>
            <li className="list__item font--mulish">FAQ</li>
            <li className="list__item font--mulish">Contact</li>
          </ul>
        </div>
        <div className="header__button">
          <button>Get a card</button>
        </div>
      </div>
    );
  }
}

export default Header;
