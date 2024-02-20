import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RouteGuard = (props) => {
  const { Component } = props;
  const [login, setLogin] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      setLogin(true);
    } else {
      setLogin(false);
      navigate("/");
    }
  }, [token]);
  return <div>{login && <Component />}</div>;
};

export default RouteGuard;