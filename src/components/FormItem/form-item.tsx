import { ChangeEventHandler, Component } from "react";
import { IFormItem } from "../../pages/auth/auth";

import "./form-item.scss";

interface Props {
  form: IFormItem;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
}

class FormItem extends Component<Props> {
  render() {
    const form = this.props.form;
    const handleInputChange = this.props.handleInputChange;

    return (
      <div className="input">
        <div className="input__item">
          <input
            type="text"
            name="fullname"
            required
            onChange={handleInputChange}
            value={form.fullname}
          />
          <label>Fullname</label>
        </div>
        <div className="input__item">
          <input
            type="text"
            name="email"
            required
            onChange={handleInputChange}
            value={form.email}
          />
          <label>Email</label>
        </div>
        <div className="input__item">
          <input
            type="text"
            name="numberID"
            required
            onChange={handleInputChange}
            value={form.numberID}
            placeholder={"xxxx-xxxx-xxxx-xxxx"}
          />
          <label>Number ID</label>
        </div>
        <div className="input__item">
          <input
            type="text"
            name="expiryDate"
            required
            onChange={handleInputChange}
            value={form.expiryDate}
          />
          <label>Expiry Date</label>
        </div>
      </div>
    );
  }
}

export default FormItem;
