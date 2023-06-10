import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/slice/authSlice";

const ShowOnLogin = ({ children }) => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  if (IsLoggedIn) {
    return children;
  }
  return null;
};

export const ShowOnLogout = ({ children }) => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  if (!IsLoggedIn) {
    return children;
  }
  return null;
};

export default ShowOnLogin;
