import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { createSelector } from "reselect";
import { makeSelectUser } from "../../containers/auth/selectors";

const stateSelector = createSelector(makeSelectUser, (user) => ({ user }));
export const ProtectedRoutes = ({ redirectTo = "/landing" }) => {
  const { user } = useSelector(stateSelector);
  return user ? <Outlet /> : <Navigate to={redirectTo} />;
};
