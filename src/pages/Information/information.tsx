import React, { Component } from "react";
import FormItem from "../../components/FormItem/form-item";

import Sound from "../../assets/images/sound.png";
import Switch from "../../assets/images/switch.png";
import Fb from "../../assets/images/icons8-facebook-48.png";
import logoANGEL from "../../assets/images/logoANGEL.svg";
import logoMEDIUM from "../../assets/images/logoMEDIUM.svg";
import logoOMS from "../../assets/images/logoOMS.svg";
import logoUZU from "../../assets/images/logoUZU.svg";
import logoWEDDING from "../../assets/images/logoWEDDING.svg";
import "./information.scss";
import Header from "../../components/Information/Header/header";
import withLocationHook from "../../hoc/withLocation";
import Content from "../../components/Information/content/content";
import Brands from "../../components/Information/brands/brands";

class Information extends Component<any, any> {
  constructor(props: any) {
    super(props);

    console.log(this.props?.location?.state);
  }

  render() {
    const { location } = this.props;
    const form = location?.state?.form;
    // const test = this.props.location?.state;
    return (
      <div className="information">
        <div className="information__container">
          <div className="information__header">
            <Header />
          </div>
          <div className="information__content">
            <Content form={form} />
          </div>
          <div className="information__brands">
            <Brands />
          </div>
        </div>
      </div>
    );
  }
}

export default withLocationHook(Information);
