import { Component } from "react";
import Card from "./card/card";

import Slider from "./slider/slider";

import "./content.scss";
import { IFormItem } from "../../../pages/auth/auth";

interface Props {
  form: IFormItem;
}

class Content extends Component<any, Props> {
  render() {
    const { form } = this.props;

    return (
      <div className="content">
        <div className="content__container">
          <div className="content__slider">
            <Slider />
          </div>

          <div className="content__card">
            <Card form={form} />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
