import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { createSelector } from "reselect";
import { makeSelectUser } from "../../../containers/auth/selectors";

const stateSelector = createSelector(makeSelectUser, (user) => ({ user }));

export const Navbar = () => {
  const { user } = useSelector(stateSelector);
  return (
    <div className="w-full h-screen">
      <header className="pb-2">
        <nav className="flex flex-row px-4 py-2 justify-between bg-slate-600 text-black shadow-lg">
          <div className="flex flex-row space-x-3">
            <NavLink to="/">Home</NavLink>
          </div>
          <ul className="flex flex-row space-x-3">
            {user ? (
              <li>{user.name}</li>
            ) : (
              <>
                <li>
                  <NavLink to="/auth/login">Iniciar Sesión</NavLink>
                </li>
                <li>
                  <NavLink to="/auth/register">Registrarse</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <section className="px-4 py-2">Landing</section>
    </div>
  );
};
