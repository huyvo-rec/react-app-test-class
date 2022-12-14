import React, { Component } from "react";

import logoANGEL from "../../../assets/images/logoANGEL.svg";
import logoMEDIUM from "../../../assets/images/logoMEDIUM.svg";
import logoOMS from "../../../assets/images/logoOMS.svg";
import logoUZU from "../../../assets/images/logoUZU.svg";
import logoWEDDING from "../../../assets/images/logoWEDDING.svg";
import "./brands.scss";

interface IFormItem {
  fullname: string;
  email: string;
  numberID: number | string;
  expiryDate: string;
}
interface IForm {
  form: IFormItem;
}

class Brands extends Component {
  render() {
    return (
      <div className="information__brands">
        <div className="information__brands--item">
          <img src={logoANGEL} alt="logo" className="filter-gray" />
          <img src={logoMEDIUM} alt="logo" className="filter-gray" />
          <img src={logoOMS} alt="logo" className="filter-gray" />
          <img src={logoUZU} alt="logo" className="filter-gray" />
          <img src={logoWEDDING} alt="logo" className="filter-gray" />
        </div>
      </div>
    );
  }
}

export default Brands;
