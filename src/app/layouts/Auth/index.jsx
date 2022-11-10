import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { createSelector } from "reselect";
import { makeSelectUser } from "../../containers/auth/selectors";

const stateSelector = createSelector(makeSelectUser, (user) => {
  console.log(user);
  return user;
});

export const Auth = () => {
  const user = useSelector(stateSelector);

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="flex w-full h-screen items-center justify-center bg-slate-200">
      <div className="bg-white border rounded shadow-lg w-auto p-3">
        <Outlet />
      </div>
    </div>
  );
};
