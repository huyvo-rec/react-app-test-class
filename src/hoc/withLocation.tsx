import React from "react";
import { useLocation } from "react-router-dom";

const withLocationHook = (Component: any) => {
  return (props: any) => {
    const location = useLocation();

    return <Component location={location} {...props} />;
  };
};

export default withLocationHook;
