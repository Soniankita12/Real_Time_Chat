import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectRoute = ({ children, user, redirect = "/login" }) => {
  if (!user) return <Navigate to={redirect} />;
  return children ? children : <Outlet />;
};

export default ProtectRoute;
