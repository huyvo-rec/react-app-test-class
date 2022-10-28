import React from "react";
import { useNavigate } from "react-router-dom";

const withNavigateHook = (Component: any) => {
  return (props: any) => {
    const navigation = useNavigate();

    return <Component navigation={navigation} {...props} />;
  };
};

export default withNavigateHook;
