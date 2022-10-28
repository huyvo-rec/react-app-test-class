import React, { Component } from "react";
import withNavigateHook from "../../hoc/withNavigateHook";
import FormItem from "../../components/FormItem/form-item";
import Fb from "../../assets/images/icons8-facebook-48.png";
import "./auth.scss";

export interface IFormItem {
  fullname: string;
  email: string;
  numberID: number | string;
  expiryDate: string;
}
interface IForm {
  form: IFormItem;
}

class Auth extends Component<any, IForm> {
  constructor(props: any) {
    super(props);
    this.state = {
      form: {
        fullname: "",
        email: "",
        numberID: "",
        expiryDate: "",
      },
    };
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [e.target.name]: e.target.value,
      },
    }));
  };

  handleAuth = () => {
    if (true) {
      this.props.navigation("/information", {
        state: { form: this.state.form },
      });
    }
  };
  render() {
    return (
      <div className="auth">
        <div className="auth__welcome">
          <div className="auth__welcome--black">Create Acount,</div>
          <div className="auth__welcome--gray">Sign up to get started!</div>
        </div>

        <form className="auth__form">
          <div className="form__input">
            <FormItem
              form={this.state.form}
              handleInputChange={this.handleInputChange}
            />
          </div>
          <div className="form__forgot-password">Forgot password?</div>
          <button
            type="button"
            className="form__button--gradients"
            onClick={this.handleAuth}
          >
            Sign up
          </button>
          <button className="form__button--facebook">
            <img src={Fb} alt="logo-fb" />
            Connect with Facebook
          </button>
        </form>

        <div className="auth__text">
          I'm already a member,<span>Sign In</span>
        </div>
      </div>
    );
  }
}

export default withNavigateHook(Auth);
